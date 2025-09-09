import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const StreamDetails = ({ recommendedStream }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const streamData = {
    science: {
      overview: {
        title: 'Science Stream Overview',
        content: `The Science stream opens doors to numerous career opportunities in research, healthcare, technology, and innovation. This path is ideal for students who enjoy problem-solving, experimentation, and understanding how things work.\n\nYou'll develop critical thinking skills, analytical abilities, and a strong foundation in scientific methodology that will serve you throughout your career.`
      },
      careers: [
        { title: 'Medical Doctor', growth: '+7%', salary: '$200,000+' },
        { title: 'Research Scientist', growth: '+8%', salary: '$85,000+' },
        { title: 'Software Engineer', growth: '+22%', salary: '$95,000+' },
        { title: 'Biomedical Engineer', growth: '+5%', salary: '$92,000+' },
        { title: 'Data Scientist', growth: '+35%', salary: '$120,000+' },
        { title: 'Environmental Scientist', growth: '+8%', salary: '$73,000+' }
      ],
      skills: [
        'Analytical Thinking', 'Problem Solving', 'Research Methods','Mathematical Skills', 'Laboratory Techniques', 'Data Analysis','Scientific Writing', 'Critical Evaluation'
      ],
      subjects: [
        'Physics', 'Chemistry', 'Biology', 'Mathematics','Computer Science', 'Environmental Science'
      ]
    },
    commerce: {
      overview: {
        title: 'Commerce Stream Overview',
        content: `The Commerce stream prepares you for the dynamic world of business, finance, and entrepreneurship. This path is perfect for students interested in economics, accounting, business management, and financial markets.\n\nYou'll develop strong analytical skills, business acumen, and financial literacy that are highly valued in today's economy.`
      },
      careers: [
        { title: 'Financial Analyst', growth: '+5%', salary: '$85,000+' },
        { title: 'Business Manager', growth: '+5%', salary: '$105,000+' },
        { title: 'Chartered Accountant', growth: '+4%', salary: '$75,000+' },
        { title: 'Investment Banker', growth: '+10%', salary: '$150,000+' },
        { title: 'Marketing Manager', growth: '+7%', salary: '$95,000+' },
        { title: 'Entrepreneur', growth: '+15%', salary: 'Variable' }
      ],
      skills: [
        'Financial Analysis', 'Business Strategy', 'Market Research','Communication', 'Leadership', 'Negotiation','Project Management', 'Risk Assessment'
      ],
      subjects: [
        'Accounting', 'Economics', 'Business Studies', 'Mathematics','Statistics', 'Business Law'
      ]
    },
    arts: {
      overview: {
        title: 'Arts Stream Overview',
        content: `The Arts stream nurtures creativity, critical thinking, and cultural understanding. This path is ideal for students passionate about literature, history, philosophy, languages, and social sciences.\n\nYou'll develop excellent communication skills, cultural awareness, and the ability to think critically about complex social and cultural issues.`
      },
      careers: [
        { title: 'Content Writer', growth: '+8%', salary: '$55,000+' },
        { title: 'Psychologist', growth: '+3%', salary: '$82,000+' },
        { title: 'Teacher/Professor', growth: '+4%', salary: '$60,000+' },
        { title: 'Journalist', growth: '-9%', salary: '$45,000+' },
        { title: 'Social Worker', growth: '+12%', salary: '$52,000+' },
        { title: 'Graphic Designer', growth: '+3%', salary: '$50,000+' }
      ],
      skills: [
        'Creative Writing', 'Critical Analysis', 'Research Skills',
        'Communication', 'Cultural Awareness', 'Empathy',
        'Public Speaking', 'Visual Design'
      ],
      subjects: [
        'English Literature', 'History', 'Psychology', 'Sociology',
        'Political Science', 'Philosophy'
      ]
    },
    vocational: {
      overview: {
        title: 'Vocational Training Overview',
        content: `Vocational training provides practical, hands-on skills that lead directly to employment opportunities. This path is perfect for students who prefer learning by doing and want to enter the workforce quickly.\n\nYou'll gain industry-specific skills, professional certifications, and real-world experience that employers value highly.`
      },
      careers: [
        { title: 'Electrician', growth: '+8%', salary: '$60,000+' },
        { title: 'Plumber', growth: '+4%', salary: '$56,000+' },
        { title: 'Automotive Technician', growth: '+0%', salary: '$44,000+' },
        { title: 'Web Developer', growth: '+13%', salary: '$77,000+' },
        { title: 'HVAC Technician', growth: '+4%', salary: '$50,000+' },
        { title: 'Culinary Chef', growth: '+6%', salary: '$53,000+' }
      ],
      skills: [
        'Technical Skills', 'Problem Solving', 'Manual Dexterity','Attention to Detail', 'Safety Protocols', 'Equipment Operation','Quality Control', 'Time Management'
      ],
      subjects: [
        'Technical Drawing', 'Workshop Practice', 'Safety Procedures','Industry Standards', 'Equipment Maintenance', 'Quality Assurance'
      ]
    }
  };

  const data = streamData?.[recommendedStream] || streamData?.science;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'careers', label: 'Career Paths', icon: 'Briefcase' },
    { id: 'skills', label: 'Key Skills', icon: 'Target' },
    { id: 'subjects', label: 'Subjects', icon: 'BookOpen' }
  ];

  return (
    <div className="bg-card rounded-xl border border-border card-shadow">
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                activeTab === tab?.id
                  ? 'border-primary text-primary bg-primary/5' :'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{data?.overview?.title}</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {data?.overview?.content}
            </p>
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Popular Career Paths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data?.careers?.map((career, index) => (
                <div key={index} className="bg-muted rounded-lg p-4 hover-lift">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground">{career?.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      career?.growth?.startsWith('+') ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                    }`}>
                      {career?.growth}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Average Salary: <span className="font-medium text-foreground">{career?.salary}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Essential Skills You'll Develop</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {data?.skills?.map((skill, index) => (
                <div key={index} className="bg-gradient-subtle rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'subjects' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Core Subjects</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data?.subjects?.map((subject, index) => (
                <div key={index} className="flex items-center space-x-3 bg-muted rounded-lg p-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium text-foreground">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamDetails;