import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Search, Filter, ArrowRight, Heart, Droplet, Activity, Pill, ChevronLeft, ChevronRight, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestCatalogueHero from '@/components/TestCatalogue/TestCatalogueHero';
import { tests as testsData, packages as packagesData, categories as categoriesData, popularTests } from '@/data/data';

// Transform categories data to include counts
const getAllCategories = () => {
  const allCategories = [
    { id: 'all', label: 'All Categories', count: testsData.length }
  ];
  
  categoriesData.forEach(cat => {
    const count = testsData.filter(test => test.category === cat).length;
    if (count > 0) {
      allCategories.push({
        id: cat,
        label: cat,
        count: count
      });
    }
  });
  
  return allCategories;
};

const categories = getAllCategories();

// Map popular tests to tags with colors
const popularTestTags = popularTests.map((test, index) => {
  const colors = ['bg-red-500', 'bg-gray-500', 'bg-green-600', 'bg-cyan-400', 'bg-gray-500', 'bg-green-600', 'bg-yellow-500', 'bg-red-600', 'bg-yellow-500', 'bg-blue-600'];
  return {
    id: test.toLowerCase(),
    label: test,
    color: colors[index] || 'bg-gray-500'
  };
});

// Transform tests data to match component structure
const tests = testsData.map(test => ({
  id: test.id,
  name: test.name,
  category: test.category,
  price: test.discountedPrice,
  originalPrice: test.originalPrice,
  description: test.description,
  tat: test.turnaroundTime,
  testType: test.category,
  popular: test.isPopular,
  parameters: test.parameters,
  icon: test.category.includes('Blood') ? Droplet : 
        test.category.includes('Heart') || test.category.includes('Women') ? Heart :
        test.category.includes('Vitamin') ? Pill : Activity
}));

// Transform packages data
const packages = packagesData.map(pkg => ({
  ...pkg,
  tat: '6 hours',
  recommended: [1, 2, 3, 9, 11, 12].includes(pkg.id),
  popular: [1, 2, 3, 4, 5, 6, 10, 11, 12].includes(pkg.id)
}));

const Tests = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'tests' | 'packages'>('tests');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
  const [selectedTest, setSelectedTest] = useState<typeof tests[0] | null>(null);
  const itemsPerPage = 8;

  // Apply category filter from URL parameter on component mount or when it changes
  useEffect(() => {
    if (categoryParam) {
      // Check if the category exists in our categories list
      const categoryExists = categories.some(cat => cat.id === categoryParam);
      if (categoryExists) {
        setActiveCategory(categoryParam);
        setActiveTab('tests'); // Ensure tests tab is active when filtering by category
      } else {
        // If category doesn't exist, default to 'all'
        setActiveCategory('all');
      }
    }
  }, [categoryParam]);

  // Filter tests based on category and search
  const filteredTests = tests.filter((test) => {
    const matchesCategory = activeCategory === 'all' || test.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
                         test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filter packages based on search
  const filteredPackages = packages.filter((pkg) => {
    if (searchQuery.trim() === '') return true;
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.tests.some(test => test.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  // Get current items based on active tab
  const currentItems = activeTab === 'tests' ? filteredTests : filteredPackages;
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = currentItems.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, activeTab]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setCurrentPage(1);
    // Clear URL parameters
    setSearchParams({});
  };

  const handlePopularTagClick = (tag: string) => {
    setSearchQuery(tag);
    setActiveTab('tests');
    setActiveCategory('all');
    setCurrentPage(1);
    // Clear URL parameters when using popular tags
    setSearchParams({});
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    // Update URL parameter
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <TestCatalogueHero />
        
        {/* Tab Toggle */}
        <section className="py-6 md:py-8 bg-white border-b border-border/50">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="inline-flex p-1 rounded-2xl bg-secondary w-full sm:w-auto">
                {['tests', 'packages'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab as 'tests' | 'packages');
                      setCurrentPage(1);
                    }}
                    className={`flex-1 sm:flex-initial px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${
                      activeTab === tab
                        ? 'bg-red-600 text-white shadow-soft'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab === 'tests' ? 'Tests' : 'Health Checkups'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-4 md:py-6 bg-secondary/30">
          <div className="container-custom">
            <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-12 md:gap-4 md:items-center">
              {/* Search Input */}
              <div className="md:col-span-5 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tests..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                  className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
                />
              </div>

              {/* Category Dropdown - Only show for tests tab */}
              {activeTab === 'tests' && (
                <div className="md:col-span-4 relative">
                  <select
                    value={activeCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer text-sm sm:text-base"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground rotate-90 pointer-events-none" />
                </div>
              )}

              {/* Clear Filters Button */}
              <div className={activeTab === 'tests' ? 'md:col-span-3' : 'md:col-span-7'}>
                <button
                  onClick={handleClearFilters}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-white hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground text-sm sm:text-base"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                  </svg>
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Showing {paginatedItems.length} of {currentItems.length} {activeTab === 'tests' ? 'tests' : 'packages'}
                {(searchQuery || activeCategory !== 'all') && (
                  <span className="ml-1">
                    (filtered{searchQuery && ` for "${searchQuery}"`}
                    {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.label}`})
                  </span>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Popular Tests Section */}
        <section className="py-4 md:py-6 bg-white border-b border-border/50">
          <div className="container-custom">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1 md:mb-2">Popular Tests</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">Click on any test below to search for it</p>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
              {popularTestTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => handlePopularTagClick(tag.label)}
                  className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-white font-medium transition-all hover:scale-105 text-xs sm:text-sm ${tag.color}`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-6 md:py-12 bg-gradient-to-b from-white to-secondary/20">
          <div className="container-custom">
            {paginatedItems.length === 0 ? (
              <div className="text-center py-12 md:py-16">
                <div className="mb-4">
                  <Search className="w-12 h-12 md:w-16 md:h-16 mx-auto text-muted-foreground/50" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">No results found</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  Try adjusting your search or filters to find what you're looking for
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors text-sm md:text-base"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  {activeTab === 'tests' ? (
                    <motion.div
                      key="tests"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                        {paginatedItems.map((test: any, index) => (
                          <motion.div
                            key={test.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                          >
                            <div className="glass-card p-4 md:p-6 h-full hover:shadow-elevated transition-all">
                              <div className="flex items-start justify-between mb-3 md:mb-4 gap-2">
                                <span className="px-2.5 md:px-3 py-1 rounded-full bg-yellow-500 text-white text-[10px] md:text-xs font-semibold">
                                  {test.testType}
                                </span>
                                {test.popular && (
                                  <span className="px-2.5 md:px-3 py-1 rounded-full bg-green-600 text-white text-[10px] md:text-xs font-semibold">
                                    Popular
                                  </span>
                                )}
                              </div>
                              
                              <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {test.name}
                              </h3>
                              
                              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                                {test.description}
                              </p>
                              
                              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                <span>TAT: {test.tat}</span>
                              </div>
                              
                              <div className="mb-3 md:mb-4">
                                <div className="flex items-baseline gap-2">
                                  <span className="text-xs md:text-sm text-muted-foreground line-through">₹{test.originalPrice}</span>
                                  <span className="text-lg md:text-2xl font-bold text-green-600">₹{test.price}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row gap-2">
                                <button 
                                  onClick={() => setSelectedTest(test)}
                                  className="flex-1 px-3 md:px-4 py-2 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/5 transition-colors text-xs md:text-sm"
                                >
                                  View Details
                                </button>
                                <button className="flex-1 px-3 md:px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-xs md:text-sm">
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="packages"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                        {paginatedItems.map((pkg: any, index) => (
                          <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                          >
                            <div className="glass-card p-4 md:p-6 h-full hover:shadow-elevated transition-all">
                              <div className="flex items-start justify-between mb-3 md:mb-4 gap-2 flex-wrap">
                                {pkg.recommended && (
                                  <span className="px-2.5 md:px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] md:text-xs font-semibold">
                                    Recommend
                                  </span>
                                )}
                                {pkg.popular && (
                                  <span className="px-2.5 md:px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] md:text-xs font-semibold">
                                    Popular
                                  </span>
                                )}
                              </div>
                              
                              <h3 className="text-sm md:text-lg font-bold text-foreground mb-2 uppercase line-clamp-2">
                                {pkg.name}
                              </h3>
                              
                              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                                {pkg.description}
                              </p>
                              
                              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                <span>TAT: {pkg.tat}</span>
                              </div>
                              
                              <div className="mb-3 md:mb-4">
                                <div className="flex items-baseline gap-2">
                                  <span className="text-lg md:text-2xl font-bold text-green-600">
                                    {typeof pkg.price === 'string' ? pkg.price : `₹${pkg.price}`}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row gap-2">
                                <button 
                                  onClick={() => setSelectedPackage(pkg)}
                                  className="flex-1 px-3 md:px-4 py-2 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/5 transition-colors text-xs md:text-sm"
                                >
                                  View Details
                                </button>
                                <button className="flex-1 px-3 md:px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-xs md:text-sm">
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pagination - Mobile First Responsive */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-1 md:gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-border bg-white hover:bg-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    
                    {/* Page Numbers */}
                    <div className="flex items-center gap-1 md:gap-2">
                      {getPageNumbers().map((page, index) => (
                        page === '...' ? (
                          <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
                            ...
                          </span>
                        ) : (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page as number)}
                            className={`min-w-[32px] md:min-w-[40px] h-8 md:h-10 rounded-lg font-medium transition-all text-xs md:text-sm ${
                              currentPage === page
                                ? 'bg-blue-600 text-white'
                                : 'border border-border bg-white hover:bg-secondary/50 text-foreground'
                            }`}
                          >
                            {page}
                          </button>
                        )
                      ))}
                    </div>
                    
                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-border bg-white hover:bg-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                )}

                {/* Mobile Page Info */}
                {totalPages > 1 && (
                  <div className="text-center mt-4 md:hidden">
                    <p className="text-xs text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Test Details Modal */}
        {selectedTest && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedTest(null)}
          >
            <div 
              className="bg-white rounded-2xl p-4 md:p-6 max-w-2xl w-full max-h-[85vh] md:max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">{selectedTest.name}</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold">
                    {selectedTest.category}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedTest(null)}
                  className="text-gray-500 hover:text-gray-700 p-1 flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Description
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">{selectedTest.description}</p>
                </div>
                
                {selectedTest.parameters && selectedTest.parameters.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-base md:text-lg mb-3 flex items-center gap-2">
                      <Droplet className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      Test Parameters
                    </h4>
                    <ul className="space-y-2">
                      {selectedTest.parameters.map((param, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                          <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                          <span>{param}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-secondary/20 rounded-xl">
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Turnaround Time</p>
                    <p className="text-sm md:text-base font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {selectedTest.tat}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs md:text-sm text-muted-foreground line-through">₹{selectedTest.originalPrice}</span>
                      <span className="text-lg md:text-xl font-bold text-green-600">₹{selectedTest.price}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <button 
                  onClick={() => setSelectedTest(null)}
                  className="w-full sm:w-auto px-6 py-2 md:py-2.5 rounded-lg border border-border hover:bg-secondary/50 transition-colors text-sm md:text-base"
                >
                  Close
                </button>
                <button className="w-full sm:w-auto px-6 py-2 md:py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm md:text-base">
                  Book This Test
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Package Details Modal */}
        {selectedPackage && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPackage(null)}
          >
            <div 
              className="bg-white rounded-2xl p-4 md:p-6 max-w-2xl w-full max-h-[85vh] md:max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-primary flex-1">{selectedPackage.name}</h3>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="text-gray-500 hover:text-gray-700 flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground mb-4">{selectedPackage.description}</p>
              
              <div className="mb-4 p-4 bg-secondary/20 rounded-xl">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl md:text-2xl font-bold text-green-600">
                    {typeof selectedPackage.price === 'string' ? selectedPackage.price : `₹${selectedPackage.price}`}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-base md:text-lg mb-3">Included Tests:</h4>
                <ul className="space-y-2">
                  {selectedPackage.tests.map((test, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm md:text-base">
                      <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="w-full sm:w-auto px-6 py-2 md:py-2.5 rounded-lg border border-border hover:bg-secondary/50 transition-colors text-sm md:text-base"
                >
                  Close
                </button>
                <button className="w-full sm:w-auto px-6 py-2 md:py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm md:text-base">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Tests;