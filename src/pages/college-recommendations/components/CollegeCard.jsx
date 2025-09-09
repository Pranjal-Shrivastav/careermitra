import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CollegeCard = ({ college, onSaveCollege, isSaved = false }) => {
  const handleVisitWebsite = () => {
    window.open(college?.website, '_blank', 'noopener,noreferrer');
  };

  const handleSave = () => {
    onSaveCollege?.(college?.id);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift card-shadow hover:card-shadow-hover transition-all duration-300">
      {/* College Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={college?.image}
          alt={`${college?.name} campus`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={handleSave}
            className={`p-2 rounded-full transition-all duration-200 ${
              isSaved 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-white/90 text-muted-foreground hover:text-primary'
            }`}
            title={isSaved ? 'Remove from saved' : 'Save college'}
          >
            <Icon name={isSaved ? "Heart" : "Heart"} size={18} />
          </button>
        </div>
        
        {college?.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      {/* College Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
            {college?.name}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="MapPin" size={14} />
            <span>{college?.location}</span>
          </div>
        </div>

        {/* Rating */}
        {college?.rating && (
          <div className="flex items-center space-x-2 mb-4">
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
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-2">Popular Courses</h4>
          <div className="flex flex-wrap gap-2">
            {college?.courses?.slice(0, 3)?.map((course, index) => (
              <span
                key={index}
                className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md"
              >
                {course}
              </span>
            ))}
            {college?.courses?.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{college?.courses?.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Key Facilities */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-2">Key Facilities</h4>
          <div className="grid grid-cols-2 gap-2">
            {college?.facilities?.slice(0, 4)?.map((facility, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Check" size={12} className="text-success" />
                <span className="text-xs">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tuition Fee */}
        {college?.tuitionFee && (
          <div className="mb-4 p-3 bg-muted/50 rounded-md">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Annual Tuition</span>
              <span className="text-sm font-semibold text-foreground">{college?.tuitionFee}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="default"
            onClick={handleVisitWebsite}
            className="flex-1"
            iconName="ExternalLink"
            iconPosition="right"
            iconSize={16}
          >
            Visit Website
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleSave}
            className={isSaved ? 'text-primary border-primary' : ''}
            title="Save college"
          >
            <Icon name="Bookmark" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;