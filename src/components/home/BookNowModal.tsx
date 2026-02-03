import { useState, useEffect } from 'react';
import { X, Sparkles, Beaker, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookTestModal = ({ isOpen, onClose, preSelectedTest }) => {
  const [formData, setFormData] = useState({
    testName: '',
    testPrice: '',
    testType: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    fullAddress: '',
    preferredDate: '',
    preferredTimeSlot: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  const timeSlots = [
    '06:00 - 07:00 AM',
    '07:00 - 08:00 AM',
    '08:00 - 09:00 AM',
    '09:00 - 10:00 AM',
    '10:00 - 11:00 AM',
    '11:00 - 12:00 PM',
    '12:00 - 01:00 PM',
    '01:00 - 02:00 PM',
    '02:00 - 03:00 PM',
    '03:00 - 04:00 PM',
    '04:00 - 05:00 PM'
  ];

  // Pre-fill test information when modal opens with a selected test
  useEffect(() => {
    if (preSelectedTest && isOpen) {
      setFormData(prev => ({
        ...prev,
        testName: preSelectedTest.name || '',
        testPrice: preSelectedTest.price || preSelectedTest.discountedPrice || '',
        testType: preSelectedTest.type || 'test'
      }));
    }
  }, [preSelectedTest, isOpen]);

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

    // Create WhatsApp message with test details
    const itemType = formData.testType === 'package' ? 'Health Package' : 'Test';
    const whatsappMessage = `*New ${itemType} Booking Request*%0A%0A` +
      `*${itemType} Name:* ${formData.testName}%0A` +
      `*Price:* ₹${formData.testPrice}%0A%0A` +
      `*Customer Details:*%0A` +
      `*Full Name:* ${formData.fullName}%0A` +
      `*Mobile Number:* ${formData.mobileNumber}%0A` +
      `*Email:* ${formData.email || 'Not provided'}%0A` +
      `*Full Address:* ${formData.fullAddress}%0A%0A` +
      `*Appointment Details:*%0A` +
      `*Preferred Date:* ${formData.preferredDate}%0A` +
      `*Preferred Time Slot:* ${formData.preferredTimeSlot}%0A` +
      `*Additional Notes:* ${formData.additionalNotes || 'None'}`;

    // Open WhatsApp with the message
    const whatsappURL = `https://wa.me/916200837385?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');

    // Reset form and close modal
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setFormData({
      testName: '',
      testPrice: '',
      testType: '',
      fullName: '',
      mobileNumber: '',
      email: '',
      fullAddress: '',
      preferredDate: '',
      preferredTimeSlot: '',
      additionalNotes: ''
    });
    setErrors({});
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal - Mobile First (slides up from bottom on mobile, centered on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full sm:w-[95%] sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col"
            >
              {/* Header - Sticky with gradient background */}
              <div className="sticky top-0 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#1a4d6d] text-white px-4 sm:px-6 py-4 sm:py-5 sm:rounded-t-3xl rounded-t-3xl flex items-center justify-between z-10 shadow-md">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {formData.testType === 'package' ? (
                      <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <Beaker className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold">Book Test</h2>
                    <p className="text-xs sm:text-sm text-white/80">Complete your booking details</p>
                  </div>
                </div>
                <button
                  onClick={handleCancel}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Form - Scrollable */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-5 custom-scrollbar">
                {/* Test Information Card - Pre-filled and Read-only */}
                {formData.testName && (
                  <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200 rounded-xl p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        {formData.testType === 'package' ? (
                          <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        ) : (
                          <Beaker className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-emerald-700 font-medium mb-1">
                          {formData.testType === 'package' ? 'Selected Health Package' : 'Selected Test'}
                        </p>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 break-words">
                          {formData.testName}
                        </h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-bold text-emerald-600">
                            ₹{formData.testPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Customer Information Section */}
                <div className="border-t-2 border-gray-200 pt-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Customer Information
                  </h3>

                  {/* Full Name */}
                  <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-3 text-base bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-300 focus:border-[#2d5a7b] focus:ring-cyan-200'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="mb-4">
                    <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-3 text-base bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.mobileNumber
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-300 focus:border-[#2d5a7b] focus:ring-cyan-200'
                      }`}
                      placeholder="Enter your mobile number"
                    />
                    {errors.mobileNumber && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.mobileNumber}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-3 text-base bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-300 focus:border-[#2d5a7b] focus:ring-cyan-200'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
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
                      className={`w-full px-3 sm:px-4 py-3 text-base bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.fullAddress
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-300 focus:border-[#2d5a7b] focus:ring-cyan-200'
                      }`}
                      placeholder="Enter your complete address for sample collection"
                    />
                    {errors.fullAddress && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.fullAddress}</p>
                    )}
                  </div>
                </div>

                {/* Appointment Details Section */}
                <div className="border-t-2 border-gray-200 pt-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Appointment Details
                  </h3>

                  {/* Preferred Date */}
                  <div className="mb-4">
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
                      className={`w-full px-3 sm:px-4 py-3 text-base bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.preferredDate
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-300 focus:border-[#2d5a7b] focus:ring-cyan-200'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="mt-1.5 text-sm text-red-600">{errors.preferredDate}</p>
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
                      className={`w-full px-3 sm:px-4 py-3 text-base bg-white border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                        errors.preferredTimeSlot
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                          : 'border-gray-300 focus:border-[#2d5a7b] focus:ring-cyan-200'
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
                      <p className="mt-1.5 text-sm text-red-600">{errors.preferredTimeSlot}</p>
                    )}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="border-t-2 border-gray-200 pt-4">
                  <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 sm:px-4 py-3 text-base bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:border-[#2d5a7b] focus:ring-cyan-200 transition-all resize-none"
                    placeholder="Any special requirements, medical conditions, or notes..."
                  />
                </div>

                {/* Action Buttons - Sticky on mobile */}
                <div className="sticky bottom-0 -mx-4 sm:-mx-6 -mb-4 sm:-mb-6 bg-white border-t border-gray-200 px-4 sm:px-6 py-4 sm:py-5 space-y-3 sm:space-y-0 sm:flex sm:gap-3">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="w-full sm:flex-1 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:flex-1 px-6 py-3.5 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a7b] to-[#1a4d6d] hover:from-[#1a3352] hover:via-[#274d6a] hover:to-[#16425e] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Confirm Booking
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Global CSS to hide scrollbar */}
          <style jsx global>{`
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
            }
            
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: rgba(156, 163, 175, 0.5);
              border-radius: 3px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: rgba(156, 163, 175, 0.7);
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookTestModal;