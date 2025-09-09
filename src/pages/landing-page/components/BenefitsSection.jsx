import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: "Target",
      title: "Personalized Recommendations",
      description: "Get tailored career stream suggestions based on your interests, skills, and academic performance through our comprehensive assessment.",
      color: "from-primary to-blue-500"
    },
    {
      id: 2,
      icon: "GraduationCap",
      title: "College Connections",
      description: "Discover and connect with top educational institutions that align with your career goals and academic preferences.",
      color: "from-secondary to-green-500"
    },
    {
      id: 3,
      icon: "TrendingUp",
      title: "Career Insights",
      description: "Access detailed information about different career paths, job prospects, and industry trends to make informed decisions.",
      color: "from-accent to-purple-500"
    },
    {
      id: 4,
      icon: "Clock",
      title: "Real-time Updates",
      description: "Stay informed about admission deadlines, scholarship opportunities, and important academic calendar events.",
      color: "from-warning to-orange-500"
    },
    {
      id: 5,
      icon: "Shield",
      title: "Expert Guidance",
      description: "Benefit from insights developed by career counselors and education experts to guide your academic journey.",
      color: "from-success to-emerald-500"
    },
    {
      id: 6,
      icon: "Zap",
      title: "Quick Assessment",
      description: "Complete our streamlined quiz in just 10-15 minutes and get instant results with actionable recommendations.",
      color: "from-error to-red-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive career guidance tools designed specifically for students navigating their educational and professional futures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => (
            <div
              key={benefit?.id}
              className="bg-card border border-border rounded-xl p-6 hover-lift card-shadow hover:card-shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit?.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={benefit?.icon} size={24} color="white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit?.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {benefit?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;