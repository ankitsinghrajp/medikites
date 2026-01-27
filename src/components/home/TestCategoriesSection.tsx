import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplet, 
  Heart, 
  Pill, 
  Activity,
  Stethoscope,
  Dna,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', label: 'All Tests' },
  { id: 'blood', label: 'Blood Tests' },
  { id: 'heart', label: 'Cardiac' },
  { id: 'diabetes', label: 'Diabetes' },
  { id: 'thyroid', label: 'Thyroid' },
  { id: 'vitamin', label: 'Vitamins' },
];

const tests = [
  {
    id: 1,
    name: 'Complete Blood Count (CBC)',
    category: 'blood',
    price: 299,
    originalPrice: 450,
    icon: Droplet,
    popular: true,
    parameters: 24,
  },
  {
    id: 2,
    name: 'Lipid Profile',
    category: 'heart',
    price: 399,
    originalPrice: 600,
    icon: Heart,
    popular: true,
    parameters: 8,
  },
  {
    id: 3,
    name: 'HbA1c (Glycated Hemoglobin)',
    category: 'diabetes',
    price: 449,
    originalPrice: 700,
    icon: Pill,
    popular: false,
    parameters: 1,
  },
  {
    id: 4,
    name: 'Thyroid Profile (T3, T4, TSH)',
    category: 'thyroid',
    price: 549,
    originalPrice: 800,
    icon: Activity,
    popular: true,
    parameters: 3,
  },
  {
    id: 5,
    name: 'Vitamin D Total',
    category: 'vitamin',
    price: 699,
    originalPrice: 1200,
    icon: Dna,
    popular: false,
    parameters: 1,
  },
  {
    id: 6,
    name: 'Liver Function Test (LFT)',
    category: 'blood',
    price: 449,
    originalPrice: 650,
    icon: Stethoscope,
    popular: false,
    parameters: 12,
  },
];

export const TestCategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTests = activeCategory === 'all' 
    ? tests 
    : tests.filter(test => test.category === activeCategory);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Popular Tests
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Browse Our <span className="text-gradient">Test Catalogue</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from 500+ diagnostic tests with home sample collection and quick results.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'gradient-primary text-white shadow-soft'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Test Cards Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTests.map((test) => (
              <motion.div
                key={test.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass-card p-6 h-full hover:shadow-elevated transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <test.icon className="w-6 h-6 text-primary" />
                    </div>
                    {test.popular && (
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {test.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {test.parameters} Parameters Included
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">
                        ₹{test.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{test.originalPrice}
                      </span>
                    </div>
                    <Button variant="gradient" size="sm">
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All Tests
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
