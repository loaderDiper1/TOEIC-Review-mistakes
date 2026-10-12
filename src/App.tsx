import React, { useState, useEffect, useRef } from 'react';
import { getStudentById } from './data/students';
import { StudentAccount } from './data/types';
import { LoginView } from './components/LoginView';
import { QuestionCard } from './components/QuestionCard';
import { PassageViewer } from './components/PassageViewer';
import { ChevronLeft, ChevronRight, LogOut, BookOpen } from 'lucide-react';

export default function App() {
  // Session-based authentication state
  const [currentStudent, setCurrentStudent] = useState<StudentAccount | null>(() => {
    try {
      const savedStudentId = sessionStorage.getItem('active_student_id');
      if (savedStudentId) {
        return getStudentById(savedStudentId);
      }
      return null;
    } catch {
      return null;
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScrollYRef = useRef(0);

  const handleLogin = (student: StudentAccount) => {
    setCurrentStudent(student);
    setSelectedIndex(0);
    setShowBottomNav(true);
    try {
      sessionStorage.setItem('active_student_id', student.id);
    } catch {
      // Ignore sessionStorage errors
    }
  };

  const handleLogout = () => {
    setCurrentStudent(null);
    setSelectedIndex(0);
    try {
      sessionStorage.removeItem('active_student_id');
    } catch {
      // Ignore sessionStorage errors
    }
  };

  const mistakes = currentStudent?.mistakes || [];
  const total = mistakes.length;
  const currentItem = mistakes[selectedIndex] || mistakes[0];

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowBottomNav(true);
    }
  };

  const goToNext = () => {
    if (selectedIndex < total - 1) {
      setSelectedIndex(selectedIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowBottomNav(true);
    }
  };

  const handleSelectIndex = (index: number) => {
    setSelectedIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowBottomNav(true);
  };

  // Keyboard navigation with ArrowLeft / ArrowRight
  useEffect(() => {
    if (!currentStudent || total === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, currentStudent, total]);

  // Hide bottom nav on scroll down, sticky show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const diff = currentScrollY - lastScrollYRef.current;

      // Always show when near top or when scrolled to the very bottom
      if (currentScrollY <= 40 || windowHeight + currentScrollY >= documentHeight - 60) {
        setShowBottomNav(true);
      } else if (diff > 8) {
        // Scrolling down -> hide
        setShowBottomNav(false);
      } else if (diff < -8) {
        // Scrolling up -> show
        setShowBottomNav(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If not logged in, show the login view
  if (!currentStudent) {
    return <LoginView onLoginSuccess={handleLogin} />;
  }

  // Google-search style pagination: limit to 5 numbers max
  const MAX_VISIBLE = 5;
  let start = Math.max(0, selectedIndex - Math.floor(MAX_VISIBLE / 2));
  let end = start + MAX_VISIBLE;

  if (end > total) {
    end = total;
    start = Math.max(0, end - MAX_VISIBLE);
  }

  const visibleItems = mistakes.slice(start, end).map((item, idx) => ({
    item,
    index: start + idx,
  }));

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-28 sm:pb-32">
      {/* Space-Saving Minimal Header: Student Name on left, Log Out on right */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-stone-200 px-4 py-2.5 shadow-2xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Top Left: Student Name only */}
          <div className="flex items-center">
            <span className="text-base font-bold text-stone-900 tracking-tight">
              {currentStudent.name}
            </span>
          </div>

          {/* Top Right: Log Out button only */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Log out of student account"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Review View */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-5">
        {total === 0 ? (
          <div className="max-w-xl mx-auto mt-12 bg-white border border-stone-200 rounded-xl p-8 text-center shadow-xs">
            <BookOpen className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h2 className="text-lg font-bold text-stone-900 mb-1">
              No Mistakes Recorded Yet
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Welcome, {currentStudent.name}. Your TOEIC Practice Test 1 Reading mistake records have not been uploaded yet. Please check back once your examination review has been added.
            </p>
            <div className="text-xs text-stone-400">
              Student ID: <span className="font-mono">{currentStudent.id}</span>
            </div>
          </div>
        ) : (
          <>
            {/* If question has a passage, render the passage on this page */}
            {currentItem.passageText && currentItem.passageTitle && (
              <PassageViewer
                title={currentItem.passageTitle}
                type={currentItem.passageType}
                content={currentItem.passageText}
                activeQuestionNumber={currentItem.questionNumber}
              />
            )}

            {/* The Single Question Card */}
            <QuestionCard
              item={currentItem}
              selfTestMode={false}
            />
          </>
        )}
      </main>

      {/* Sticky Bottom Navigation: Shows when scrolling up, hides when scrolling down */}
      {total > 0 && (
        <nav
          aria-label="Question Navigation"
          className={`fixed bottom-0 inset-x-0 z-30 pointer-events-none transition-transform duration-300 ease-in-out ${
            showBottomNav ? 'translate-y-0' : 'translate-y-24'
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 pb-4 pt-2 flex justify-center">
            <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-lg rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                disabled={selectedIndex === 0}
                onClick={goToPrevious}
                className="flex items-center gap-0.5 px-3 py-1.5 text-xs font-semibold rounded-full text-blue-600 hover:bg-blue-50 disabled:text-stone-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
                title="Previous question (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {visibleItems.map(({ item, index }) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectIndex(index)}
                    className={`min-w-8 h-8 px-2 flex items-center justify-center rounded-full text-xs font-mono transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-xs scale-105'
                        : 'text-blue-600 hover:bg-blue-50 hover:text-blue-800 font-medium'
                    }`}
                    title={`Question ${item.questionNumber} (${item.partShort})`}
                  >
                    {item.questionNumber}
                  </button>
                );
              })}

              <button
                type="button"
                disabled={selectedIndex === total - 1}
                onClick={goToNext}
                className="flex items-center gap-0.5 px-3 py-1.5 text-xs font-semibold rounded-full text-blue-600 hover:bg-blue-50 disabled:text-stone-300 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer"
                title="Next question (Right Arrow)"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
