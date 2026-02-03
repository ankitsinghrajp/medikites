import {
  UserRound,
  Heart,
  Baby,
  Activity,
  BedDouble,
  Syringe,
  Shield,
  Pill,
  Wind,
  FileHeart,
  TestTube,
  Microscope,
  Clock,
  Scan,
  HeartPulse,
} from "lucide-react";

export const servicesData = {
  /* ================= HOME HEALTHCARE ================= */

  "home-attendant-caretaker": {
    name: "Home Attendant / Caretaker",
    subtitle: "24/7 professional care at home",
    icon: UserRound,
    overview: {
      what:
        "Professional caretakers to assist patients with daily activities, hygiene, mobility, and comfort at home.",
      whoShouldOpt: [
        "Elderly patients",
        "Bedridden patients",
        "Post-hospital recovery",
      ],
    },
    included: [
      "Personal hygiene support",
      "Mobility assistance",
      "Meal assistance",
      "Basic health monitoring",
    ],
    howItWorks: [
      { step: 1, title: "Book Caretaker", description: "Choose duration & needs" },
      { step: 2, title: "Caretaker Assigned", description: "Verified professional arrives" },
      { step: 3, title: "Daily Care", description: "Continuous home support" },
    ],
    pricing: { startingFrom: "₹999/day", note: "Pricing varies by duration" },
    faqs: [],
    testimonials: [],
  },

  "skilled-home-nursing": {
    name: "Skilled Home Nursing",
    subtitle: "Certified nurses for medical care",
    icon: Heart,
    overview: {
      what:
        "Professional nursing services at home for injections, wound care, and post-surgery recovery.",
      whoShouldOpt: [
        "Post-surgery patients",
        "Elderly patients",
        "Chronic illness patients",
      ],
    },
    included: [
      "Certified nurse visit",
      "Medication administration",
      "Wound dressing",
      "Vitals monitoring",
    ],
    howItWorks: [
      { step: 1, title: "Book Nurse", description: "Select service & time" },
      { step: 2, title: "Nurse Visit", description: "Home visit by nurse" },
      { step: 3, title: "Medical Care", description: "Professional care delivered" },
    ],
    pricing: { startingFrom: "₹999", note: "Depends on care type" },
    faqs: [],
    testimonials: [],
  },

  "baby-elderly-care": {
    name: "Baby Care & Elderly Care",
    subtitle: "Specialized care for all ages",
    icon: Baby,
    overview: {
      what:
        "Dedicated caregivers for infants and elderly patients ensuring comfort and safety.",
      whoShouldOpt: ["New parents", "Senior citizens"],
    },
    included: [
      "Personal care assistance",
      "Medication reminders",
      "Feeding & hygiene support",
    ],
    howItWorks: [
      { step: 1, title: "Book Care", description: "Select baby or elderly care" },
      { step: 2, title: "Caregiver Assigned", description: "Verified professional" },
      { step: 3, title: "Home Care", description: "Daily assistance" },
    ],
    pricing: { startingFrom: "₹799/day", note: "Depends on hours" },
    faqs: [],
    testimonials: [],
  },

  "physiotherapy-at-home": {
    name: "Physiotherapy at Home",
    subtitle: "Expert physical therapy sessions",
    icon: Activity,
    overview: {
      what:
        "Personalized physiotherapy sessions at home to improve mobility and recovery.",
      whoShouldOpt: ["Injury recovery patients", "Stroke patients"],
    },
    included: [
      "Certified physiotherapist",
      "Customized exercise plan",
      "Pain management therapy",
    ],
    howItWorks: [
      { step: 1, title: "Book Session", description: "Choose therapy type" },
      { step: 2, title: "Therapist Visit", description: "Home visit" },
      { step: 3, title: "Therapy Session", description: "Guided exercises" },
    ],
    pricing: { startingFrom: "₹699/session", note: "Depends on therapy" },
    faqs: [],
    testimonials: [],
  },

  "icu-setup-at-home": {
    name: "ICU Setup at Home",
    subtitle: "Hospital-grade ICU facilities",
    icon: BedDouble,
    overview: {
      what:
        "Advanced ICU setup at home with monitoring and critical care equipment.",
      whoShouldOpt: ["Critical patients", "Long-term ICU care"],
    },
    included: [
      "ICU bed",
      "Ventilator support",
      "Monitoring equipment",
      "Medical supervision",
    ],
    howItWorks: [
      { step: 1, title: "Medical Assessment", description: "Doctor consultation" },
      { step: 2, title: "ICU Installation", description: "Setup at home" },
      { step: 3, title: "Continuous Care", description: "24/7 monitoring" },
    ],
    pricing: { startingFrom: "₹5000/day", note: "Depends on equipment" },
    faqs: [],
    testimonials: [],
  },

  /* ================= ON-CALL MEDICAL ================= */

  "injection-iv-infusion": {
    name: "Injection & IV Infusion",
    subtitle: "Safe medication administration",
    icon: Syringe,
    overview: {
      what:
        "Professional injection and IV infusion services at home.",
      whoShouldOpt: ["Patients needing injections", "Post-hospital patients"],
    },
    included: ["Sterile equipment", "Certified nurse", "Safe disposal"],
    howItWorks: [
      { step: 1, title: "Book Service", description: "Choose injection type" },
      { step: 2, title: "Nurse Visit", description: "Home visit" },
      { step: 3, title: "Procedure", description: "Safe administration" },
    ],
    pricing: { startingFrom: "₹299", note: "Depends on medication" },
    faqs: [],
    testimonials: [],
  },

  "wound-dressing-at-home": {
    name: "Wound Dressing at Home",
    subtitle: "Professional wound care",
    icon: Shield,
    overview: {
      what:
        "Expert wound dressing services at home ensuring proper healing.",
      whoShouldOpt: ["Post-surgery patients", "Chronic wounds"],
    },
    included: ["Sterile dressing", "Infection control", "Healing assessment"],
    howItWorks: [],
    pricing: { startingFrom: "₹399", note: "Depends on wound type" },
    faqs: [],
    testimonials: [],
  },

  "ryles-tube-catheter-change": {
    name: "Ryle’s Tube / Catheter Change",
    subtitle: "Expert tube management",
    icon: Pill,
    overview: {
      what:
        "Safe and hygienic tube or catheter replacement at home.",
      whoShouldOpt: ["Long-term patients"],
    },
    included: ["Sterile procedure", "Trained nurse"],
    howItWorks: [],
    pricing: { startingFrom: "₹499", note: "Depends on procedure" },
    faqs: [],
    testimonials: [],
  },

  "tracheostomy-care": {
    name: "Tracheostomy Care",
    subtitle: "Specialized respiratory care",
    icon: Wind,
    overview: {
      what:
        "Professional tracheostomy care at home for respiratory patients.",
      whoShouldOpt: ["Respiratory patients"],
    },
    included: ["Cleaning", "Tube care", "Monitoring"],
    howItWorks: [],
    pricing: { startingFrom: "₹699", note: "Depends on care" },
    faqs: [],
    testimonials: [],
  },

  "cannulation-insertion": {
    name: "Cannulation Insertion",
    subtitle: "IV line insertion by experts",
    icon: Activity,
    overview: {
      what:
        "Safe IV cannula insertion by trained professionals at home.",
      whoShouldOpt: ["IV medication patients"],
    },
    included: ["Sterile cannulation", "Professional care"],
    howItWorks: [],
    pricing: { startingFrom: "₹299", note: "Single insertion" },
    faqs: [],
    testimonials: [],
  },

  /* ================= DIAGNOSTICS ================= */

  "master-health-checkups": {
    name: "Master Health Check-ups",
    subtitle: "Comprehensive health screening",
    icon: FileHeart,
    overview: {
      what:
        "Complete body health check packages for early detection.",
      whoShouldOpt: ["Working professionals", "Preventive care"],
    },
    included: ["Blood tests", "Doctor-reviewed reports"],
    howItWorks: [],
    pricing: { startingFrom: "₹1999", note: "Package based" },
    faqs: [],
    testimonials: [],
  },

  "blood-tests-at-home": {
    name: "Blood Tests at Home",
    subtitle: "300+ diagnostic tests",
    icon: TestTube,
    overview: {
      what:
        "Convenient blood sample collection at home with certified labs.",
      whoShouldOpt: ["All age groups"],
    },
    included: ["Home collection", "Digital reports"],
    howItWorks: [],
    pricing: { startingFrom: "₹499", note: "Test dependent" },
    faqs: [],
    testimonials: [],
  },

  "thyroid-diabetes-cardiac-tests": {
    name: "Thyroid | Diabetes | Cardiac Tests",
    subtitle: "Specialized health tests",
    icon: HeartPulse,
    overview: {
      what:
        "Specialized tests for thyroid, diabetes, and heart health.",
      whoShouldOpt: ["Chronic condition patients"],
    },
    included: ["Specialized blood tests"],
    howItWorks: [],
    pricing: { startingFrom: "₹799", note: "Depends on tests" },
    faqs: [],
    testimonials: [],
  },

  "infertility-hormonal-test": {
    name: "Infertility & Hormonal Test",
    subtitle: "Complete hormonal profiling",
    icon: Activity,
    overview: {
      what:
        "Advanced hormonal and fertility testing.",
      whoShouldOpt: ["Couples planning pregnancy"],
    },
    included: ["Hormone tests", "Doctor-reviewed reports"],
    howItWorks: [],
    pricing: { startingFrom: "₹1499", note: "Package based" },
    faqs: [],
    testimonials: [],
  },

  "cancer-genetic-tests": {
    name: "Cancer Screening | Genetic Tests",
    subtitle: "Advanced diagnostic testing",
    icon: Microscope,
    overview: {
      what:
        "Advanced screening for cancer and genetic disorders.",
      whoShouldOpt: ["High-risk individuals"],
    },
    included: ["Genetic analysis", "Detailed reports"],
    howItWorks: [],
    pricing: { startingFrom: "₹2999", note: "Test dependent" },
    faqs: [],
    testimonials: [],
  },

  "biological-age-test": {
    name: "Biological Age Test",
    subtitle: "Know your biological age",
    icon: Clock,
    overview: {
      what:
        "Test that determines your biological age based on biomarkers.",
      whoShouldOpt: ["Health-conscious individuals"],
    },
    included: ["Biomarker analysis"],
    howItWorks: [],
    pricing: { startingFrom: "₹1999", note: "Single test" },
    faqs: [],
    testimonials: [],
  },

  /* ================= IMAGING ================= */

  "xray-ecg-at-home": {
    name: "X-Ray & ECG at Home",
    subtitle: "Portable imaging services",
    icon: Scan,
    overview: {
      what:
        "Portable X-ray and ECG tests conducted safely at home.",
      whoShouldOpt: ["Bedridden patients"],
    },
    included: ["Portable machine", "Digital reports"],
    howItWorks: [],
    pricing: { startingFrom: "₹999", note: "Scan dependent" },
    faqs: [],
    testimonials: [],
  },

  "xray-ultrasound": {
    name: "X-Ray | Ultrasound",
    subtitle: "Digital imaging facility",
    icon: Scan,
    overview: {
      what:
        "High-quality X-ray and ultrasound imaging.",
      whoShouldOpt: ["Diagnostic patients"],
    },
    included: ["Advanced imaging"],
    howItWorks: [],
    pricing: { startingFrom: "₹1200", note: "Scan type based" },
    faqs: [],
    testimonials: [],
  },

  "2d-echo": {
    name: "2D Echo",
    subtitle: "Cardiac imaging",
    icon: HeartPulse,
    overview: {
      what:
        "Detailed heart imaging using echocardiography.",
      whoShouldOpt: ["Heart patients"],
    },
    included: ["Cardiac imaging"],
    howItWorks: [],
    pricing: { startingFrom: "₹1500", note: "Single test" },
    faqs: [],
    testimonials: [],
  },

  "ct-mri-scan": {
    name: "CT Scan | MRI Scan",
    subtitle: "Advanced imaging technology",
    icon: Scan,
    overview: {
      what:
        "Advanced CT and MRI scans for accurate diagnosis.",
      whoShouldOpt: ["Specialized diagnosis"],
    },
    included: ["High-resolution imaging"],
    howItWorks: [],
    pricing: { startingFrom: "₹3500", note: "Scan dependent" },
    faqs: [],
    testimonials: [],
  },

  /* ================= EQUIPMENT ================= */

  "oxygen-concentrator-cylinder": {
    name: "Oxygen Concentrator / Cylinder",
    subtitle: "Respiratory support equipment",
    icon: Wind,
    overview: {
      what:
        "Oxygen concentrators and cylinders available for home rental.",
      whoShouldOpt: ["Respiratory patients"],
    },
    included: ["Installation", "24/7 support"],
    howItWorks: [],
    pricing: { startingFrom: "₹1500/month", note: "Rental based" },
    faqs: [],
    testimonials: [],
  },

  "ventilator-bipap-cpap": {
    name: "Ventilator | BiPAP | CPAP",
    subtitle: "Advanced breathing assistance",
    icon: Activity,
    overview: {
      what:
        "Advanced respiratory equipment for home use.",
      whoShouldOpt: ["Critical respiratory patients"],
    },
    included: ["Device setup", "Monitoring"],
    howItWorks: [],
    pricing: { startingFrom: "₹4000/month", note: "Device dependent" },
    faqs: [],
    testimonials: [],
  },

  "hospital-bed-wheelchair": {
    name: "Hospital Bed | Wheelchair",
    subtitle: "Mobility & comfort solutions",
    icon: BedDouble,
    overview: {
      what:
        "Hospital beds and wheelchairs available for rent.",
      whoShouldOpt: ["Bedridden patients"],
    },
    included: ["Installation", "Support"],
    howItWorks: [],
    pricing: { startingFrom: "₹2000/month", note: "Rental based" },
    faqs: [],
    testimonials: [],
  },

  "icu-monitor-dvt-pump": {
    name: "ICU Monitor | DVT Pump",
    subtitle: "Critical care equipment",
    icon: Activity,
    overview: {
      what:
        "ICU monitoring equipment for home critical care.",
      whoShouldOpt: ["Critical patients"],
    },
    included: ["Monitoring setup"],
    howItWorks: [],
    pricing: { startingFrom: "₹3000/month", note: "Equipment dependent" },
    faqs: [],
    testimonials: [],
  },

  "air-mattress-suction-machine": {
    name: "Air Mattress | Suction Machine",
    subtitle: "Patient comfort devices",
    icon: BedDouble,
    overview: {
      what:
        "Comfort and suction devices for patient care at home.",
      whoShouldOpt: ["Long-term care patients"],
    },
    included: ["Installation", "Usage guidance"],
    howItWorks: [],
    pricing: { startingFrom: "₹1200/month", note: "Rental based" },
    faqs: [],
    testimonials: [],
  },
};
