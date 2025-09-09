import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuizNavigation = ({ 
  currentQuestion, 
  totalQuestions, 
  onPrevious, 
  onNext, 
  canGoBack, 
  canGoNext, 
  isLastQuestion,
  onComplete 
}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto mt-8">
      {/* Previous Button */}
      <div className="flex-1">
        {canGoBack && currentQuestion > 1 && (
          <Button
            variant="outline"
            onClick={onPrevious}
            iconName="ChevronLeft"
            iconPosition="left"
            className="w-auto"
          >
            Previous
          </Button>
        )}
      </div>

      {/* Question Counter */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Icon name="Circle" size={6} className="text-primary" />
        <span className="font-mono">
          {currentQuestion} / {totalQuestions}
        </span>
        <Icon name="Circle" size={6} className="text-primary" />
      </div>

      {/* Next/Complete Button */}
      <div className="flex-1 flex justify-end">
        {isLastQuestion ? (
          <Button
            variant="default"
            onClick={onComplete}
            disabled={!canGoNext}
            iconName="CheckCircle"
            iconPosition="right"
            className="w-auto"
          >
            Complete Assessment
          </Button>
        ) : (
          <Button
            variant="default"
            onClick={onNext}
            disabled={!canGoNext}
            iconName="ChevronRight"
            iconPosition="right"
            className="w-auto"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizNavigation;