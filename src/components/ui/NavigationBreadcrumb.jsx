import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const NavigationBreadcrumb = ({ 
  className = "",
  showHomeIcon = true,
  maxItems = 4 
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const breadcrumbMap = {
    '/landing-page': {
      label: 'Home',
      icon: 'Home',
      description: 'Welcome to Career Mitra'
    },
    '/quiz-assessment': {
      label: 'Assessment',
      icon: 'ClipboardList',
      description: 'Career Assessment Quiz'
    },
    '/results-overview': {
      label: 'Results',
      icon: 'BarChart3',
      description: 'Your Personalized Results'
    },
    '/college-recommendations': {
      label: 'Colleges',
      icon: 'GraduationCap',
      description: 'Recommended Colleges'
    }
  };

  const generateBreadcrumbs = () => {
    const pathSegments = location?.pathname?.split('/')?.filter(Boolean);
    const breadcrumbs = [];

    // Always include home
    breadcrumbs?.push({
      path: '/landing-page',
      ...breadcrumbMap?.['/landing-page'],
      isActive: location?.pathname === '/landing-page'
    });

    // Add current page if not home
    if (location?.pathname !== '/landing-page') {
      const currentPath = `/${pathSegments?.join('/')}`;
      if (breadcrumbMap?.[currentPath]) {
        breadcrumbs?.push({
          path: currentPath,
          ...breadcrumbMap?.[currentPath],
          isActive: true
        });
      }
    }

    return breadcrumbs?.slice(-maxItems);
  };

  const breadcrumbs = generateBreadcrumbs();

  const handleNavigation = (path) => {
    navigate(path);
  };

  if (breadcrumbs?.length <= 1) {
    return null;
  }

  return (
    <nav className={`flex items-center space-x-1 text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {breadcrumbs?.map((crumb, index) => (
          <li key={crumb?.path} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="text-muted-foreground mx-2" 
              />
            )}
            
            {crumb?.isActive ? (
              <div className="flex items-center space-x-2">
                {showHomeIcon && (
                  <Icon 
                    name={crumb?.icon} 
                    size={16} 
                    className="text-primary" 
                  />
                )}
                <span className="font-medium text-primary" aria-current="page">
                  {crumb?.label}
                </span>
              </div>
            ) : (
              <button
                onClick={() => handleNavigation(crumb?.path)}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md px-2 py-1 hover:bg-muted"
                title={crumb?.description}
              >
                {showHomeIcon && (
                  <Icon 
                    name={crumb?.icon} 
                    size={16} 
                  />
                )}
                <span>{crumb?.label}</span>
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default NavigationBreadcrumb;