import { useState, useEffect } from 'react';
import { Send, Check, AlertCircle, Mail, Phone, User, MessageSquare, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const subjects = [
    'Test Enquiry',
    'Booking Related',
    'Report Query',
    'Feedback',
    'Jobs',
    'Partner With Us',
    'Other'
  ];

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create WhatsApp message
      const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Phone:* ${formData.phone}%0A` +
        `*Email:* ${formData.email || 'Not provided'}%0A` +
        `*Subject:* ${formData.subject}%0A` +
        `*Message:* ${formData.message}`;

      // Open WhatsApp with the message
      const whatsappURL = `https://wa.me/916200837385?text=${whatsappMessage}`;
      window.open(whatsappURL, '_blank');

      // Small delay to show submitting state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Decorative Elements - matching MapSection */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl -z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our painting services? We're here to help make your vision a reality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Form Card with glass effect */}
          <div className={`group relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Gradient blur effect on hover - matching MapSection */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 px-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MessageSquare className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Contact Form</h3>
                    <p className="text-cyan-50 text-sm">We'll respond within 1 hour</p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                {/* Name and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className={`group/field relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-400 rounded-2xl opacity-0 group-hover/field:opacity-100 blur transition duration-300" />
                    <div className="relative bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-400 flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.name
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                        }`}
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-shake">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className={`group/field relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl opacity-0 group-hover/field:opacity-100 blur transition duration-300" />
                    <div className="relative bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.phone
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-shake">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className={`group/field relative transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl opacity-0 group-hover/field:opacity-100 blur transition duration-300" />
                  <div className="relative bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-shake">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className={`group/field relative transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover/field:opacity-100 blur transition duration-300" />
                  <div className="relative bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <label htmlFor="subject" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.subject
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-shake">
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className={`group/field relative transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover/field:opacity-100 blur transition duration-300" />
                  <div className="relative bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                        <Send className="w-4 h-4 text-white" />
                      </div>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                        errors.message
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-shake">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

               {/* Submit Button */}
<div className={`flex justify-center pt-4 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full sm:w-auto px-12 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed min-w-[240px]"
  >
    {isSubmitting ? (
      <>
        <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span className="animate-pulse">Sending...</span>
      </>
    ) : (
      <>
        <Send className="w-6 h-6" />
        Send Message
      </>
    )}
  </button>
</div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl text-green-700 shadow-lg animate-slideIn">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold">
                      Success! Your message has been sent. We'll respond within 1 hour.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 rounded-2xl text-red-700 shadow-lg animate-slideIn">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold">
                      Oops! Something went wrong. Please try again later.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`mt-10 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-sm md:text-base text-gray-700">
                Average response time: <span className="font-bold text-gray-900">1 hour</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;