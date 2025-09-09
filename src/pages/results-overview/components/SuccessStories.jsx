import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SuccessStories = ({ recommendedStream }) => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = {
    science: [
      {
        name: 'Dr. Sarah Chen',
        role: 'Biomedical Research Scientist',
        company: 'Stanford Medical Center',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
        story: `After completing my science stream, I pursued biomedical engineering and now lead groundbreaking research in regenerative medicine. The analytical skills I developed in high school were crucial to my success.`,
        achievement: 'Published 15+ research papers',
        timeline: '2018 Graduate → 2025 Lead Scientist'
      },
      {
        name: 'Alex Rodriguez',
        role: 'Senior Software Engineer',
        company: 'Google',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        story: `The science stream gave me a strong foundation in mathematics and logical thinking. Today, I work on AI systems that impact millions of users worldwide.`,
        achievement: 'Led 3 major product launches',
        timeline: '2019 Graduate → 2025 Senior Engineer'
      }
    ],
    commerce: [
      {
        name: 'Michael Thompson',
        role: 'Investment Banking VP',
        company: 'Goldman Sachs',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        story: `Commerce stream taught me financial analysis and business strategy. Starting as an analyst, I've worked my way up to VP, managing multi-million dollar portfolios.`,
        achievement: 'Managed $500M+ in investments',timeline: '2017 Graduate → 2025 Vice President'
      },
      {
        name: 'Priya Sharma',role: 'Startup Founder & CEO',company: 'EcoTech Solutions',image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',story: `My commerce background gave me the business acumen to start my own company. We've grown from a 2-person startup to a 50-employee company in just 4 years.`,
        achievement: 'Built $10M revenue company',
        timeline: '2020 Graduate → 2025 CEO'
      }
    ],
    arts: [
      {
        name: 'Emma Wilson',
        role: 'Creative Director',
        company: 'Netflix',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
        story: `Arts stream nurtured my creativity and critical thinking. I now lead creative campaigns for major Netflix originals, combining storytelling with visual design.`,
        achievement: 'Won 3 Emmy nominations',
        timeline: '2018 Graduate → 2025 Creative Director'
      },
      {
        name: 'David Kim',
        role: 'Bestselling Author',
        company: 'Independent',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
        story: `The arts stream developed my writing skills and cultural understanding. My novels have sold over 2 million copies worldwide and been translated into 12 languages.`,
        achievement: 'New York Times Bestseller',
        timeline: '2016 Graduate → 2025 Published Author'
      }
    ],
    vocational: [
      {
        name: 'Carlos Martinez',
        role: 'Master Electrician & Business Owner',
        company: 'Martinez Electrical Services',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
        story: `Vocational training gave me practical skills and immediate employment. I started my own electrical business and now employ 15 technicians across the city.`,
        achievement: 'Built 6-figure business',
        timeline: '2019 Graduate → 2025 Business Owner'
      },
      {
        name: 'Jessica Brown',
        role: 'Head Chef',
        company: 'Michelin Star Restaurant',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
        story: `Culinary vocational training taught me both technical skills and creativity. I've worked my way up from line cook to head chef at a prestigious restaurant.`,achievement: 'Earned Michelin Star recognition',timeline: '2020 Graduate → 2025 Head Chef'
      }
    ]
  };

  const stories = successStories?.[recommendedStream] || successStories?.science;

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories?.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories?.length) % stories?.length);
  };

  const currentStoryData = stories?.[currentStory];

  return (
    <div className="bg-card rounded-xl border border-border card-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
          <Icon name="Users" size={20} className="text-primary" />
          <span>Success Stories</span>
        </h3>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={prevStory}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
            disabled={stories?.length <= 1}
          >
            <Icon name="ChevronLeft" size={16} className="text-muted-foreground" />
          </button>
          
          <span className="text-sm text-muted-foreground px-2">
            {currentStory + 1} of {stories?.length}
          </span>
          
          <button
            onClick={nextStory}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
            disabled={stories?.length <= 1}
          >
            <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src={currentStoryData?.image}
                alt={currentStoryData?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-foreground">{currentStoryData?.name}</h4>
              <p className="text-primary font-medium">{currentStoryData?.role}</p>
              <p className="text-sm text-muted-foreground">{currentStoryData?.company}</p>
            </div>
            
            <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary/20 pl-4">
              "{currentStoryData?.story}"
            </blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-warning" />
                <span className="text-sm font-medium text-foreground">{currentStoryData?.achievement}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{currentStoryData?.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Story indicators */}
      {stories?.length > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {stories?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentStory ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SuccessStories;