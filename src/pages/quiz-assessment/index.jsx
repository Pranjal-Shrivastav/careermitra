import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import NavigationBreadcrumb from '../../components/ui/NavigationBreadcrumb';
import QuizWelcome from './components/QuizWelcome';
import QuizHeader from './components/QuizHeader';
import QuizQuestion from './components/QuizQuestion';
import QuizNavigation from './components/QuizNavigation';

const QuizAssessment = () => {
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleting, setIsCompleting] = useState(false);

  // Mock quiz questions data
  const quizQuestions = [
    {
      id: 1,
      type: 'multiple-choice',
      text: "Which subjects do you find most interesting?",
      description: "Select the area that naturally captures your attention and curiosity.",
      options: [
        {
          id: 'science',
          text: 'Mathematics, Physics, Chemistry, Biology',
          description: 'Logical reasoning, scientific methods, and analytical thinking'
        },
        {
          id: 'arts',
          text: 'Literature, History, Philosophy, Languages',
          description: 'Creative expression, critical thinking, and cultural understanding'
        },
        {
          id: 'commerce',
          text: 'Economics, Business Studies, Accounting',
          description: 'Financial literacy, market dynamics, and entrepreneurship'
        },
        {
          id: 'vocational',
          text: 'Technical Skills, Practical Applications',
          description: 'Hands-on learning, skill-based training, and immediate application'
        }
      ]
    },
    {
      id: 2,
      type: 'yes-no',
      text: "Do you enjoy solving complex mathematical problems?",
      description: "Think about your experience with algebra, geometry, and analytical reasoning."
    },
    {
      id: 3,
      type: 'multiple-choice',
      text: "What type of career environment appeals to you most?",
      options: [
        {
          id: 'research',
          text: 'Research Laboratory or Academic Institution',
          description: 'Conducting experiments, publishing papers, advancing knowledge'
        },
        {
          id: 'corporate',
          text: 'Corporate Office or Business Environment',
          description: 'Team collaboration, strategic planning, client interactions'
        },
        {
          id: 'creative',
          text: 'Creative Studio or Cultural Institution',
          description: 'Artistic expression, cultural projects, innovative thinking'
        },
        {
          id: 'field',
          text: 'Field Work or Hands-on Environment',
          description: 'Practical application, direct impact, varied locations'
        }
      ]
    },
    {
      id: 4,
      type: 'yes-no',
      text: "Are you comfortable with public speaking and presentations?",
      description: "Consider your confidence level when presenting ideas to groups."
    },
    {
      id: 5,
      type: 'multiple-choice',
      text: "Which activity would you choose for a weekend project?",
      options: [
        {
          id: 'experiment',
          text: 'Conduct a Science Experiment',
          description: 'Testing hypotheses and analyzing results'
        },
        {
          id: 'write',
          text: 'Write a Short Story or Essay',
          description: 'Creative writing and expressing ideas through words'
        },
        {
          id: 'business',
          text: 'Create a Business Plan',
          description: 'Market research and financial planning'
        },
        {
          id: 'build',
          text: 'Build or Repair Something',
          description: 'Hands-on construction or technical work'
        }
      ]
    },
    {
      id: 6,
      type: 'yes-no',
      text: "Do you prefer working independently rather than in teams?",
      description: "Think about your most productive and comfortable working style."
    },
    {
      id: 7,
      type: 'multiple-choice',
      text: "What motivates you most in your studies?",
      options: [
        {
          id: 'discovery',
          text: 'Discovering How Things Work',
          description: 'Understanding mechanisms, processes, and scientific principles'
        },
        {
          id: 'expression',
          text: 'Expressing Ideas and Creativity',
          description: 'Artistic creation, storytelling, and cultural exploration'
        },
        {
          id: 'success',
          text: 'Achieving Financial Success',
          description: 'Building wealth, managing resources, and economic growth'
        },
        {
          id: 'impact',
          text: 'Making a Practical Impact',
          description: 'Solving real-world problems with tangible solutions'
        }
      ]
    },
    {
      id: 8,
      type: 'yes-no',
      text: "Are you interested in understanding human behavior and society?",
      description: "Consider your curiosity about psychology, sociology, and cultural studies."
    },
    {
      id: 9,
      type: 'multiple-choice',
      text: "Which skill would you most like to develop further?",
      options: [
        {
          id: 'analytical',
          text: 'Analytical and Research Skills',
          description: 'Data analysis, critical thinking, and systematic investigation'
        },
        {
          id: 'communication',
          text: 'Communication and Writing Skills',
          description: 'Effective expression, persuasive writing, and public speaking'
        },
        {
          id: 'leadership',
          text: 'Leadership and Management Skills',
          description: 'Team management, strategic planning, and decision making'
        },
        {
          id: 'technical',
          text: 'Technical and Practical Skills',
          description: 'Specialized expertise, tool proficiency, and hands-on abilities'
        }
      ]
    },
    {
      id: 10,
      type: 'yes-no',
      text: "Do you enjoy learning about different cultures and languages?",
      description: "Think about your interest in global perspectives and cultural diversity."
    }
  ];

  const currentQuestion = quizQuestions?.[currentQuestionIndex];
  const totalQuestions = quizQuestions?.length;
  const currentAnswer = answers?.[currentQuestion?.id];

  useEffect(() => {
    // Auto-advance after answer selection (with delay for better UX)
    if (currentAnswer && !isCompleting) {
      const timer = setTimeout(() => {
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentAnswer, currentQuestionIndex, totalQuestions, isCompleting]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswer = (answer) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion?.id]: answer
    }));
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleComplete = () => {
    setIsCompleting(true);
    
    // Store quiz results in localStorage for results page
    const quizResults = {
      answers,
      completedAt: new Date()?.toISOString(),
      totalQuestions: totalQuestions,
      answeredQuestions: Object.keys(answers)?.length
    };
    
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
    
    // Navigate to results page after brief delay
    setTimeout(() => {
      navigate('/results-overview');
    }, 1000);
  };

  const canGoBack = currentQuestionIndex > 0;
  const canGoNext = currentAnswer !== undefined;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <NavigationBreadcrumb className="mb-8" />
          
          {!quizStarted ? (
            /* Welcome Screen */
            (<div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
              <QuizWelcome onStart={handleStartQuiz} />
            </div>)
          ) : (
            /* Quiz Interface */
            (<div className="max-w-5xl mx-auto">
              {/* Quiz Header with Progress */}
              <QuizHeader
                currentStep={currentQuestionIndex + 1}
                totalSteps={totalQuestions}
                title="Career Assessment Quiz"
                subtitle="Answer honestly to get the most accurate recommendations"
              />
              {/* Question Content */}
              <div className="bg-card border border-border rounded-lg p-8 md:p-12 card-shadow mb-8">
                <QuizQuestion
                  question={currentQuestion}
                  onAnswer={handleAnswer}
                  selectedAnswer={currentAnswer}
                  questionNumber={currentQuestionIndex + 1}
                  totalQuestions={totalQuestions}
                />
              </div>
              {/* Navigation Controls */}
              <QuizNavigation
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={totalQuestions}
                onPrevious={handlePrevious}
                onNext={handleNext}
                canGoBack={canGoBack}
                canGoNext={canGoNext}
                isLastQuestion={isLastQuestion}
                onComplete={handleComplete}
              />
              {/* Completion Loading State */}
              {isCompleting && (
                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="bg-card border border-border rounded-lg p-8 text-center card-shadow max-w-md mx-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="animate-spin">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Processing Your Results
                    </h3>
                    <p className="text-muted-foreground">
                      Analyzing your responses to provide personalized recommendations...
                    </p>
                  </div>
                </div>
              )}
            </div>)
          )}
        </div>
      </main>
    </div>
  );
};

export default QuizAssessment;