import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface PassageViewerProps {
  title: string;
  type?: string;
  content: string;
  associatedQuestions?: number[];
  activeQuestionNumber?: number;
}

export const PassageViewer: React.FC<PassageViewerProps> = ({
  title,
  type,
  content,
  associatedQuestions,
  activeQuestionNumber,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-6 rounded-xl border border-stone-200 bg-stone-100/60 transition-all overflow-hidden">
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between px-5 py-3.5 bg-stone-100 cursor-pointer select-none hover:bg-stone-200/70 transition-colors"
      >
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-stone-600 shrink-0" />
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <span className="font-semibold text-stone-800 text-sm">{title}</span>
            {type && (
              <>
                <span aria-hidden="true">·</span>
                <span>{type}</span>
              </>
            )}
            {associatedQuestions && associatedQuestions.length > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono-numbers">Questions: {associatedQuestions.join(', ')}</span>
              </>
            )}
          </div>
        </div>
        <button
          type="button"
          className="text-stone-500 hover:text-stone-800 p-1 rounded transition-colors text-xs flex items-center gap-1"
          aria-label={isExpanded ? "Collapse passage" : "Expand passage"}
        >
          <span>{isExpanded ? 'Hide Passage' : 'View Passage'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isExpanded && (
        <div className="p-5 text-stone-800 bg-white/80 border-t border-stone-200 text-sm leading-relaxed whitespace-pre-line font-serif selection:bg-amber-100">
          {content}
        </div>
      )}
    </div>
  );
};
