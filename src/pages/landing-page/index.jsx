import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Career Mitra
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Empowering students to make informed decisions about their educational and career futures through comprehensive assessments and personalized guidance.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Contact Support</span>
              <span>About Us</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} Career Mitra. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;