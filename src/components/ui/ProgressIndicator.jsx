import React from 'react';

const ProgressIndicator = ({ 
  currentStep = 1, 
  totalSteps = 10, 
  showStepNumbers = true,
  showPercentage = true,
  className = "",
  variant = "default" // default, compact, circular
}) => {
  const progressPercentage = Math.round((currentStep / totalSteps) * 100);
  
  if (variant === "circular") {
    const circumference = 2 * Math.PI * 20;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;
    
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke="var(--color-muted)"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke="var(--color-primary)"
              strokeWidth="4"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-400 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-mono font-medium text-foreground">
              {progressPercentage}%
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === "compact") {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <div className="flex-1 bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-400 ease-out animate-progress"
            style={{ 
              width: `${progressPercentage}%`,
              '--progress-width': `${progressPercentage}%`
            }}
          />
        </div>
        <span className="text-sm font-mono font-medium text-muted-foreground min-w-[3rem]">
          {currentStep}/{totalSteps}
        </span>
      </div>
    );
  }
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        {showStepNumbers && (
          <span className="text-sm font-medium text-foreground">
            Question {currentStep} of {totalSteps}
          </span>
        )}
        {showPercentage && (
          <span className="text-sm font-mono font-medium text-muted-foreground">
            {progressPercentage}%
          </span>
        )}
      </div>
      
      <div className="w-full bg-muted rounded-full h-3">
        <div
          className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-400 ease-out animate-progress card-shadow"
          style={{ 
            width: `${progressPercentage}%`,
            '--progress-width': `${progressPercentage}%`
          }}
        />
      </div>
      
      {progressPercentage === 100 && (
        <div className="mt-2 flex items-center space-x-2 text-success animate-spring">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <span className="text-sm font-medium">Assessment Complete!</span>
        </div>
      )}
    </div>
  );
};

export default ProgressIndicator;