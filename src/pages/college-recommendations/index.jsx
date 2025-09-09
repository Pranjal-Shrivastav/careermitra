import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import NavigationBreadcrumb from '../../components/ui/NavigationBreadcrumb';
import RecommendationBanner from './components/RecommendationBanner';
import FilterSidebar from './components/FilterSidebar';
import SortControls from './components/SortControls';
import CollegeGrid from './components/CollegeGrid';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CollegeRecommendations = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [savedColleges, setSavedColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    type: '',
    size: '',
    tuitionRange: '',
    streams: [],
    facilities: []
  });

  const [sortConfig, setSortConfig] = useState({
    sortBy: 'relevance',
    sortOrder: 'desc'
  });

  // Mock recommended stream (would come from quiz results)
  const recommendedStream = 'science';

  // Mock college data
  const mockColleges = [
    {
      id: 1,
      name: "GL Bajaj Institute of Technology & Management (Greater Noida)",
      location: "Greater Noida, UP",
      type: "private",
      size: "medium",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/G.L._Bajaj_Institute_of_Technology_and_Management%2C_Greater_Noida.jpg/1200px-G.L._Bajaj_Institute_of_Technology_and_Management%2C_Greater_Noida.jpg?20201013104059",
      rating: 4.9,
      reviewCount: 2847,
      tuitionFee: "₹150,000/year",
      website: "https://www.glbitm.org/",
      featured: true,
      courses: ["Computer Science", "Engineering", "Physics", "Mathematics", "Biology"],
      facilities: ["Research Labs", "Modern Library", "Placements", "Campus Housing", "WiFi Campus"],
      streams: ["science", "technology", "engineering","business"],
      description: `GLBITM is a nation-renowned institution known for its cutting-edge research and innovation in science and technology.`
    },
    {
      id: 2,
      name: "IIT Jammu",
      location: "Jammu, J&K",
      type: "government",
      size: "very-large",
      image: "https://images.indianexpress.com/2023/02/IIT-Jammu-1.jpg",
      rating: 4.8,
      reviewCount: 3156,
      tuitionFee: "₹200,000/year",
      website: "https://www.iitjammu.ac.in/",
      featured: true,
      courses: ["Computer Science", "Engineering"],
      facilities: ["New IIT", "Research Centers", "Athletic Facilities", "Campus Housing", "Career Services"],
      streams: ["science", "technology","engineering"],
      description: `IIT Jammu is a rapidly developing Indian Institute of Technology, offering engineering programs with a focus on innovation, research, and industry readiness.`
    },
    {
      id: 3,
      name: "All India Institute of Medical Sciences (AIIMS), New Delhi",
      location: "New Delhi, India",
      type: "government",
      size: "large",
      image: "https://medicaldialogues.in/h-upload/2022/10/10/1500x900_187486-aiims-delhi.webp",
      rating: 4.7,
      reviewCount: 4231,
      tuitionFee: "₹6,080/year",
      website: "https://www.aiims.edu/",
      featured: true,
      courses: ["Medicine","Research", "Sciences"],
      facilities: ["Historic Libraries", "Research Institutes", "Medical School", "Campus Housing", "Alumni Network"],
      streams: ["Research", "sciences", "healthcare"],
      description: `AIIMS Delhi is India’s top medical institute, established in 1956, specializing in medical education, research, and advanced healthcare services.`
    },
    {
      id: 4,
      name: "North Eastern Hill University",
      location: "Meghalaya, India",
      type: "government",
      size: "very-large",
      image: "https://media.edexlive.com/edexlive%2F2024-11-09%2F42wq0q5c%2FNorth-Eastern-Hill-University.webp?w=480&auto=format%2Ccompress&fit=max",
      rating: 4.6,
      reviewCount: 5678,
      tuitionFee: "₹37,500/year",
      website: "https://www.nehu.ac.in/",
      featured: false,
      courses: ["Engineering", "Economics", "Business", "Liberal Arts", "Sciences"],
      facilities: ["Research Labs", "Guest Houses", "Recreation Center", "Student Housing", "Career Center"],
      streams: ["science", "commerse", "architecture", "arts","engineering"],
      description: `NEHU Shillong offers diverse undergraduate, postgraduate, and doctoral programs with modern facilities, emphasizing research, innovation, and holistic student development.`
    },
    {
      id: 5,
      name: "St Stephen's College",
      location: "New Delhi, India",
      type: "government",
      size: "medium",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGUuhK4KUovwL8gvyHHhiGZehgbtnH-yruw&s",
      rating: 4.8,
      reviewCount: 1234,
      tuitionFee: "₹36,000/year",
      website: "https://www.ststephens.edu/",
      featured: false,
      courses: ["Physics", "Arts", "Chemistry", "Biology", "Mathematics"],
      facilities: ["Campus life", "Observatory", "Research Centers", "Small Classes", "Faculty Mentorship"],
      streams: ["sciences", "humanities", "vocational","arts"],
      description: `St. Stephen’s College, established in 1881, is a prestigious Delhi University college known for academic excellence and selective admissions in arts and sciences.`
    },
    {
      id: 6,
      name: "IIM Bangalore",
      location: "Karnataka, India",
      type: "government",
      size: "medium",
      image: "https://images.shiksha.com/mediadata/images/1507192708phpjmkJLe.jpeg",
      rating: 4.5,
      reviewCount: 2890,
      tuitionFee: "₹1,300,000/year",
      website: "https://www.iimb.ac.in/",
      featured: false,
      courses: ["Economics", "Management", "Sciences", "Business", "Medicine"],
      facilities: ["Sport Complex", "Research Libraries", "Medical Center", "Campus Housing", "Cultural Centers"],
      streams: ["arts", "sciences", "business"],
      description: `IIM Bangalore offers world-class academic, residential, sports, medical, and sustainable facilities, fostering holistic learning and personal development for management professionals.`
    },
    {
      id: 7,
      name: "NIT Bhopal",
      location: "Bhopal, Madhya Pradesh, India",
      type: "government",
      size: "large",
      image: "https://dfhe5ze0n4pxu.cloudfront.net/College/Background-Images/Background-Image-1715287577912.jpeg",
      rating: 4.4,
      reviewCount: 3456,
      tuitionFee: "₹144,000/year",
      website: "https://www.manit.ac.in/",
      featured: false,
      courses: ["Engineering", "Computer Science","Sciences"],
      facilities: ["Tech Square", "Research Centers", "Recreation Center", "Co-op Program", "Innovation Labs"],
      streams: ["science", "technology", "engineering"],
      description: `MANIT Bhopal is a premier engineering institute offering undergraduate, postgraduate, and doctoral programs with strong research and modern campus facilities.`
    },
    {
      id: 8,
      name: "National Law University (NLU), Delhi",
      location: "New Delhi, India",
      type: "government",
      size: "large",
      image: "https://nationallawuniversitydelhi.in/sites/nationallawuniversitydelhi.in/images/img_2.jpg",
      rating: 4.3,
      reviewCount: 6789,
      tuitionFee: "₹217,000/year",
      website: "https://nludelhi.ac.in/",
      featured: false,
      courses: ["Liberal Arts", "Business", "Arts", "Medicine", "Law"],
      facilities: ["Career Services", "Cultural Access", "Research Centers"],
      streams: ["arts", "business", "sciences"],
      description: `NLU offers specialized legal education, research opportunities, and holistic development, preparing students for careers in law and justice.`
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort colleges
  const filteredAndSortedColleges = useMemo(() => {
    let filtered = [...mockColleges];

    // Apply filters
    if (filters?.search) {
      filtered = filtered?.filter(college =>
        college?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
        college?.location?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    if (filters?.location) {
      filtered = filtered?.filter(college =>
        college?.location?.toLowerCase()?.includes(filters?.location?.toLowerCase())
      );
    }

    if (filters?.type) {
      filtered = filtered?.filter(college => college?.type === filters?.type);
    }

    if (filters?.size) {
      filtered = filtered?.filter(college => college?.size === filters?.size);
    }

    if (filters?.tuitionRange) {
      // Simple tuition filtering logic
      filtered = filtered?.filter(college => {
        const tuition = parseInt(college?.tuitionFee?.replace(/[^0-9]/g, ''));
        switch (filters?.tuitionRange) {
          case 'under-10k': return tuition < 10000;
          case '10k-25k': return tuition >= 10000 && tuition <= 25000;
          case '25k-50k': return tuition >= 25000 && tuition <= 50000;
          case 'over-50k': return tuition > 50000;
          default: return true;
        }
      });
    }

    if (filters?.streams && filters?.streams?.length > 0) {
      filtered = filtered?.filter(college =>
        filters?.streams?.some(stream => college?.streams?.includes(stream))
      );
    }

    if (filters?.facilities && filters?.facilities?.length > 0) {
      filtered = filtered?.filter(college =>
        filters?.facilities?.some(facility =>
          college?.facilities?.some(collegeFacility =>
            collegeFacility?.toLowerCase()?.includes(facility?.toLowerCase())
          )
        )
      );
    }

    // Apply sorting
    filtered?.sort((a, b) => {
      let aValue, bValue;

      switch (sortConfig?.sortBy) {
        case 'name':
          aValue = a?.name?.toLowerCase();
          bValue = b?.name?.toLowerCase();
          break;
        case 'rating':
          aValue = a?.rating || 0;
          bValue = b?.rating || 0;
          break;
        case 'tuition':
          aValue = parseInt(a?.tuitionFee?.replace(/[^0-9]/g, ''));
          bValue = parseInt(b?.tuitionFee?.replace(/[^0-9]/g, ''));
          break;
        case 'location':
          aValue = a?.location?.toLowerCase();
          bValue = b?.location?.toLowerCase();
          break;
        case 'relevance':
        default:
          // Featured colleges first, then by rating
          if (a?.featured && !b?.featured) return -1;
          if (!a?.featured && b?.featured) return 1;
          aValue = a?.rating || 0;
          bValue = b?.rating || 0;
          break;
      }

      if (sortConfig?.sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [filters, sortConfig]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = (clearedFilters) => {
    setFilters(clearedFilters);
  };

  const handleSortChange = (sortBy) => {
    setSortConfig(prev => ({ ...prev, sortBy }));
  };

  const handleSortOrderChange = (sortOrder) => {
    setSortConfig(prev => ({ ...prev, sortOrder }));
  };

  const handleSaveCollege = (collegeId) => {
    setSavedColleges(prev =>
      prev?.includes(collegeId)
        ? prev?.filter(id => id !== collegeId)
        : [...prev, collegeId]
    );
  };

  const handleRetakeQuiz = () => {
    navigate('/quiz-assessment');
  };

  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          {/* Breadcrumb */}
          <NavigationBreadcrumb className="mb-6" />

          {/* Recommendation Banner */}
          <RecommendationBanner
            recommendedStream={recommendedStream}
            onRetakeQuiz={handleRetakeQuiz}
            className="mb-8"
          />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onToggle={toggleFilterSidebar}
                className="sticky top-24"
              />
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Sort Controls */}
              <SortControls
                sortBy={sortConfig?.sortBy}
                sortOrder={sortConfig?.sortOrder}
                onSortChange={handleSortChange}
                onOrderChange={handleSortOrderChange}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                totalResults={filteredAndSortedColleges?.length}
                className="mb-6"
              />

              {/* College Grid */}
              <CollegeGrid
                colleges={filteredAndSortedColleges}
                viewMode={viewMode}
                savedColleges={savedColleges}
                onSaveCollege={handleSaveCollege}
                isLoading={isLoading}
              />

              {/* Load More Button (if needed) */}
              {!isLoading && filteredAndSortedColleges?.length > 0 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    iconName="ChevronDown"
                    iconPosition="right"
                    className="px-8"
                  >
                    Load More Colleges
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Floating Action Button for Mobile Filters */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="icon"
          onClick={toggleFilterSidebar}
          className="w-14 h-14 rounded-full shadow-lg"
        >
          <Icon name="Filter" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CollegeRecommendations;