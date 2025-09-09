import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import NavigationBreadcrumb from '../../components/ui/NavigationBreadcrumb';
import StreamRecommendation from './components/StreamRecommendation';
import StreamDetails from './components/StreamDetails';
import ActionButtons from './components/ActionButtons';
import StatisticsCard from './components/StatisticsCard';
import SuccessStories from './components/SuccessStories';
import Icon from '../../components/AppIcon';

const ResultsOverview = () => {
  const location = useLocation();
  const [showShareMessage, setShowShareMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Mock quiz results - in a real app, this would come from state management or API
  const [quizResults] = useState({
    recommendedStream: 'science', // science, commerce, arts, vocational
    confidence: 87,
    completedAt: new Date()?.toISOString(),
    totalQuestions: 15,
    responses: {
      interests: ['technology', 'research', 'problem-solving'],
      strengths: ['analytical-thinking', 'mathematics', 'curiosity'],
      preferences: ['hands-on-learning', 'collaborative-work']
    }
  });

  useEffect(() => {
    // Simulate loading time for results processing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if user came from quiz completion
    if (location?.state?.fromQuiz) {
      // Could trigger celebration animation or special message
      console.log('User completed quiz and arrived at results');
    }
  }, [location?.state]);

  const handleRetakeQuiz = () => {
    // Clear any stored quiz data
    localStorage.removeItem('quizProgress');
    localStorage.removeItem('quizAnswers');
  };

  const handleShareResults = (message) => {
    setShowShareMessage(message);
    setTimeout(() => setShowShareMessage(''), 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-xl font-semibold text-foreground">Analyzing Your Responses</h2>
                <p className="text-muted-foreground">Generating your personalized career recommendations...</p>
              </div>
              <div className="w-64 bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <NavigationBreadcrumb />
          </div>

          {/* Share Message */}
          {showShareMessage && (
            <div className="mb-6 animate-slide-up">
              <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-success" />
                <span className="text-success font-medium">{showShareMessage}</span>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="space-y-8">
            {/* Stream Recommendation Header */}
            <div className="animate-fade-in">
              <StreamRecommendation 
                recommendedStream={quizResults?.recommendedStream}
                confidence={quizResults?.confidence}
              />
            </div>

            {/* Action Buttons */}
            <div className="animate-slide-up">
              <ActionButtons 
                onRetakeQuiz={handleRetakeQuiz}
                onShareResults={handleShareResults}
              />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Stream Details */}
              <div className="lg:col-span-2 space-y-8">
                <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <StreamDetails recommendedStream={quizResults?.recommendedStream} />
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <SuccessStories recommendedStream={quizResults?.recommendedStream} />
                </div>
              </div>

              {/* Right Column - Statistics */}
              <div className="lg:col-span-1">
                <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <StatisticsCard recommendedStream={quizResults?.recommendedStream} />
                </div>
              </div>
            </div>

            {/* Assessment Summary */}
            <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="bg-card rounded-xl border border-border card-shadow p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="ClipboardCheck" size={20} className="text-primary" />
                  <span>Assessment Summary</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">{quizResults?.totalQuestions}</div>
                    <div className="text-sm text-muted-foreground">Questions Completed</div>
                  </div>
                  
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-2">{quizResults?.confidence}%</div>
                    <div className="text-sm text-muted-foreground">Confidence Score</div>
                  </div>
                  
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">
                      {new Date(quizResults.completedAt)?.toLocaleDateString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Assessment Date</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Your results are based on your responses to {quizResults?.totalQuestions} carefully designed questions. 
                    This recommendation represents the best match for your interests, strengths, and career preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsOverview;