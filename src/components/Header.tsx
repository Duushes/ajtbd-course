'use client';

import ThemeToggle from './ThemeToggle';
import { useCourse } from '@/context/CourseContext';

export default function Header() {
  const { currentModule, setCurrentModule, completedModules, totalModules } = useCourse();

  return (
    <header className="sticky top-1 z-40 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => setCurrentModule(0)}
          className="text-sm font-semibold tracking-tight hover:text-accent transition-colors cursor-pointer"
        >
          AJTBD Course
        </button>

        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground mr-2 hidden sm:block">
            {completedModules.size}/{totalModules} modules
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
