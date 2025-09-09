import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz-assessment');
  };

  const handleBrowseColleges = () => {
    navigate('/college-recommendations');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
        <div className="animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center card-shadow">
              <Icon name="Rocket" size={32} color="white" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Launch Your
            <span className="block text-primary">Career Journey?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards your future success. Our comprehensive assessment will guide you to the perfect educational path and connect you with opportunities that match your potential.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={handleStartQuiz}
              iconName="Play"
              iconPosition="left"
              className="text-lg px-8 py-4 hover-lift card-shadow-hover animate-spring"
            >
              Start Your Assessment Now
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleBrowseColleges}
              iconName="Search"
              iconPosition="left"
              className="text-lg px-8 py-4"
            >
              Explore Colleges First
            </Button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>Quick 10-minute assessment</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Icon name="Shield" size={16} className="text-secondary" />
              <span>100% free and secure</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Icon name="Zap" size={16} className="text-accent" />
              <span>Instant personalized results</span>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-warning" />
                <span className="text-sm font-medium">Trusted by 500+ Schools</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-success" />
                <span className="text-sm font-medium">10,000+ Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;