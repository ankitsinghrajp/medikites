import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  Check, 
  ChevronDown, 
  Star, 
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Award,
  Clock,
  DollarSign,
  GraduationCap,
  MapPin,
  Send,
  Target,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

const jobOpenings = [
  {
    title: "Senior Nurse",
    department: "Healthcare",
    location: "Bangalore, Mumbai, Delhi",
    type: "Full-time",
    experience: "3-5 years",
    description: "Looking for experienced nurses to join our home healthcare team. Provide quality patient care at home."
  },
  {
    title: "Physiotherapist",
    department: "Therapy",
    location: "Hyderabad, Pune, Chennai",
    type: "Full-time",
    experience: "2-4 years",
    description: "Certified physiotherapists needed for home-based rehabilitation services."
  },
  {
    title: "Lab Technician",
    department: "Diagnostics",
    location: "Bangalore, Delhi",
    type: "Full-time",
    experience: "1-3 years",
    description: "Join our diagnostic team for home sample collection and laboratory testing."
  },
  {
    title: "Pharmacist",
    department: "Pharmacy",
    location: "Mumbai, Pune",
    type: "Full-time",
    experience: "2-5 years",
    description: "Licensed pharmacists for medicine delivery and patient consultation services."
  },
  {
    title: "Healthcare Assistant",
    department: "Support",
    location: "Multiple Cities",
    type: "Full-time",
    experience: "0-2 years",
    description: "Entry-level positions for healthcare support and patient coordination."
  },
  {
    title: "Medical Equipment Technician",
    department: "Technical",
    location: "Bangalore, Hyderabad",
    type: "Full-time",
    experience: "2-4 years",
    description: "Maintain and service medical equipment for home healthcare services."
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with performance bonuses"
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive medical coverage for you and your family"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work-life balance with flexible scheduling options"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement paths with regular promotions and skill development"
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Continuous learning with certifications and workshops"
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Employee appreciation programs and performance rewards"
  }
];

const companyValues = [
  {
    title: "Patient First",
    description: "Every decision we make prioritizes patient care and wellbeing",
    icon: Heart
  },
  {
    title: "Innovation",
    description: "We embrace new technologies to improve healthcare delivery",
    icon: Zap
  },
  {
    title: "Teamwork",
    description: "Collaboration and support define our work culture",
    icon: Users
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in everything we do",
    icon: Target
  }
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Senior Nurse",
    location: "Bangalore",
    review: "Best workplace I've experienced in healthcare. The team is supportive and the management truly cares about employee growth.",
    rating: 5,
    image: "P"
  },
  {
    name: "Rajesh Kumar",
    role: "Physiotherapist",
    location: "Mumbai",
    review: "Great work-life balance and the flexibility to manage my own schedule. Highly recommend for healthcare professionals.",
    rating: 5,
    image: "R"
  },
  {
    name: "Anita Desai",
    role: "Lab Technician",
    location: "Hyderabad",
    review: "The training programs and career development opportunities are excellent. I've grown so much professionally here.",
    rating: 5,
    image: "A"
  }
];

const faqs = [
  {
    question: "What qualifications do I need to apply?",
    answer: "Requirements vary by position. Healthcare roles typically require relevant degrees and certifications (e.g., nursing degree, physiotherapy certification). Check individual job listings for specific qualifications."
  },
  {
    question: "Do you provide training for new employees?",
    answer: "Yes! All new hires undergo comprehensive onboarding and training. We also offer continuous learning opportunities, workshops, and certification programs throughout your career with us."
  },
  {
    question: "What is the application process?",
    answer: "Submit your application online through our website. Our HR team will review your profile, and qualified candidates will be contacted for interviews. The process typically includes 2-3 rounds including technical and HR interviews."
  },
  {
    question: "Do you offer part-time positions?",
    answer: "Yes, we have both full-time and part-time opportunities depending on the role and location. Check job listings for availability in your preferred city."
  },
  {
    question: "What benefits do employees receive?",
    answer: "We offer competitive salaries, health insurance, flexible working hours, paid time off, training programs, career advancement opportunities, and various employee wellness initiatives."
  }
];

export const JobsPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Job Application*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Position:* ${formData.position}%0A` +
      `*Experience:* ${formData.experience}%0A` +
      `*Message:* ${formData.message || 'N/A'}%0A%0A` +
      `_Note: Please upload resume separately_`;
    
    // WhatsApp number (change this to your actual WhatsApp number)
    const whatsappNumber = '916200837385';
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-violet-50">
      <Header/>
      
      {/* Hero Section - Different Structure */}
      <section className="relative bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#6d28d9] pt-24 pb-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <Briefcase className="w-4 h-4 text-purple-200" />
                <span className="text-sm text-white font-medium">Join Our Team</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Build Your Career in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-fuchsia-200">
                  Healthcare
                </span>
              </h1>

              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Join a passionate team dedicated to revolutionizing home healthcare. 
                Make a real difference in people's lives while growing your career.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#openings"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-base font-semibold rounded-2xl shadow-xl">
                    View Open Positions
                  </Button>
                </motion.a>
                <motion.a
                  href="#apply"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-purple-500/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-purple-500/30 px-8 py-6 text-base font-semibold rounded-2xl">
                    Apply Now
                  </Button>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, label: "Team Members", value: "500+" },
                { icon: MapPin, label: "Cities", value: "50+" },
                { icon: Award, label: "Success Rate", value: "95%" },
                { icon: TrendingUp, label: "Growth YoY", value: "200%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-purple-200 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values - New Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">What makes us different and drives our mission</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border-2 border-purple-100 hover:border-purple-300 transition-all shadow-sm hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Grid Layout */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600">Comprehensive benefits package for our team members</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-purple-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Job Openings - Card Grid */}
      <section id="openings" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600">Find your perfect role in our growing team</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border-2 border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-sm text-purple-600 font-medium">{job.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{job.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 text-purple-500" />
                    <span>{job.experience} experience</span>
                  </div>
                </div>

                <motion.a
                  href="#apply"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-xl py-3 font-semibold">
                    Apply for this position
                  </Button>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Different Layout */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-400/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Hear From Our Team</h2>
            <p className="text-lg text-white/90">Real stories from our healthcare professionals</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>

                <p className="text-white mb-6 leading-relaxed">"{testimonial.review}"</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/80">{testimonial.role}</div>
                    <div className="text-xs text-white/60">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form - Two Column */}
      <section id="apply" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-lg text-gray-600">Take the first step towards your new career</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 shadow-xl border-2 border-purple-100"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Position Applied For *</label>
                <select
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map((job, index) => (
                    <option key={index} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
                <input
                  type="text"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="e.g., 3 years"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Resume (Optional)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors bg-white"
                />
                <p className="text-xs text-gray-500 mt-1">You can also send your resume via WhatsApp after submission</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Letter / Additional Information</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us why you'd be a great fit for this role..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Submit via WhatsApp
            </motion.button>

            <p className="text-center text-sm text-gray-600 mt-3">
              Your application will open in WhatsApp. You can attach your resume there.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about joining our team</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md border-2 border-purple-100 overflow-hidden hover:border-purple-300 transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50 transition-colors"
                >
                  <span className="font-bold text-base lg:text-lg text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 bg-purple-50/50">
                    <p className="text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our HR team is here to help. Get in touch with us today!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+916200837385"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-base font-semibold rounded-2xl shadow-xl gap-2">
                  <Phone className="w-5 h-5" />
                  Call HR Team
                </Button>
              </motion.a>

              <motion.a
                href="https://wa.me/916200837385"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-base font-semibold rounded-2xl shadow-xl gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};