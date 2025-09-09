import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendationBanner = ({ 
  recommendedStream, 
  onRetakeQuiz, 
  className = "" 
}) => {
  const streamInfo = {
    science: {
      icon: 'Microscope',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      title: 'Science Stream Recommendations',
      description: 'Based on your assessment, these colleges offer excellent Science programs aligned with your interests and career goals.'
    },
    commerce: {
      icon: 'TrendingUp',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      title: 'Commerce Stream Recommendations',
      description: 'These institutions provide outstanding Commerce and Business programs that match your profile and aspirations.'
    },
    arts: {
      icon: 'Palette',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      title: 'Arts & Humanities Recommendations',
      description: 'Discover colleges with strong Arts and Humanities programs tailored to your creative and analytical strengths.'
    },
    vocational: {
      icon: 'Wrench',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      title: 'Vocational Training Recommendations',
      description: 'These institutions offer practical, skill-based programs designed to prepare you for immediate career opportunities.'
    }
  };

  const currentStream = streamInfo?.[recommendedStream] || streamInfo?.science;

  return (
    <div className={`
      ${currentStream?.bgColor} ${currentStream?.borderColor} 
      border rounded-lg p-6 mb-8 ${className}
    `}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start space-x-4">
          <div className={`
            w-12 h-12 ${currentStream?.bgColor} border ${currentStream?.borderColor} 
            rounded-lg flex items-center justify-center flex-shrink-0
          `}>
            <Icon 
              name={currentStream?.icon} 
              size={24} 
              className={currentStream?.color} 
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {currentStream?.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {currentStream?.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <Button
            variant="outline"
            onClick={onRetakeQuiz}
            iconName="RotateCcw"
            iconPosition="left"
            iconSize={16}
            className="bg-white hover:bg-gray-50"
          >
            Retake Quiz
          </Button>
          
          <Button
            variant="default"
            iconName="BookOpen"
            iconPosition="left"
            iconSize={16}
          >
            View All Programs
          </Button>
        </div>
      </div>
      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/60 rounded-md p-3 text-center">
          <div className="text-lg font-semibold text-foreground">150+</div>
          <div className="text-xs text-muted-foreground">Recommended Colleges</div>
        </div>
        <div className="bg-white/60 rounded-md p-3 text-center">
          <div className="text-lg font-semibold text-foreground">95%</div>
          <div className="text-xs text-muted-foreground">Match Accuracy</div>
        </div>
        <div className="bg-white/60 rounded-md p-3 text-center">
          <div className="text-lg font-semibold text-foreground">24/7</div>
          <div className="text-xs text-muted-foreground">Support Available</div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationBanner;