import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';
import Select from './Select';
import Input from './Input';
import { Checkbox } from './Checkbox';

const CollegeFilter = ({ 
  onFilterChange,
  initialFilters = {},
  className = "",
  isLoading = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    type: '',
    size: '',
    tuitionRange: '',
    programs: [],
    features: [],
    ...initialFilters
  });

  const locationOptions = [
    { value: '', label: 'All Locations' },
    { value: 'northeast', label: 'Northeast' },
    { value: 'southeast', label: 'Southeast' },
    { value: 'midwest', label: 'Midwest' },
    { value: 'southwest', label: 'Southwest' },
    { value: 'west', label: 'West Coast' },
    { value: 'international', label: 'International' }
  ];

  const typeOptions = [
    { value: '', label: 'All Types' },
    { value: 'public', label: 'Public Universities' },
    { value: 'private', label: 'Private Universities' },
    { value: 'community', label: 'Community Colleges' },
    { value: 'technical', label: 'Technical Schools' },
    { value: 'liberal-arts', label: 'Liberal Arts Colleges' }
  ];

  const sizeOptions = [
    { value: '', label: 'All Sizes' },
    { value: 'small', label: 'Small (< 5,000)' },
    { value: 'medium', label: 'Medium (5,000 - 15,000)' },
    { value: 'large', label: 'Large (15,000 - 30,000)' },
    { value: 'very-large', label: 'Very Large (> 30,000)' }
  ];

  const tuitionOptions = [
    { value: '', label: 'All Tuition Ranges' },
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' }
  ];

  const programOptions = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'business', label: 'Business' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'sciences', label: 'Sciences' },
    { value: 'technology', label: 'Technology' },
    { value: 'education', label: 'Education' },
    { value: 'social-sciences', label: 'Social Sciences' }
  ];

  const featureOptions = [
    { value: 'honors-program', label: 'Honors Program' },
    { value: 'research-opportunities', label: 'Research Opportunities' },
    { value: 'internship-programs', label: 'Internship Programs' },
    { value: 'study-abroad', label: 'Study Abroad' },
    { value: 'career-services', label: 'Strong Career Services' },
    { value: 'financial-aid', label: 'Good Financial Aid' },
    { value: 'campus-housing', label: 'Campus Housing' },
    { value: 'online-programs', label: 'Online Programs' }
  ];

  useEffect(() => {
    onFilterChange?.(filters);
  }, [filters, onFilterChange]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleArrayFilterChange = (key, value, checked) => {
    setFilters(prev => ({
      ...prev,
      [key]: checked 
        ? [...prev?.[key], value]
        : prev?.[key]?.filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      search: '',
      location: '',
      type: '',
      size: '',
      tuitionRange: '',
      programs: [],
      features: []
    });
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters?.search) count++;
    if (filters?.location) count++;
    if (filters?.type) count++;
    if (filters?.size) count++;
    if (filters?.tuitionRange) count++;
    count += filters?.programs?.length;
    count += filters?.features?.length;
    return count;
  };

  const activeFilterCount = getActiveFilterCount();

  return (
    <div className={`bg-card border border-border rounded-lg ${className}`}>
      {/* Filter Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Filter Colleges</h3>
          {activeFilterCount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden"
          >
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={16} 
            />
          </Button>
        </div>
      </div>
      {/* Filter Content */}
      <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
        <div className="p-4 space-y-6">
          {/* Search */}
          <div>
            <Input
              type="search"
              placeholder="Search colleges by name..."
              value={filters?.search}
              onChange={(e) => handleFilterChange('search', e?.target?.value)}
              className="w-full"
            />
          </div>

          {/* Basic Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select
              label="Location"
              options={locationOptions}
              value={filters?.location}
              onChange={(value) => handleFilterChange('location', value)}
            />
            
            <Select
              label="Institution Type"
              options={typeOptions}
              value={filters?.type}
              onChange={(value) => handleFilterChange('type', value)}
            />
            
            <Select
              label="School Size"
              options={sizeOptions}
              value={filters?.size}
              onChange={(value) => handleFilterChange('size', value)}
            />
            
            <Select
              label="Tuition Range"
              options={tuitionOptions}
              value={filters?.tuitionRange}
              onChange={(value) => handleFilterChange('tuitionRange', value)}
            />
          </div>

          {/* Program Areas */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Academic Programs</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {programOptions?.map((program) => (
                <Checkbox
                  key={program?.value}
                  label={program?.label}
                  checked={filters?.programs?.includes(program?.value)}
                  onChange={(e) => handleArrayFilterChange('programs', program?.value, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-medium text-foreground mb-3">Special Features</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {featureOptions?.map((feature) => (
                <Checkbox
                  key={feature?.value}
                  label={feature?.label}
                  checked={filters?.features?.includes(feature?.value)}
                  onChange={(e) => handleArrayFilterChange('features', feature?.value, e?.target?.checked)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Loading State */}
      {isLoading && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="animate-spin">
              <Icon name="Loader2" size={16} />
            </div>
            <span className="text-sm">Filtering colleges...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeFilter;