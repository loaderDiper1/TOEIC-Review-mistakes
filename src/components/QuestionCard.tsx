import React, { useState } from 'react';
import { Check, X, ChevronDown, AlertCircle } from 'lucide-react';
import { ReviewItem } from '../data/types';

interface QuestionCardProps {
  item: ReviewItem;
  selfTestMode?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  item,
  selfTestMode = false,
}) => {
  const [revealedInSelfTest, setRevealedInSelfTest] = useState(false);
  const [selectedInSelfTest, setSelectedInSelfTest] = useState<'A' | 'B' | 'C' | 'D' | null>(null);

  const showExplanations = !selfTestMode || revealedInSelfTest;
  const hasExplanations = Boolean(
    item.whyStudentWrong || item.whyCorrectRight || item.grammarOrReadingRule || (item.otherOptions && item.otherOptions.length > 0)
  );

  return (
    <article className="rounded-xl border border-stone-200 bg-white shadow-xs p-6 mb-6 print-break-inside-avoid">
      {/* Question Header */}
      <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
            <span className="font-semibold text-stone-700">{item.part}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-numbers">Question {item.questionNumber}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono font-medium text-stone-700">{item.sheetCorrectionMark}</span>
          </div>
          <h3 className="text-base font-semibold text-stone-900 leading-snug">
            {item.partShort === 'Part 5' ? 'Complete the Sentence' : 'Reading Question'}
          </h3>
        </div>
      </div>

      {/* Question Prompt */}
      <div className="py-4">
        <p className="text-stone-900 text-base leading-relaxed whitespace-pre-line font-medium">
          {item.questionText}
        </p>
      </div>

      {/* Answer Options */}
      <div className="space-y-2 mb-6">
        {item.options.map((option) => {
          const isStudentPick = item.studentAnswer === option.label;
          const isCorrect = item.correctAnswer === option.label;

          let optionStyle = 'border-stone-200 bg-stone-50/50 text-stone-800';

          if (showExplanations) {
            if (isCorrect) {
              optionStyle = 'border-emerald-300 bg-emerald-50/70 text-emerald-950 font-medium';
            } else if (isStudentPick) {
              optionStyle = 'border-rose-200 bg-rose-50/70 text-rose-950';
            }
          } else {
            if (selectedInSelfTest === option.label) {
              optionStyle = 'border-stone-400 bg-stone-100 text-stone-900 font-medium';
            }
          }

          return (
            <div
              key={option.label}
              onClick={() => {
                if (selfTestMode && !revealedInSelfTest) {
                  setSelectedInSelfTest(option.label);
                }
              }}
              className={`flex items-center justify-between p-3.5 rounded-lg border text-sm transition-all ${optionStyle} ${
                selfTestMode && !revealedInSelfTest ? 'cursor-pointer hover:border-stone-300' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 flex items-center justify-center rounded text-xs font-mono font-semibold shrink-0 ${
                  showExplanations && isCorrect
                    ? 'bg-emerald-600 text-white'
                    : showExplanations && isStudentPick
                    ? 'bg-rose-600 text-white'
                    : 'bg-stone-200 text-stone-700'
                }`}>
                  {option.label}
                </span>
                <span className="leading-snug">{option.text}</span>
              </div>

              {/* Status Indicator */}
              {showExplanations && (
                <div className="flex items-center gap-2 text-xs font-medium shrink-0">
                  {isCorrect && (
                    <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                      <Check className="w-3.5 h-3.5" />
                      Correct Answer
                    </span>
                  )}
                  {isStudentPick && (
                    <span className="flex items-center gap-1 text-rose-700 bg-rose-100/70 px-2 py-0.5 rounded">
                      <X className="w-3.5 h-3.5" />
                      Student&apos;s Answer
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Self Test Toggle Button */}
      {selfTestMode && !revealedInSelfTest && (
        <div className="mb-4 pt-2 border-t border-stone-100 text-center no-print">
          <button
            type="button"
            onClick={() => setRevealedInSelfTest(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-800 rounded-lg hover:bg-stone-900 transition-colors"
          >
            Reveal Analysis
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Analysis Deck (if explanations exist) */}
      {showExplanations && (
        <div className="space-y-4 pt-4 border-t border-stone-200">
          {/* Why Student Answer is Wrong */}
          {item.whyStudentWrong && (
            <div className="rounded-lg bg-rose-50/40 border border-rose-100 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1.5 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                Why Option ({item.studentAnswer}) Is Incorrect
              </h4>
              <p className="text-sm text-rose-950 leading-relaxed">
                {item.whyStudentWrong}
              </p>
            </div>
          )}

          {/* Why Correct Answer is Right */}
          {item.whyCorrectRight && (
            <div className="rounded-lg bg-emerald-50/40 border border-emerald-100 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Why Option ({item.correctAnswer}) Is Correct
              </h4>
              <p className="text-sm text-emerald-950 leading-relaxed">
                {item.whyCorrectRight}
              </p>
            </div>
          )}

          {/* Grammar Rule / Reading Strategy */}
          {item.grammarOrReadingRule && (
            <div className="rounded-lg bg-stone-50 border border-stone-200 p-4">
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span className="font-semibold text-stone-700 uppercase tracking-wider">
                  {item.partShort === 'Part 7' ? 'Reading Strategy' : 'Grammar Rule'}
                </span>
                <span aria-hidden="true">·</span>
                <span>{item.grammarOrReadingRule.title}</span>
              </div>
              <p className="text-sm text-stone-800 leading-relaxed whitespace-pre-line mb-2">
                {item.grammarOrReadingRule.description}
              </p>
              <div className="p-2.5 bg-stone-100/80 rounded border border-stone-200 text-xs font-mono text-stone-800">
                <span className="font-semibold text-stone-900">Key Rule:</span> {item.grammarOrReadingRule.keyTakeaway}
              </div>
            </div>
          )}

          {/* Analysis of Other Distractor Options */}
          {item.otherOptions && item.otherOptions.length > 0 && (
            <div className="rounded-lg bg-stone-50/60 border border-stone-200/80 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                Distractor Analysis (Why Other Options Fail)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {item.otherOptions.map((other) => (
                  <div key={other.label} className="text-xs text-stone-700 bg-white p-2.5 rounded border border-stone-200">
                    <span className="font-semibold font-mono text-stone-900">Option ({other.label}) &quot;{other.text}&quot;: </span>
                    <span>{other.explanation}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verification Record */}
          <div className="text-xs text-stone-500 flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-stone-600">Verification Record:</span>
              <span className="font-mono">{item.sheetCorrectionMark}</span>
            </div>
            {!hasExplanations && (
              <span className="text-stone-400 italic">Raw mistake record preserved</span>
            )}
          </div>
        </div>
      )}
    </article>
  );
};
