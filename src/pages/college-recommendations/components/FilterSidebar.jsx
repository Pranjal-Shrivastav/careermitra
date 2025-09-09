import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onToggle,
  className = "" 
}) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const locationOptions = [
    { value: '', label: 'All Locations' },
    { value: 'Greater Noida', label: 'Greater Noida' },
    { value: 'Jammu', label: 'Jammu' },
    { value: 'New Delhi', label: 'New Delhi' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Bhopal', label: 'Bhopal' },
  ];

  const typeOptions = [
    { value: '', label: 'All Types' },
    { value: 'government', label: 'government' },
    { value: 'private', label: 'private' },
  ];

  const sizeOptions = [
    { value: '', label: 'All Sizes' },
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'very-large', label: 'Very Large' }
  ];

  const tuitionOptions = [
    { value: '', label: 'All Ranges' },
    { value: 'under-10k', label: 'Under ₹10,000' },
    { value: '10k-25k', label: '₹10,000 - ₹25,000' },
    { value: '25k-50k', label: '₹25,000 - ₹50,000' },
    { value: 'over-50k', label: 'Over ₹50,000' }
  ];

  const streamOptions = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'business', label: 'Business' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'arts', label: 'Arts & Humanities' },
    { value: 'sciences', label: 'Sciences' },
    { value: 'technology', label: 'Technology' },
  ];

  const facilityOptions = [
    { value: 'library', label: 'Modern Library' },
    { value: 'labs', label: 'Research Labs' },
    { value: 'sports', label: 'Sports Complex' },
    { value: 'hostel', label: 'Campus Housing' },
    { value: 'cafeteria', label: 'Dining Facilities' },
    { value: 'wifi', label: 'Campus WiFi' },
    { value: 'parking', label: 'Parking' },
    { value: 'medical', label: 'Medical Center' }
  ];

  const handleLocalFilterChange = (key, value) => {
    const updatedFilters = { ...localFilters, [key]: value };
    setLocalFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleArrayFilterChange = (key, value, checked) => {
    const currentArray = localFilters?.[key] || [];
    const updatedArray = checked 
      ? [...currentArray, value]
      : currentArray?.filter(item => item !== value);
    
    const updatedFilters = { ...localFilters, [key]: updatedArray };
    setLocalFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleClearAll = () => {
    const clearedFilters = {
      search: '',
      location: '',
      type: '',
      size: '',
      tuitionRange: '',
      streams: [],
      facilities: []
    };
    setLocalFilters(clearedFilters);
    onClearFilters(clearedFilters);
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (localFilters?.search) count++;
    if (localFilters?.location) count++;
    if (localFilters?.type) count++;
    if (localFilters?.size) count++;
    if (localFilters?.tuitionRange) count++;
    count += (localFilters?.streams || [])?.length;
    count += (localFilters?.facilities || [])?.length;
    return count;
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggle}
          className="w-full"
          iconName="Filter"
          iconPosition="left"
        >
          Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
        </Button>
      </div>
      {/* Filter Sidebar */}
      <div className={`
        ${isOpen ? 'block' : 'hidden'} lg:block
        bg-card border border-border rounded-lg p-6 space-y-6
        ${className}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Search */}
        <div>
          <Input
            type="search"
            label="Search Colleges"
            placeholder="Enter college name..."
            value={localFilters?.search || ''}
            onChange={(e) => handleLocalFilterChange('search', e?.target?.value)}
          />
        </div>

        {/* Location */}
        <div>
          <Select
            label="Location"
            options={locationOptions}
            value={localFilters?.location || ''}
            onChange={(value) => handleLocalFilterChange('location', value)}
          />
        </div>

        {/* Institution Type */}
        <div>
          <Select
            label="Institution Type"
            options={typeOptions}
            value={localFilters?.type || ''}
            onChange={(value) => handleLocalFilterChange('type', value)}
          />
        </div>

        {/* School Size */}
        <div>
          <Select
            label="School Size"
            options={sizeOptions}
            value={localFilters?.size || ''}
            onChange={(value) => handleLocalFilterChange('size', value)}
          />
        </div>

        {/* Tuition Range */}
        <div>
          <Select
            label="Tuition Range"
            options={tuitionOptions}
            value={localFilters?.tuitionRange || ''}
            onChange={(value) => handleLocalFilterChange('tuitionRange', value)}
          />
        </div>

        {/* Academic Streams */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Academic Streams</h4>
          <div className="space-y-2">
            {streamOptions?.map((stream) => (
              <Checkbox
                key={stream?.value}
                label={stream?.label}
                checked={(localFilters?.streams || [])?.includes(stream?.value)}
                onChange={(e) => handleArrayFilterChange('streams', stream?.value, e?.target?.checked)}
              />
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Facilities</h4>
          <div className="space-y-2">
            {facilityOptions?.map((facility) => (
              <Checkbox
                key={facility?.value}
                label={facility?.label}
                checked={(localFilters?.facilities || [])?.includes(facility?.value)}
                onChange={(e) => handleArrayFilterChange('facilities', facility?.value, e?.target?.checked)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;