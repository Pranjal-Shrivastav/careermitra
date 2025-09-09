import React from 'react';
import Icon from '../../../components/AppIcon';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: "Play",
      title: "Take the Assessment",
      description: "Complete our comprehensive career quiz with questions about your interests, skills, and academic preferences.",
      duration: "10-15 minutes"
    },
    {
      id: 2,
      icon: "BarChart3",
      title: "Get Your Results",
      description: "Receive personalized recommendations for educational streams including Science, Arts, Commerce, or Vocational paths.",
      duration: "Instant results"
    },
    {
      id: 3,
      icon: "Search",
      title: "Explore Colleges",
      description: "Browse through curated college recommendations that match your career goals and academic profile.",
      duration: "Unlimited access"
    },
    {
      id: 4,
      icon: "Bell",
      title: "Stay Updated",
      description: "Receive notifications about admission deadlines, scholarship opportunities, and important academic events.",
      duration: "Ongoing support"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our simple 4-step process helps you discover your ideal career path and connect with the right educational opportunities.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps?.map((step, index) => (
              <div
                key={step?.id}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Mobile Timeline Connector */}
                {index < steps?.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
                )}

                <div className="bg-card border border-border rounded-xl p-6 hover-lift card-shadow hover:card-shadow-hover transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center relative z-20">
                      <Icon name={step?.icon} size={20} color="white" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Step {step?.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step?.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step?.description}
                  </p>

                  <div className="flex items-center space-x-2 text-sm text-secondary">
                    <Icon name="Clock" size={16} />
                    <span className="font-medium">{step?.duration}</span>
                  </div>
                </div>

                {/* Desktop Timeline Dot */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;