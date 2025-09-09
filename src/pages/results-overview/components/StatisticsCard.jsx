import React from 'react';
import Icon from '../../../components/AppIcon';

const StatisticsCard = ({ recommendedStream }) => {
  const streamStats = {
    science: {
      employmentRate: 94,
      averageSalary: '$85,000',
      jobGrowth: '+15%',
      satisfaction: 4.2,
      topEmployers: ['Google', 'Microsoft', 'Johnson & Johnson', 'NASA', 'Apple'],
      facts: [
        'Science graduates have the highest employment rate among all streams',
        'STEM careers are projected to grow 8.8% from 2018 to 2028',
        '73% of science graduates find employment within 6 months'
      ]
    },
    commerce: {
      employmentRate: 91,
      averageSalary: '$75,000',
      jobGrowth: '+8%',
      satisfaction: 4.0,
      topEmployers: ['Goldman Sachs', 'McKinsey', 'Deloitte', 'JPMorgan', 'Amazon'],
      facts: [
        'Commerce graduates have diverse career opportunities across industries',
        'Business and finance jobs are expected to grow 5% by 2028',
        '68% of commerce graduates start their own business within 10 years'
      ]
    },
    arts: {
      employmentRate: 87,
      averageSalary: '$55,000',
      jobGrowth: '+5%',
      satisfaction: 4.3,
      topEmployers: ['BBC', 'Netflix', 'The New York Times', 'Adobe', 'UNESCO'],
      facts: [
        'Arts graduates develop strong communication and critical thinking skills',
        'Creative industries contribute $877 billion to the US economy',
        '82% of arts graduates report high job satisfaction'
      ]
    },
    vocational: {
      employmentRate: 96,
      averageSalary: '$52,000',
      jobGrowth: '+7%',
      satisfaction: 4.1,
      topEmployers: ['Tesla', 'Boeing', 'General Electric', 'Siemens', 'Local Contractors'],
      facts: [
        'Vocational graduates have the fastest path to employment',
        'Skilled trades are experiencing a shortage, creating high demand',
        '89% of vocational graduates are employed immediately after graduation'
      ]
    }
  };

  const stats = streamStats?.[recommendedStream] || streamStats?.science;

  const statItems = [
    {
      label: 'Employment Rate',
      value: `${stats?.employmentRate}%`,
      icon: 'TrendingUp',
      color: 'text-success'
    },
    {
      label: 'Average Starting Salary',
      value: stats?.averageSalary,
      icon: 'DollarSign',
      color: 'text-primary'
    },
    {
      label: 'Job Growth (Next 5 Years)',
      value: stats?.jobGrowth,
      icon: 'BarChart3',
      color: 'text-secondary'
    },
    {
      label: 'Job Satisfaction',
      value: `${stats?.satisfaction}/5.0`,
      icon: 'Star',
      color: 'text-warning'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Statistics Grid */}
      <div className="bg-card rounded-xl border border-border card-shadow p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="BarChart3" size={20} className="text-primary" />
          <span>Career Statistics</span>
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statItems?.map((item, index) => (
            <div key={index} className="text-center p-4 bg-muted rounded-lg">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-background mb-3 ${item?.color}`}>
                <Icon name={item?.icon} size={20} />
              </div>
              <div className="text-xl font-bold text-foreground mb-1">{item?.value}</div>
              <div className="text-sm text-muted-foreground">{item?.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Top Employers */}
      <div className="bg-card rounded-xl border border-border card-shadow p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Building2" size={20} className="text-primary" />
          <span>Top Employers</span>
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {stats?.topEmployers?.map((employer, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-gradient-subtle rounded-full text-sm font-medium text-foreground border border-border"
            >
              {employer}
            </span>
          ))}
        </div>
      </div>
      {/* Key Facts */}
      <div className="bg-card rounded-xl border border-border card-shadow p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Lightbulb" size={20} className="text-primary" />
          <span>Did You Know?</span>
        </h3>
        
        <div className="space-y-3">
          {stats?.facts?.map((fact, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground text-sm leading-relaxed">{fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;