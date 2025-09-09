import React from 'react';
import Icon from '../../../components/AppIcon';
import ProgressIndicator from '../../../components/ui/ProgressIndicator';

const QuizHeader = ({ 
  currentStep, 
  totalSteps, 
  title = "Career Assessment Quiz",
  subtitle = "Answer honestly to get the most accurate recommendations" 
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      {/* Header Content */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Icon name="ClipboardList" size={24} color="white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h1>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-8">
        <ProgressIndicator
          currentStep={currentStep}
          totalSteps={totalSteps}
          showStepNumbers={true}
          showPercentage={true}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default QuizHeader;