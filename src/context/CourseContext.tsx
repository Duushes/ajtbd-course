'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface CourseState {
  currentModule: number;
  completedModules: Set<number>;
  moduleScores: Record<number, number>;
  examScore: number | null;
  theme: 'light' | 'dark';
}

interface CourseContextType extends CourseState {
  setCurrentModule: (module: number) => void;
  completeModule: (module: number) => void;
  setModuleScore: (module: number, score: number) => void;
  setExamScore: (score: number) => void;
  toggleTheme: () => void;
  progress: number;
  totalModules: number;
}

const CourseContext = createContext<CourseContextType | null>(null);

const TOTAL_MODULES = 9;
const STORAGE_KEY = 'ajtbd-course-state';

function loadState(): Partial<CourseState> {
  if (typeof window === 'undefined') return {};
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    return {
      currentModule: parsed.currentModule ?? 0,
      completedModules: new Set((parsed.completedModules ?? []).filter((id: number) => id >= 1 && id <= TOTAL_MODULES)),
      moduleScores: parsed.moduleScores ?? {},
      examScore: parsed.examScore ?? null,
    };
  } catch {
    return {};
  }
}

function saveState(state: CourseState) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      currentModule: state.currentModule,
      completedModules: Array.from(state.completedModules),
      moduleScores: state.moduleScores,
      examScore: state.examScore,
    }));
  } catch {
    // ignore
  }
}

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('ajtbd-theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function CourseProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CourseState>({
    currentModule: 0,
    completedModules: new Set(),
    moduleScores: {},
    examScore: null,
    theme: 'light',
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = loadState();
    const theme = getInitialTheme();
    setState({
      currentModule: saved.currentModule ?? 0,
      completedModules: saved.completedModules ?? new Set(),
      moduleScores: saved.moduleScores ?? {},
      examScore: saved.examScore ?? null,
      theme,
    });
    document.documentElement.classList.toggle('dark', theme === 'dark');
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    saveState(state);
  }, [state, mounted]);

  const setCurrentModule = useCallback((module: number) => {
    setState(prev => ({ ...prev, currentModule: module }));
  }, []);

  const completeModule = useCallback((module: number) => {
    setState(prev => ({
      ...prev,
      completedModules: new Set([...prev.completedModules, module]),
    }));
  }, []);

  const setModuleScore = useCallback((module: number, score: number) => {
    setState(prev => ({
      ...prev,
      moduleScores: { ...prev.moduleScores, [module]: score },
    }));
  }, []);

  const setExamScore = useCallback((score: number) => {
    setState(prev => ({ ...prev, examScore: score }));
  }, []);

  const toggleTheme = useCallback(() => {
    setState(prev => {
      const next = prev.theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('ajtbd-theme', next);
      return { ...prev, theme: next };
    });
  }, []);

  const progress = (state.completedModules.size / TOTAL_MODULES) * 100;

  return (
    <CourseContext.Provider value={{
      ...state,
      setCurrentModule,
      completeModule,
      setModuleScore,
      setExamScore,
      toggleTheme,
      progress,
      totalModules: TOTAL_MODULES,
    }}>
      {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error('useCourse must be used within CourseProvider');
  return ctx;
}
