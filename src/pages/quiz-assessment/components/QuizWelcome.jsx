import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const QuizWelcome = ({ onStart }) => {
  const features = [
    {
      icon: "Target",
      title: "Personalized Results",
      description: "Get recommendations tailored to your interests and strengths"
    },
    {
      icon: "Clock",
      title: "Quick Assessment",
      description: "Complete the quiz in just 10-15 minutes"
    },
    {
      icon: "GraduationCap",
      title: "Expert Guidance",
      description: "Based on proven career counseling methodologies"
    },
    {
      icon: "TrendingUp",
      title: "Future-Ready",
      description: "Discover career paths aligned with industry trends"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      {/* Welcome Header */}
      <div className="mb-12">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Compass" size={32} color="white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Discover Your Perfect Career Path
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Take our comprehensive career assessment to explore educational streams and career opportunities that match your interests, skills, and aspirations.
        </p>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features?.map((feature, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-lg p-6 hover-lift transition-all duration-200 card-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name={feature?.icon} size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              {feature?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {feature?.description}
            </p>
          </div>
        ))}
      </div>
      {/* Assessment Info */}
      <div className="bg-gradient-subtle border border-border rounded-lg p-8 mb-8">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Users" size={20} />
            <span className="text-sm">10,000+ students assessed</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Clock" size={20} />
            <span className="text-sm">15 minutes average</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Shield" size={20} />
            <span className="text-sm">100% confidential</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3">
          What You'll Discover
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="flex items-start space-x-3">
            <Icon name="BookOpen" size={20} className="text-primary mt-1" />
            <div>
              <h4 className="font-medium text-foreground">Educational Stream</h4>
              <p className="text-sm text-muted-foreground">Science, Arts, Commerce, or Vocational</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Building" size={20} className="text-primary mt-1" />
            <div>
              <h4 className="font-medium text-foreground">College Matches</h4>
              <p className="text-sm text-muted-foreground">Institutions aligned with your goals</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Briefcase" size={20} className="text-primary mt-1" />
            <div>
              <h4 className="font-medium text-foreground">Career Options</h4>
              <p className="text-sm text-muted-foreground">Future job opportunities</p>
            </div>
          </div>
        </div>
      </div>
      {/* Start Button */}
      <Button
        variant="default"
        size="xl"
        onClick={onStart}
        iconName="ArrowRight"
        iconPosition="right"
        className="text-lg px-12 py-4 hover-lift"
      >
        Start Your Assessment
      </Button>
      <p className="text-sm text-muted-foreground mt-4">
        No registration required • Results available immediately
      </p>
    </div>
  );
};

export default QuizWelcome;