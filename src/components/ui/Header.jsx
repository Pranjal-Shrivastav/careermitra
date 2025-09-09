import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    {
      label: 'Home',
      path: '/landing-page',
      icon: 'Home',
      tooltip: 'Return to homepage'
    },
    {
      label: 'Assessment',
      path: '/quiz-assessment',
      icon: 'ClipboardList',
      tooltip: 'Take career assessment quiz'
    },
    {
      label: 'My Results',
      path: '/results-overview',
      icon: 'BarChart3',
      tooltip: 'View your personalized results'
    },
    {
      label: 'Colleges',
      path: '/college-recommendations',
      icon: 'GraduationCap',
      tooltip: 'Explore recommended colleges'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavigation('/landing-page')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Compass" size={20} color="white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold text-foreground">
                  Career Mitra
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium
                  transition-all duration-200 hover:bg-muted
                  ${isActivePath(item?.path) 
                    ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground'
                  }
                `}
                title={item?.tooltip}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="h-10 w-10"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="px-4 py-2 space-y-1">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`
                    flex items-center space-x-3 w-full px-3 py-3 rounded-md text-sm font-medium
                    transition-all duration-200
                    ${isActivePath(item?.path)
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;