import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz-assessment');
  };

  return (
    <section className="relative bg-gradient-hero min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <div className="animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center card-shadow">
              <Icon name="Compass" size={40} color="white" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Career Path
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Take our comprehensive career assessment quiz to get personalized recommendations for your educational journey and connect with the right colleges for your future success.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={handleStartQuiz}
              iconName="Play"
              iconPosition="left"
              className="text-lg px-8 py-4 hover-lift card-shadow-hover"
            >
              Start Your Career Quiz
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/college-recommendations')}
              iconName="GraduationCap"
              iconPosition="left"
              className="text-lg px-8 py-4"
            >
              Browse Colleges
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span className="text-sm font-medium">10,000+ Students Guided</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} />
              <span className="text-sm font-medium">500+ Partner Colleges</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} />
              <span className="text-sm font-medium">4.9/5 Student Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;