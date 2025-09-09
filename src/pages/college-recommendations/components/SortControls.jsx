import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SortControls = ({ 
  sortBy, 
  sortOrder, 
  onSortChange, 
  onOrderChange, 
  viewMode, 
  onViewModeChange,
  totalResults = 0,
  className = "" 
}) => {
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'name', label: 'College Name' },
    { value: 'rating', label: 'Rating' },
    { value: 'tuition', label: 'Tuition Fee' },
    { value: 'location', label: 'Location' },
    { value: 'size', label: 'School Size' }
  ];

  const handleSortChange = (value) => {
    onSortChange(value);
  };

  const toggleSortOrder = () => {
    onOrderChange(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleViewModeChange = (mode) => {
    onViewModeChange(mode);
  };

  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${className}`}>
      {/* Results Count */}
      <div className="flex items-center space-x-2">
        <Icon name="Search" size={16} className="text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {totalResults} {totalResults === 1 ? 'college' : 'colleges'} found
        </span>
      </div>

      {/* Sort and View Controls */}
      <div className="flex items-center space-x-4">
        {/* Sort Controls */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground hidden sm:block">Sort by:</span>
          
          <div className="flex items-center space-x-1">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={handleSortChange}
              className="min-w-[120px]"
            />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSortOrder}
              title={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
              className="h-8 w-8"
            >
              <Icon 
                name={sortOrder === 'asc' ? 'ArrowUp' : 'ArrowDown'} 
                size={16} 
              />
            </Button>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center border border-border rounded-md">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => handleViewModeChange('grid')}
            className="rounded-r-none border-r border-border"
            title="Grid view"
          >
            <Icon name="Grid3X3" size={16} />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => handleViewModeChange('list')}
            className="rounded-l-none"
            title="List view"
          >
            <Icon name="List" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SortControls;