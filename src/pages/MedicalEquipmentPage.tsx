import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Check, ChevronDown, Star, Stethoscope, Package, Shield, Truck, Clock, Award, HeartPulse, Activity, Zap, ShoppingCart, Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import BookTestModal from '@/components/home/BookNowModal';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    },
  },
};

const equipmentCategories = [
  {
    name: "Mobility",
    icon: Activity,
    items: ["Wheelchairs", "Walkers", "Crutches", "Canes"],
    color: "from-orange-500 to-amber-500"
  },
  {
    name: "Home Care",
    icon: HeartPulse,
    items: ["Hospital Beds", "Patient Lifts", "Commodes", "Bedside Tables"],
    color: "from-amber-500 to-orange-500"
  },
  {
    name: "Monitoring",
    icon: Stethoscope,
    items: ["BP Monitors", "Glucometers", "Pulse Oximeters", "Thermometers"],
    color: "from-orange-600 to-amber-600"
  },
  {
    name: "Respiratory",
    icon: Activity,
    items: ["Oxygen Concentrators", "Nebulizers", "CPAP Machines", "Ventilators"],
    color: "from-amber-600 to-orange-600"
  },
  {
    name: "BiPAP Machine",
    icon: Shield,
    items: ["BiPAP ST", "VPAP ST", "Auto BPAP", "Non-Invasive Ventilators"],
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Oxygen Concentrator",
    icon: Zap,
    items: ["Portable 5L", "Medical Grade 10L", "Home Concentrators", "Battery Backup"],
    color: "from-amber-500 to-red-500"
  }
];

const featuredProducts = [
  // BiPAP Machines
  {
    name: "Oxymed BiPAP ST 25 - Non-Invasive Ventilator",
    category: "BiPAP Machine",
    price: "₹38,990",
    originalPrice: null,
    rating: 5,
    features: ["Advanced ST mode", "Non-invasive ventilation", "LCD display"],
    type: "purchase"
  },
  {
    name: "ResMed Lumis 150 VPAP ST BiPAP Machine",
    category: "BiPAP Machine",
    price: "₹75,000",
    originalPrice: "₹1,52,000",
    discount: "51% OFF",
    rating: 5,
    features: ["Best BiPAP for respiratory care", "Advanced ventilation", "Premium quality"],
    type: "purchase"
  },
  {
    name: "ResMed Lumis 100 VPAP ST Non-Invasive Ventilator",
    category: "BiPAP Machine",
    price: "₹57,990",
    originalPrice: "₹1,12,000",
    discount: "48% OFF",
    rating: 5,
    features: ["Non-invasive ventilation", "Compact design", "Easy to use"],
    type: "purchase"
  },
  {
    name: "Buy Bipap - Oxymed AirSmart Auto BPAP",
    category: "BiPAP Machine",
    price: "₹35,990",
    originalPrice: null,
    rating: 5,
    features: ["Auto BPAP technology", "Smart air delivery", "Comfortable therapy"],
    type: "purchase"
  },
  {
    name: "BMC BiPAP G2S B25VT",
    category: "BiPAP Machine",
    price: "₹29,000",
    originalPrice: "₹60,000",
    discount: "52% OFF",
    rating: 5,
    features: ["Affordable BiPAP", "Reliable performance", "Quality ventilation"],
    type: "purchase"
  },
  {
    name: "Resmed Aircurve 10 VAuto Bipap Machine",
    category: "BiPAP Machine",
    price: "₹73,000",
    originalPrice: null,
    rating: 5,
    features: ["Auto-adjusting pressure", "Advanced comfort", "Whisper quiet"],
    type: "purchase"
  },
  // CPAP Machines
  {
    name: "ResMed AirSense 10 AutoSet CPAP Machine",
    category: "CPAP Machine",
    price: "₹65,000",
    originalPrice: "₹85,000",
    discount: "24% OFF",
    rating: 5,
    features: ["AutoSet algorithm", "Climate control", "Integrated humidifier"],
    type: "purchase"
  },
  {
    name: "Philips DreamStation Auto CPAP",
    category: "CPAP Machine",
    price: "₹58,000",
    originalPrice: "₹75,000",
    discount: "23% OFF",
    rating: 5,
    features: ["Auto-adjusting pressure", "Advanced event detection", "Bluetooth connectivity"],
    type: "purchase"
  },
  {
    name: "BMC Luna G3 Auto CPAP Machine",
    category: "CPAP Machine",
    price: "₹42,000",
    originalPrice: "₹60,000",
    discount: "30% OFF",
    rating: 4.8,
    features: ["Auto CPAP mode", "Built-in humidifier", "Smart pressure control"],
    type: "purchase"
  },
  {
    name: "DeVilbiss IntelliPAP AutoAdjust CPAP",
    category: "CPAP Machine",
    price: "₹48,000",
    originalPrice: null,
    rating: 4.7,
    features: ["Auto-adjusting therapy", "Whisper quiet operation", "User-friendly interface"],
    type: "purchase"
  },
  // Oxygen Cylinders
  {
    name: "Oxygen Cylinder 50 ltr (Jumbo) | Prime Healers",
    category: "Oxygen Cylinder",
    price: "₹17,999",
    originalPrice: "₹21,000",
    discount: "14% OFF",
    rating: 5,
    features: ["50 litre capacity", "Jumbo size", "Medical grade oxygen"],
    type: "purchase"
  },
  {
    name: "4.5 Litre oxygen cylinder - Al Can brand",
    category: "Oxygen Cylinder",
    price: "₹10,500",
    originalPrice: "₹15,000",
    discount: "30% OFF",
    rating: 5,
    features: ["Portable design", "Aluminum body", "Lightweight"],
    type: "purchase"
  },
  {
    name: "10 litre oxygen cylinder (B type)",
    category: "Oxygen Cylinder",
    price: "₹8,500",
    originalPrice: "₹18,500",
    discount: "54% OFF",
    rating: 5,
    features: ["B type cylinder", "Standard size", "Reliable supply"],
    type: "purchase"
  },
  // Oxygen Cylinder Rentals
  {
    name: "Rent Oxygen Cylinder 50 ltr",
    category: "Oxygen Cylinder Rental",
    price: "₹2,500/month",
    originalPrice: null,
    rating: 5,
    features: ["Monthly rental", "50 litre capacity", "Free delivery & setup"],
    type: "rental"
  },
  {
    name: "Rent 4.5 litre oxygen cylinder",
    category: "Oxygen Cylinder Rental",
    price: "₹1,000/month",
    originalPrice: null,
    rating: 5,
    features: ["Portable size", "Monthly rental", "Refill support"],
    type: "rental"
  },
  {
    name: "Rent-Oxygen Cylinder 10 ltr",
    category: "Oxygen Cylinder Rental",
    price: "₹1,200/month",
    originalPrice: null,
    rating: 5,
    features: ["10 litre capacity", "Flexible rental", "Maintenance included"],
    type: "rental"
  },
  // Oxygen Concentrators
  {
    name: "Inogen Rove 6 Portable Oxygen Concentrator",
    category: "Oxygen Concentrator",
    price: "₹2,25,000",
    originalPrice: null,
    rating: 5,
    features: ["Portable design", "Long battery life", "Lightweight & compact"],
    type: "purchase"
  },
  {
    name: "Oxlife Independence Portable Oxygen Concentrator - Continuous Flow",
    category: "Oxygen Concentrator",
    price: "₹2,44,000",
    originalPrice: "₹2,90,000",
    discount: "16% OFF",
    rating: 5,
    features: ["Continuous flow", "Portable & reliable", "Advanced technology"],
    type: "purchase"
  },
  {
    name: "iGo2 Portable Oxygen Concentrator - Reliable, Compact & Smart",
    category: "Oxygen Concentrator",
    price: "₹1,80,500",
    originalPrice: null,
    rating: 5,
    features: ["Smart technology", "Compact design", "Reliable performance"],
    type: "purchase"
  },
  {
    name: "Home Medix Oxygen Concentrator HM-KV - 5 LPM | High-Efficiency",
    category: "Oxygen Concentrator",
    price: "₹37,000",
    originalPrice: "₹55,000",
    discount: "33% OFF",
    rating: 5,
    features: ["5 LPM flow rate", "High efficiency", "Durable build"],
    type: "purchase"
  },
  {
    name: "Dr.Odin Oxygen Concentrator - Trusted Oxygen Therapy for Home",
    category: "Oxygen Concentrator",
    price: "₹31,500",
    originalPrice: "₹51,000",
    discount: "38% OFF",
    rating: 5,
    features: ["Home oxygen therapy", "Trusted brand", "Easy to operate"],
    type: "purchase"
  },
  {
    name: "OxyMed P2 Portable Oxygen Concentrator with 3 years warranty",
    category: "Oxygen Concentrator",
    price: "₹1,38,000",
    originalPrice: null,
    rating: 5,
    features: ["3 years warranty", "Portable design", "Reliable oxygen supply"],
    type: "purchase"
  },
  {
    name: "Portable Oxygen Concentrator 5L",
    category: "Oxygen Concentrator",
    price: "₹45,000",
    originalPrice: "₹65,000",
    discount: "31% OFF",
    rating: 4.9,
    features: ["5L/min flow", "Portable design", "Battery backup"],
    type: "purchase"
  },
  {
    name: "Oxygen Concentrator 10L Medical Grade",
    category: "Oxygen Concentrator",
    price: "₹58,000",
    originalPrice: "₹85,000",
    discount: "32% OFF",
    rating: 4.9,
    features: ["10L capacity", "Medical grade", "Low noise operation"],
    type: "purchase"
  },
  // Wheelchairs
  {
    name: "Electric Wheelchair Premium",
    category: "Wheelchair",
    price: "₹45,000",
    originalPrice: null,
    rating: 4.8,
    features: ["Battery operated", "Foldable design", "Weight capacity 120kg"],
    type: "purchase"
  },
  {
    name: "Manual Wheelchair - Foldable & Lightweight",
    category: "Wheelchair",
    price: "₹8,500",
    originalPrice: "₹12,000",
    discount: "29% OFF",
    rating: 4.7,
    features: ["Lightweight aluminum frame", "Foldable for storage", "Comfortable padded seat"],
    type: "purchase"
  },
  {
    name: "Wheelchair Deluxe - Commode & Reclining",
    category: "Wheelchair",
    price: "₹15,000",
    originalPrice: "₹22,000",
    discount: "32% OFF",
    rating: 4.8,
    features: ["Commode facility", "Reclining backrest", "Heavy-duty wheels"],
    type: "purchase"
  },
  {
    name: "Wheelchair Rental - Manual",
    category: "Wheelchair",
    price: "₹2,000/month",
    originalPrice: null,
    rating: 4.9,
    features: ["Monthly rental", "Well-maintained", "Free delivery & pickup"],
    type: "rental"
  },
  // Hospital Beds
  {
    name: "Hospital Bed (Manual) 3 Functions",
    category: "Hospital Beds",
    price: "₹25,000",
    originalPrice: "₹35,000",
    discount: "29% OFF",
    rating: 4.7,
    features: ["3 Functions", "Side rails", "Mattress included"],
    type: "purchase",
    location: "Delhi"
  },
  {
    name: "Electric Hospital Bed - 5 Functions ICU",
    category: "Hospital Beds",
    price: "₹55,000",
    originalPrice: "₹75,000",
    discount: "27% OFF",
    rating: 4.9,
    features: ["Electric operation", "5 functions", "ICU grade quality"],
    type: "purchase",
    location: "Delhi"
  },
  {
    name: "Fowler Bed - Premium Hospital Bed",
    category: "Hospital Beds",
    price: "₹32,000",
    originalPrice: "₹45,000",
    discount: "29% OFF",
    rating: 4.8,
    features: ["Fowler position", "Sturdy steel frame", "Height adjustable"],
    type: "purchase",
    location: "Bangalore"
  },
  {
    name: "Semi-Electric Hospital Bed",
    category: "Hospital Beds",
    price: "₹42,000",
    originalPrice: "₹58,000",
    discount: "28% OFF",
    rating: 4.7,
    features: ["Semi-electric controls", "Trendelenburg position", "Side rails included"],
    type: "purchase",
    location: "Bangalore"
  },
  {
    name: "Hospital Bed Rental - Manual 3 Functions",
    category: "Hospital Beds",
    price: "₹4,000/month",
    originalPrice: null,
    rating: 4.8,
    features: ["Monthly rental", "3 functions", "Free installation"],
    type: "rental",
    location: "Delhi"
  },
  {
    name: "Hospital Bed Rental - Electric ICU",
    category: "Hospital Beds",
    price: "₹8,000/month",
    originalPrice: null,
    rating: 4.9,
    features: ["Electric ICU bed", "Monthly rental", "Maintenance included"],
    type: "rental",
    location: "Bangalore"
  },
  // Additional Equipment
  {
    name: "Digital Blood Pressure Monitor",
    category: "Monitoring",
    price: "₹2,500",
    originalPrice: "₹4,000",
    discount: "38% OFF",
    rating: 4.6,
    features: ["Digital display", "Memory function", "Irregular heartbeat detection"],
    type: "purchase"
  },
  {
    name: "Walker with Wheels & Seat",
    category: "Mobility",
    price: "₹3,500",
    originalPrice: "₹5,500",
    discount: "36% OFF",
    rating: 4.5,
    features: ["Adjustable height", "With seat", "Hand brakes"],
    type: "purchase"
  },
  {
    name: "Nebulizer Machine Portable",
    category: "Respiratory",
    price: "₹2,800",
    originalPrice: "₹4,200",
    discount: "33% OFF",
    rating: 4.7,
    features: ["Compact design", "Low noise", "Child & adult masks"],
    type: "purchase"
  }
];

const services = [
  {
    icon: Package,
    title: "Wide Selection",
    description: "1000+ medical equipment from trusted brands"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All products certified and quality tested"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same day delivery in metro cities"
  },
  {
    icon: Award,
    title: "Expert Support",
    description: "Free installation and training included"
  },
  {
    icon: Clock,
    title: "Rental Options",
    description: "Rent equipment for short-term needs"
  },
  {
    icon: HeartPulse,
    title: "Maintenance",
    description: "Annual maintenance contracts available"
  }
];

const rentalOptions = [
  {
    equipment: "Oxygen Cylinder 50 ltr",
    daily: "₹100",
    weekly: "₹600",
    monthly: "₹2,500",
    deposit: "₹5,000"
  },
  {
    equipment: "Oxygen Cylinder 10 ltr",
    daily: "₹50",
    weekly: "₹300",
    monthly: "₹1,200",
    deposit: "₹2,000"
  },
  {
    equipment: "Oxygen Cylinder 4.5 ltr",
    daily: "₹40",
    weekly: "₹250",
    monthly: "₹1,000",
    deposit: "₹1,500"
  },
  {
    equipment: "Hospital Bed (Manual)",
    daily: "₹200",
    weekly: "₹1,200",
    monthly: "₹4,000",
    deposit: "₹10,000"
  },
  {
    equipment: "Wheelchair (Manual)",
    daily: "₹100",
    weekly: "₹600",
    monthly: "₹2,000",
    deposit: "₹3,000"
  },
  {
    equipment: "BiPAP Machine",
    daily: "₹400",
    weekly: "₹2,500",
    monthly: "₹8,000",
    deposit: "₹20,000"
  },
  {
    equipment: "Oxygen Concentrator 5L",
    daily: "₹300",
    weekly: "₹1,800",
    monthly: "₹6,000",
    deposit: "₹15,000"
  },
  {
    equipment: "CPAP Machine",
    daily: "₹250",
    weekly: "₹1,500",
    monthly: "₹5,000",
    deposit: "₹12,000"
  }
];

const faqs = [
  {
    question: "Do you offer rental services for medical equipment?",
    answer: "Yes! We offer flexible rental plans for most medical equipment. You can rent on a daily, weekly, or monthly basis. This is perfect for short-term recovery needs or trial periods before purchasing."
  },
  {
    question: "Is installation and training provided?",
    answer: "Absolutely! For all major equipment like hospital beds, oxygen concentrators, and CPAP machines, we provide free installation and usage training. Our technicians will ensure everything is set up correctly and teach you how to use it safely."
  },
  {
    question: "What is your return and refund policy?",
    answer: "We offer a 7-day return policy for unused equipment in original packaging. For defective products, we provide free replacement or full refund. Rental equipment can be returned anytime with appropriate notice."
  },
  {
    question: "Do you provide maintenance services?",
    answer: "Yes, we offer annual maintenance contracts (AMC) for all equipment. This includes regular servicing, calibration, and priority support. We also provide on-demand repair services for out-of-warranty products."
  },
  {
    question: "Are the products certified and safe to use?",
    answer: "All our medical equipment is sourced from ISO-certified manufacturers and meets international safety standards. Each product comes with proper certification, warranty, and user manuals."
  }
];

const testimonials = [
  {
    name: "Ramesh Iyer",
    location: "Bangalore",
    review: "Rented a hospital bed for my father's recovery. Excellent quality and the installation team was very professional. Great service!",
    rating: 5
  },
  {
    name: "Sneha Patil",
    location: "Pune",
    review: "Bought an oxygen concentrator during emergency. Same day delivery and the technician explained everything clearly. Highly satisfied!",
    rating: 5
  },
  {
    name: "Karthik Reddy",
    location: "Hyderabad",
    review: "The wheelchair quality is outstanding and the price was very reasonable. Customer support is also very helpful.",
    rating: 5
  },
  {
    name: "Lakshmi Nair",
    location: "Chennai",
    review: "Renting medical equipment is so convenient. No need to buy expensive items for temporary use. Great concept!",
    rating: 5
  }
];

export const MedicalEquipmentPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [productType, setProductType] = useState('all'); // 'all', 'purchase', 'rental'
  const [showFilters, setShowFilters] = useState(false);

  const categoryFilters = ['All', 'BiPAP Machine', 'CPAP Machine', 'Oxygen Cylinder', 'Oxygen Cylinder Rental', 'Oxygen Concentrator', 'Wheelchair', 'Hospital Beds', 'Mobility', 'Home Care', 'Monitoring', 'Respiratory'];

  const filteredProducts = featuredProducts.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const typeMatch = productType === 'all' || product.type === productType;
    return categoryMatch && typeMatch;
  });

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in medical equipment. Please provide more details.`;
    window.open(`https://wa.me/916200837385?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleProductInquiry = (product) => {
    const actionType = product.type === 'rental' ? 'rent' : 'buy';
    const message = `Hi! I'm interested to ${actionType} the following product:

Product: ${product.name}
Category: ${product.category}
Price: ${product.price}

Please provide more details and availability.`;
    
    window.open(`https://wa.me/916200837385?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToRentalPricing = () => {
    const rentalSection = document.getElementById('rental-pricing-section');
    if (rentalSection) {
      rentalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    scrollToProducts();
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setProductType('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <Header />

      {/* Hero Section - Mobile First */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-orange-300/30 to-amber-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-amber-300/30 to-orange-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mt-4 mb-8 md:mb-12">
            {/* Icon Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold mb-4 md:mb-6 shadow-lg"
            >
              <Stethoscope className="w-4 h-4 md:w-5 md:h-5" />
              Medical Equipment Specialists
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
            >
              Medical Equipment<br className="md:hidden" /> Sales & Rentals
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto px-4"
            >
              Quality medical equipment for home healthcare needs. Buy or rent with free installation, training, and maintenance support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
            >
              <motion.button
                onClick={scrollToProducts}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-5 h-5" />
                Browse Catalog
              </motion.button>
              <motion.button
                onClick={() => setIsBookModalOpen(true)}
                className="w-full sm:w-auto bg-white border-2 border-orange-500 text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Request Quote
              </motion.button>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto px-4"
          >
            {[
              { label: "Products", value: "1000+" },
              { label: "Cities", value: "50+" },
              { label: "Happy Customers", value: "10k+" },
              { label: "Rental Options", value: "100+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-orange-200/50 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Equipment Categories */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Equipment Categories
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of medical equipment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {equipmentCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => handleCategoryClick(category)}
                  className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                        <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products-section" className="py-12 md:py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Products
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete catalog of medical equipment
            </p>
          </motion.div>

          {/* Mobile Filter Toggle */}
          <div className="mb-6 md:hidden">
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-white border-2 border-orange-300 text-gray-900 px-4 py-3 rounded-xl font-semibold flex items-center justify-between shadow-md"
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-orange-600" />
                Filters & Sort
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>

          {/* Filters Container */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 768) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 md:mb-8"
              >
                {/* Purchase/Rental Toggle - Always visible on desktop */}
                <div className="mb-4 md:mb-6">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <motion.button
                      onClick={() => setProductType('all')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md ${
                        productType === 'all'
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      All Products
                    </motion.button>
                    <motion.button
                      onClick={() => setProductType('purchase')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md ${
                        productType === 'purchase'
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      Buy
                    </motion.button>
                    <motion.button
                      onClick={() => setProductType('rental')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md ${
                        productType === 'rental'
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300'
                      }`}
                    >
                      Rent
                    </motion.button>
                  </div>
                </div>

                {/* Category Filters - Scrollable on mobile */}
                <div className="relative">
                  <div className="overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex gap-2 md:flex-wrap md:justify-center min-w-max md:min-w-0 px-1">
                      {categoryFilters.map((category) => (
                        <motion.button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm ${
                            selectedCategory === category
                              ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                              : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-400'
                          }`}
                        >
                          {category}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Filters & Clear */}
                {(selectedCategory !== 'All' || productType !== 'all') && (
                  <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
                    <span className="text-sm text-gray-600 font-medium">Active filters:</span>
                    {selectedCategory !== 'All' && (
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        {selectedCategory}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('All')} />
                      </span>
                    )}
                    {productType !== 'all' && (
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        {productType === 'purchase' ? 'Buy' : 'Rent'}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setProductType('all')} />
                      </span>
                    )}
                    <motion.button
                      onClick={clearFilters}
                      className="text-sm text-orange-600 hover:text-orange-700 font-semibold underline"
                      whileTap={{ scale: 0.95 }}
                    >
                      Clear all
                    </motion.button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all relative"
                >
                  {/* Type Badge */}
                  {product.type === 'rental' && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        RENTAL
                      </span>
                    </div>
                  )}

                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        {product.discount}
                      </span>
                    </div>
                  )}

                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                      {product.name}
                    </h3>
                    <p className="text-xs md:text-sm text-orange-600 font-semibold mb-3">
                      {product.category}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600">({product.rating})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-xl md:text-2xl font-bold text-gray-900">
                        {product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          MRP: {product.originalPrice}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => handleProductInquiry(product)}
                      className={`w-full py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base shadow-md transition-all ${
                        product.type === 'rental'
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
                          : 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:shadow-lg'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {product.type === 'rental' ? 'Rent Now' : 'Buy Now'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 md:py-20"
            >
              <div className="text-5xl md:text-6xl mb-4">🔍</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Try adjusting your filters to see more results
              </p>
              <motion.button
                onClick={clearFilters}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          )}

          {/* Total Products Count */}
          {filteredProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8 text-sm md:text-base text-gray-600 font-medium"
            >
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </motion.div>
          )}
        </div>
      </section>

      {/* Services/Features */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose Us?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical equipment solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all text-center"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental Pricing */}
      <section id="rental-pricing-section" className="py-12 md:py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Rental Pricing
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible rental plans for your convenience
            </p>
          </motion.div>

          {/* Mobile: Card View */}
          <div className="md:hidden space-y-4">
            {rentalOptions.map((rental, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-lg border-2 border-orange-100"
              >
                <h3 className="font-bold text-gray-900 mb-3 text-base">{rental.equipment}</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-600 mb-1">Daily</div>
                    <div className="font-bold text-orange-600">{rental.daily}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Weekly</div>
                    <div className="font-bold text-orange-600">{rental.weekly}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Monthly</div>
                    <div className="font-bold text-orange-600">{rental.monthly}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Deposit</div>
                    <div className="font-bold text-gray-900">{rental.deposit}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Table View */}
          <div className="hidden md:block overflow-x-auto rounded-2xl shadow-xl border-2 border-orange-100">
            <table className="w-full bg-white">
              <thead className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Equipment</th>
                  <th className="px-6 py-4 text-center font-bold">Daily</th>
                  <th className="px-6 py-4 text-center font-bold">Weekly</th>
                  <th className="px-6 py-4 text-center font-bold">Monthly</th>
                  <th className="px-6 py-4 text-center font-bold">Deposit</th>
                </tr>
              </thead>
              <tbody>
                {rentalOptions.map((rental, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-orange-100 hover:bg-orange-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{rental.equipment}</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-bold">{rental.daily}</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-bold">{rental.weekly}</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-bold">{rental.monthly}</td>
                    <td className="px-6 py-4 text-center text-gray-900 font-bold">{rental.deposit}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8 space-y-2 text-center text-xs md:text-sm text-gray-600"
          >
            <p className="font-medium">*Prices include free installation, training, and maintenance</p>
            <p className="font-medium">**Refundable security deposit required for all rentals</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => setIsBookModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Quote
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Customer Reviews
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              What our customers say about us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-700 mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-base md:text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm md:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Everything you need to know
            </p>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg border-2 border-orange-100 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-orange-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-4 md:pb-5 text-sm md:text-base text-gray-700">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Book Modal */}
      <BookTestModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  );
};