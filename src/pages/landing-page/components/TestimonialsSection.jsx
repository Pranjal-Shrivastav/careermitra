import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "High School Graduate",
      school: "Lincoln High School",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "The career assessment helped me realize my passion for environmental science. I\'m now enrolled in my dream college with a clear path ahead!",
      rating: 5,
      stream: "Science"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "College Freshman",
      school: "Roosevelt Academy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "I was confused between commerce and arts. This platform\'s detailed analysis showed me that business administration was perfect for my skills.",
      rating: 5,
      stream: "Commerce"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Parent",
      school: "Supporting daughter\'s journey",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "As a parent, I was worried about my daughter's career choices. This platform provided us both with clarity and confidence in her decisions.",
      rating: 5,
      stream: "Guidance"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Career Counselor",
      school: "Madison High School",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "I recommend this platform to all my students. The comprehensive assessment and college recommendations are incredibly valuable resources.",
      rating: 5,
      stream: "Professional"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-muted"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students, parents, and educators who have found success through our career guidance platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              className="bg-card border border-border rounded-xl p-6 hover-lift card-shadow hover:card-shadow-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial?.avatar}
                    alt={`${testimonial?.name} profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-foreground truncate">
                    {testimonial?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial?.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial?.school}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial?.rating)}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-4">
                "{testimonial?.content}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {testimonial?.stream}
                </span>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-xs">Verified Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to join them on your career journey?
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>Over 10,000 students have found their path</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;