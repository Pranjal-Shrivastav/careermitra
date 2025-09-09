import React from 'react';
import CollegeCard from './CollegeCard';
import CollegeListItem from './CollegeListItem';

const CollegeGrid = ({ 
  colleges, 
  viewMode = 'grid', 
  savedColleges = [], 
  onSaveCollege,
  isLoading = false,
  className = "" 
}) => {
  if (isLoading) {
    return (
      <div className={`${className}`}>
        <div className={`
          ${viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' :'space-y-4'
          }
        `}>
          {[...Array(6)]?.map((_, index) => (
            <div key={index} className="animate-pulse">
              {viewMode === 'grid' ? (
                <div className="bg-muted rounded-lg h-96"></div>
              ) : (
                <div className="bg-muted rounded-lg h-32"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (colleges?.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No colleges found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search criteria to find more colleges.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className={`
        ${viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' :'space-y-4'
        }
      `}>
        {colleges?.map((college) => (
          viewMode === 'grid' ? (
            <CollegeCard
              key={college?.id}
              college={college}
              isSaved={savedColleges?.includes(college?.id)}
              onSaveCollege={onSaveCollege}
            />
          ) : (
            <CollegeListItem
              key={college?.id}
              college={college}
              isSaved={savedColleges?.includes(college?.id)}
              onSaveCollege={onSaveCollege}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default CollegeGrid;