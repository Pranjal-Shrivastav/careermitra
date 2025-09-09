import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const ActionButtons = ({ onRetakeQuiz, onShareResults }) => {
  const navigate = useNavigate();

  const handleViewColleges = () => {
    navigate('/college-recommendations');
  };

  const handleRetakeQuiz = () => {
    navigate('/quiz-assessment');
    onRetakeQuiz?.();
  };

  const handleShareResults = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Career Assessment Results',
        text: 'Check out my personalized career stream recommendation!',
        url: window.location?.href
      })?.catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard?.writeText(window.location?.href)?.then(() => {
        onShareResults?.('Link copied to clipboard!');
      })?.catch(() => {
        onShareResults?.('Unable to share results');
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="default"
          size="lg"
          iconName="GraduationCap"
          iconPosition="left"
          onClick={handleViewColleges}
          className="flex-1"
        >
          Explore Recommended Colleges
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          iconName="RotateCcw"
          iconPosition="left"
          onClick={handleRetakeQuiz}
          className="flex-1 sm:flex-none"
        >
          Retake Assessment
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="ghost"
          size="default"
          iconName="Share2"
          iconPosition="left"
          onClick={handleShareResults}
          className="flex-1"
        >
          Share Results
        </Button>
        
        <Button
          variant="ghost"
          size="default"
          iconName="Download"
          iconPosition="left"
          onClick={() => window.print()}
          className="flex-1"
        >
          Save as PDF
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;