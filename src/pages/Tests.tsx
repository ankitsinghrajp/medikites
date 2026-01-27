import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Search, Filter, ArrowRight, Heart, Droplet, Activity, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', label: 'All Tests', count: 120 },
  { id: 'blood', label: 'Blood Tests', count: 45 },
  { id: 'cardiac', label: 'Cardiac', count: 15 },
  { id: 'diabetes', label: 'Diabetes', count: 12 },
  { id: 'thyroid', label: 'Thyroid', count: 8 },
  { id: 'vitamin', label: 'Vitamins', count: 10 },
  { id: 'kidney', label: 'Kidney', count: 8 },
  { id: 'liver', label: 'Liver', count: 12 },
];

const tests = [
  { id: 1, name: 'Complete Blood Count (CBC)', category: 'blood', price: 299, originalPrice: 450, parameters: 24, popular: true, icon: Droplet },
  { id: 2, name: 'Lipid Profile', category: 'cardiac', price: 399, originalPrice: 600, parameters: 8, popular: true, icon: Heart },
  { id: 3, name: 'HbA1c (Glycated Hemoglobin)', category: 'diabetes', price: 449, originalPrice: 700, parameters: 1, popular: false, icon: Activity },
  { id: 4, name: 'Thyroid Profile (T3, T4, TSH)', category: 'thyroid', price: 549, originalPrice: 800, parameters: 3, popular: true, icon: Activity },
  { id: 5, name: 'Vitamin D Total', category: 'vitamin', price: 699, originalPrice: 1200, parameters: 1, popular: false, icon: Pill },
  { id: 6, name: 'Liver Function Test (LFT)', category: 'liver', price: 449, originalPrice: 650, parameters: 12, popular: false, icon: Activity },
  { id: 7, name: 'Kidney Function Test (KFT)', category: 'kidney', price: 499, originalPrice: 750, parameters: 10, popular: false, icon: Droplet },
  { id: 8, name: 'Vitamin B12', category: 'vitamin', price: 599, originalPrice: 900, parameters: 1, popular: true, icon: Pill },
  { id: 9, name: 'Fasting Blood Sugar', category: 'diabetes', price: 99, originalPrice: 150, parameters: 1, popular: true, icon: Droplet },
  { id: 10, name: 'Complete Hemogram', category: 'blood', price: 399, originalPrice: 550, parameters: 28, popular: false, icon: Droplet },
  { id: 11, name: 'Cardiac Enzyme Panel', category: 'cardiac', price: 1299, originalPrice: 1800, parameters: 4, popular: false, icon: Heart },
  { id: 12, name: 'Iron Studies', category: 'blood', price: 799, originalPrice: 1100, parameters: 5, popular: false, icon: Droplet },
];

const packages = [
  { id: 1, name: 'Full Body Checkup', tests: 68, price: 1499, originalPrice: 3500, popular: true },
  { id: 2, name: 'Cardiac Health Package', tests: 45, price: 1999, originalPrice: 4500, popular: true },
  { id: 3, name: 'Diabetes Screening', tests: 32, price: 999, originalPrice: 2200, popular: false },
  { id: 4, name: 'Senior Citizen Package', tests: 72, price: 2499, originalPrice: 5500, popular: true },
];

const Tests = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'tests' | 'packages'>('tests');

  const filteredTests = tests.filter((test) => {
    const matchesCategory = activeCategory === 'all' || test.category === activeCategory;
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 gradient-hero relative overflow-hidden">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Test <span className="text-gradient">Catalogue</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse our comprehensive range of diagnostic tests with home sample collection.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for tests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-soft"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Toggle & Categories */}
        <section className="py-8 bg-white border-b border-border/50">
          <div className="container-custom">
            {/* Tab Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 rounded-2xl bg-secondary">
                {['tests', 'packages'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as 'tests' | 'packages')}
                    className={`px-8 py-3 rounded-xl font-medium transition-all ${
                      activeTab === tab
                        ? 'gradient-primary text-white shadow-soft'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab === 'tests' ? 'Individual Tests' : 'Health Packages'}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Pills (only for tests) */}
            {activeTab === 'tests' && (
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full font-medium transition-all ${
                      activeCategory === category.id
                        ? 'gradient-primary text-white shadow-soft'
                        : 'bg-secondary/80 text-muted-foreground hover:bg-secondary'
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 text-xs opacity-70">({category.count})</span>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Results Grid */}
        <section className="section-padding bg-gradient-to-b from-white to-secondary/20">
          <div className="container-custom">
            <AnimatePresence mode="wait">
              {activeTab === 'tests' ? (
                <motion.div
                  key="tests"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {filteredTests.map((test, index) => (
                    <motion.div
                      key={test.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className="glass-card p-6 h-full hover:shadow-elevated transition-all">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <test.icon className="w-6 h-6 text-primary" />
                          </div>
                          {test.popular && (
                            <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {test.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {test.parameters} Parameters
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xl font-bold text-foreground">₹{test.price}</span>
                            <span className="ml-2 text-sm text-muted-foreground line-through">₹{test.originalPrice}</span>
                          </div>
                          <Button variant="gradient" size="sm">Book</Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="packages"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {packages.map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <div className="glass-card p-6 h-full hover:shadow-elevated transition-all">
                        {pkg.popular && (
                          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
                            Most Popular
                          </span>
                        )}
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {pkg.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Includes {pkg.tests} Tests
                        </p>
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-foreground">₹{pkg.price}</span>
                          <span className="ml-2 text-sm text-muted-foreground line-through">₹{pkg.originalPrice}</span>
                        </div>
                        <Button variant="gradient" className="w-full gap-2">
                          View Details <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tests;
