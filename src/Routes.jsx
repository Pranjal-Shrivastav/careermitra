import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import LandingPage from './pages/landing-page';
import QuizAssessment from './pages/quiz-assessment';
import CollegeRecommendations from './pages/college-recommendations';
import ResultsOverview from './pages/results-overview';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CollegeRecommendations />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/quiz-assessment" element={<QuizAssessment />} />
        <Route path="/college-recommendations" element={<CollegeRecommendations />} />
        <Route path="/results-overview" element={<ResultsOverview />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
