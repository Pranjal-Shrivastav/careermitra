import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CollegeListItem = ({ college, onSaveCollege, isSaved = false }) => {
  const handleVisitWebsite = () => {
    window.open(college?.website, '_blank', 'noopener,noreferrer');
  };

  const handleSave = () => {
    onSaveCollege?.(college?.id);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover-lift card-shadow hover:card-shadow-hover transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        {/* College Image */}
        <div className="relative w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-md">
          <Image
            src={college?.image}
            alt={`${college?.name} campus`}
            className="w-full h-full object-cover"
          />
          {college?.featured && (
            <div className="absolute top-2 left-2">
              <span className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* College Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Header */}
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {college?.name}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{college?.location}</span>
                  </div>
                  {college?.type && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Building" size={14} />
                      <span className="capitalize">{college?.type}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Rating */}
              {college?.rating && (
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={i < Math.floor(college?.rating) ? 'text-warning fill-current' : 'text-muted'}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{college?.rating}</span>
                  <span className="text-sm text-muted-foreground">({college?.reviewCount} reviews)</span>
                </div>
              )}

              {/* Courses */}
              <div className="mb-3">
                <h4 className="text-sm font-medium text-foreground mb-2">Popular Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {college?.courses?.slice(0, 4)?.map((course, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                  {college?.courses?.length > 4 && (
                    <span className="text-xs text-muted-foreground">
                      +{college?.courses?.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Key Facilities */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Facilities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {college?.facilities?.slice(0, 6)?.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={12} className="text-success" />
                      <span className="text-xs">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Actions and Info */}
            <div className="flex flex-col items-end space-y-4 flex-shrink-0">
              {/* Save Button */}
              <button
                onClick={handleSave}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isSaved 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:text-primary'
                }`}
                title={isSaved ? 'Remove from saved' : 'Save college'}
              >
                <Icon name={isSaved ? "Heart" : "Heart"} size={18} />
              </button>

              {/* Tuition Fee */}
              {college?.tuitionFee && (
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Annual Tuition</div>
                  <div className="text-sm font-semibold text-foreground">{college?.tuitionFee}</div>
                </div>
              )}

              {/* Visit Website Button */}
              <Button
                variant="default"
                onClick={handleVisitWebsite}
                iconName="ExternalLink"
                iconPosition="right"
                iconSize={16}
                className="min-w-[140px]"
              >
                Visit Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeListItem;