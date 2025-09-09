import React from 'react';
import Icon from '../../../components/AppIcon';

const StreamRecommendation = ({ recommendedStream, confidence }) => {
  const streamConfig = {
    science: {
      title: 'Science Stream',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      icon: 'Microscope',
      description: 'Perfect for analytical minds who love discovery and innovation'
    },
    commerce: {
      title: 'Commerce Stream',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      icon: 'TrendingUp',
      description: 'Ideal for business-minded individuals with strong numerical skills'
    },
    arts: {
      title: 'Arts Stream',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      icon: 'Palette',
      description: 'Great for creative thinkers who excel in communication and expression'
    },
    vocational: {
      title: 'Vocational Training',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      icon: 'Wrench',
      description: 'Perfect for hands-on learners who prefer practical skills'
    }
  };

  const config = streamConfig?.[recommendedStream] || streamConfig?.science;

  return (
    <div className="relative overflow-hidden bg-card rounded-2xl border border-border card-shadow-hover">
      <div className={`absolute inset-0 bg-gradient-to-br ${config?.color} opacity-5`}></div>
      <div className="relative p-8 text-center">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${config?.bgColor} mb-6`}>
          <Icon name={config?.icon} size={32} className={config?.textColor} />
        </div>
        
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Your Recommended Stream
          </h2>
          <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${config?.color} text-white font-semibold text-xl mb-3`}>
            {config?.title}
          </div>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {config?.description}
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={20}
                className={i < Math.floor(confidence / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {confidence}% Match
          </span>
        </div>

        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span>Based on your assessment responses and interests</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamRecommendation;