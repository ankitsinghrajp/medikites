import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Users, Award, CheckCircle, ArrowRight, Mail, Phone, Building2 } from 'lucide-react';
import { useState } from 'react';

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    city: '',
    message: ''
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Grow Your Revenue',
      description: 'Access new customer segments and increase your business revenue with our established platform',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Users,
      title: 'Expand Customer Base',
      description: 'Reach thousands of potential customers actively seeking healthcare services',
      color: 'from-cyan-400 to-teal-400'
    },
    {
      icon: Award,
      title: 'Brand Visibility',
      description: 'Enhanced visibility and credibility through our trusted healthcare network',
      color: 'from-teal-400 to-emerald-400'
    },
    {
      icon: Building2,
      title: 'Business Support',
      description: 'Dedicated support team to help you succeed and grow your partnership',
      color: 'from-emerald-400 to-green-400'
    }
  ];

  const partnerTypes = [
    {
      title: 'Diagnostic Labs',
      description: 'Partner with us to offer comprehensive diagnostic services',
      features: ['Home sample collection', 'Digital reports', 'Quality assurance', 'Competitive pricing']
    },
    {
      title: 'Healthcare Providers',
      description: 'Expand your reach with our home healthcare platform',
      features: ['Patient management', 'Scheduling system', 'Payment processing', 'Marketing support']
    },
    {
      title: 'Medical Professionals',
      description: 'Join our network of healthcare experts',
      features: ['Flexible scheduling', 'Fair compensation', 'Professional development', 'Insurance coverage']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="pt-20  bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Handshake className="w-4 h-4" />
            Partnership Opportunities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Partner With Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Join our growing network of healthcare providers and help us deliver quality healthcare services to thousands of customers
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300`} />
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Who Can Partner?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors">
                    {type.title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PartnerWithUs;