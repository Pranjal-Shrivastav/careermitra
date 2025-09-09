import React from 'react';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const QuizQuestion = ({ 
  question, 
  onAnswer, 
  selectedAnswer, 
  questionNumber, 
  totalQuestions 
}) => {
  const handleYesNoAnswer = (answer) => {
    onAnswer(answer);
  };

  const handleMultipleChoiceAnswer = (optionId) => {
    onAnswer(optionId);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Question Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-mono text-muted-foreground">
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
          {question?.text}
        </h2>
        
        {question?.description && (
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            {question?.description}
          </p>
        )}
      </div>
      {/* Answer Options */}
      <div className="space-y-4">
        {question?.type === 'yes-no' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              variant={selectedAnswer === 'yes' ? 'default' : 'outline'}
              size="lg"
              onClick={() => handleYesNoAnswer('yes')}
              className="h-16 text-lg font-medium hover-lift transition-all duration-200"
              fullWidth
            >
              Yes
            </Button>
            <Button
              variant={selectedAnswer === 'no' ? 'default' : 'outline'}
              size="lg"
              onClick={() => handleYesNoAnswer('no')}
              className="h-16 text-lg font-medium hover-lift transition-all duration-200"
              fullWidth
            >
              No
            </Button>
          </div>
        )}

        {question?.type === 'multiple-choice' && (
          <div className="space-y-3">
            {question?.options?.map((option) => (
              <div
                key={option?.id}
                className={`
                  p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover-lift
                  ${selectedAnswer === option?.id 
                    ? 'border-primary bg-primary/5 card-shadow-hover' 
                    : 'border-border bg-card hover:border-primary/30 card-shadow'
                  }
                `}
                onClick={() => handleMultipleChoiceAnswer(option?.id)}
              >
                <div className="flex items-start space-x-4">
                  <Checkbox
                    checked={selectedAnswer === option?.id}
                    onChange={() => handleMultipleChoiceAnswer(option?.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground text-lg mb-2">
                      {option?.text}
                    </h3>
                    {option?.description && (
                      <p className="text-muted-foreground">
                        {option?.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;