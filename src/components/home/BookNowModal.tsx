import { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, FileText, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookTestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    serviceType: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    fullAddress: '',
    preferredDate: '',
    preferredTimeSlot: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  const serviceTypes = [
  "Home Collection",
  "Lab Visit"
  ];

  const timeSlots = [
    '09:00 - 10:00 AM',
    '10:00 - 11:00 AM',
    '11:00 - 12:00 PM',
    '12:00 - 01:00 PM',
    '01:00 - 02:00 PM',
    '02:00 - 03:00 PM',
    '03:00 - 04:00 PM',
    '04:00 - 05:00 PM',
    '05:00 - 06:00 PM'
  ];

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber.replace(/\s/g, ''))) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.fullAddress.trim()) {
      newErrors.fullAddress = 'Full address is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    if (!formData.preferredTimeSlot) {
      newErrors.preferredTimeSlot = 'Please select a time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `*New Test Booking Request*%0A%0A` +
      `*Service Type:* ${formData.serviceType}%0A` +
      `*Full Name:* ${formData.fullName}%0A` +
      `*Mobile Number:* ${formData.mobileNumber}%0A` +
      `*Email:* ${formData.email || 'Not provided'}%0A` +
      `*Full Address:* ${formData.fullAddress}%0A` +
      `*Preferred Date:* ${formData.preferredDate}%0A` +
      `*Preferred Time Slot:* ${formData.preferredTimeSlot}%0A` +
      `*Additional Notes:* ${formData.additionalNotes || 'None'}`;

    // Open WhatsApp with the message
    const whatsappURL = `https://wa.me/916200837385?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');

    // Reset form and close modal
    setFormData({
      serviceType: '',
      fullName: '',
      mobileNumber: '',
      email: '',
      fullAddress: '',
      preferredDate: '',
      preferredTimeSlot: '',
      additionalNotes: ''
    });
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      serviceType: '',
      fullName: '',
      mobileNumber: '',
      email: '',
      fullAddress: '',
      preferredDate: '',
      preferredTimeSlot: '',
      additionalNotes: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl custom-scrollbar"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-5 rounded-t-3xl flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Book Test</h2>
                </div>
                <button
                  onClick={handleCancel}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.serviceType
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                    }`}
                  >
                    <option value="">Select Service Type</option>
                    {serviceTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>
                  )}
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.mobileNumber
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                    }`}
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.mobileNumber}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Full Address */}
                <div>
                  <label htmlFor="fullAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="fullAddress"
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.fullAddress
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                    }`}
                    placeholder="Enter your complete address"
                  />
                  {errors.fullAddress && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullAddress}</p>
                  )}
                </div>

                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.preferredDate
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredDate}</p>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label htmlFor="preferredTimeSlot" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="preferredTimeSlot"
                    name="preferredTimeSlot"
                    value={formData.preferredTimeSlot}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.preferredTimeSlot
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
                    }`}
                  >
                    <option value="">Select Time Slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTimeSlot && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredTimeSlot}</p>
                  )}
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-cyan-500 focus:ring-cyan-200 transition-all resize-none"
                    placeholder="Any special requirements or notes..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Global CSS to hide scrollbar */}
          <style jsx global>{`
            .custom-scrollbar {
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* IE and Edge */
            }
            
            .custom-scrollbar::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookTestModal;