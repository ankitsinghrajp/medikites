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
  Video,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

export const servicesData = {
  /* ================= HOME HEALTHCARE ================= */

  "home-attendant-caretaker": {
    name: "Home Attendant / Caretaker",
    subtitle: "24/7 professional care at home",
    icon: UserRound,
    quickFeatures: ["24/7 Available", "Verified Staff", "Daily Care", "Affordable"],
    overview: {
      what:
        "Professional caretakers to assist patients with daily activities, hygiene, mobility, and comfort at home.",
      whoShouldOpt: [
        "Elderly patients requiring daily assistance",
        "Bedridden patients needing constant care",
        "Post-hospital recovery patients",
        "Patients with limited mobility",
      ],
    },
    included: [
      "Personal hygiene support",
      "Mobility assistance",
      "Meal assistance",
      "Basic health monitoring",
      "Medication reminders",
      "Companionship",
    ],
    howItWorks: [
      { step: 1, title: "Book Caretaker", description: "Choose duration & care needs" },
      { step: 2, title: "Caretaker Assigned", description: "Verified professional arrives" },
      { step: 3, title: "Daily Care", description: "Continuous home support" },
      { step: 4, title: "Progress Updates", description: "Regular care reports" },
    ],
    pricing: { startingFrom: "₹999/day", note: "Pricing varies by duration and care requirements" },
    faqs: [
      {
        question: "Are the caretakers verified and trained?",
        answer: "Yes, all our caretakers are background-verified and trained in patient care, hygiene management, and emergency response."
      },
      {
        question: "Can I choose the caretaker?",
        answer: "Yes, we provide profiles of available caretakers and you can select based on your preferences and requirements."
      },
      {
        question: "What are the working hours?",
        answer: "We offer flexible options: 8-hour shifts, 12-hour shifts, or 24-hour live-in caretakers based on your needs."
      },
      {
        question: "Can the caretaker be replaced if needed?",
        answer: "Absolutely. If you're not satisfied with the caretaker, we'll arrange a replacement at no additional cost."
      },
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        location: "Bangalore",
        review: "The caretaker assigned to my father was incredibly patient and professional. She took care of all his needs with compassion."
      },
      {
        name: "Priya Sharma",
        location: "Delhi",
        review: "Excellent service! The caretaker helped my mother with daily activities and always kept us updated about her condition."
      },
    ],
  },

  "skilled-home-nursing": {
    name: "Skilled Home Nursing",
    subtitle: "Certified nurses for medical care",
    icon: Heart,
    quickFeatures: ["Certified Nurses", "Medical Expertise", "Post-Surgery Care", "24/7 Support"],
    overview: {
      what:
        "Professional nursing services at home for injections, wound care, post-surgery recovery, and medical monitoring by certified nurses.",
      whoShouldOpt: [
        "Post-surgery patients requiring medical care",
        "Elderly patients with chronic conditions",
        "Patients needing regular injections or IV therapy",
        "Bedridden patients requiring skilled nursing",
      ],
    },
    included: [
      "Certified nurse visit",
      "Medication administration",
      "Wound dressing and care",
      "Vitals monitoring (BP, temperature, pulse)",
      "Injection services",
      "Post-operative care",
    ],
    howItWorks: [
      { step: 1, title: "Book Nurse", description: "Select service type & time" },
      { step: 2, title: "Nurse Assignment", description: "Certified nurse assigned" },
      { step: 3, title: "Home Visit", description: "Professional care at home" },
      { step: 4, title: "Medical Report", description: "Detailed care documentation" },
    ],
    pricing: { startingFrom: "₹999", note: "Depends on care type and duration" },
    faqs: [
      {
        question: "Are the nurses qualified and certified?",
        answer: "Yes, all our nurses are certified healthcare professionals with valid nursing licenses and extensive experience in home healthcare."
      },
      {
        question: "What medical procedures can nurses perform at home?",
        answer: "Our nurses can administer injections, perform wound dressing, monitor vitals, manage catheters, provide IV therapy, and assist with post-operative care."
      },
      {
        question: "Can I book nursing services for multiple days?",
        answer: "Yes, you can book nursing services for single visits or multiple days based on your medical requirements."
      },
      {
        question: "Do nurses bring medical equipment?",
        answer: "Yes, nurses carry basic medical equipment including BP monitors, thermometers, and sterile supplies for procedures."
      },
    ],
    testimonials: [
      {
        name: "Anita Desai",
        location: "Mumbai",
        review: "The nurse who came for my mother's post-surgery care was highly skilled and very caring. She made the recovery process much smoother."
      },
      {
        name: "Vikram Singh",
        location: "Hyderabad",
        review: "Professional and punctual service. The nurse took excellent care of my father's wound dressing and kept us informed throughout."
      },
    ],
  },

  "baby-elderly-care": {
    name: "Baby Care & Elderly Care",
    subtitle: "Specialized care for all ages",
    icon: Baby,
    quickFeatures: ["Trained Caregivers", "Age-Specific Care", "Safety First", "Compassionate"],
    overview: {
      what:
        "Dedicated caregivers for infants and elderly patients ensuring comfort, safety, and specialized age-appropriate care at home.",
      whoShouldOpt: [
        "New parents needing assistance with newborn care",
        "Working parents requiring baby care support",
        "Senior citizens living alone or needing daily assistance",
        "Elderly patients with mobility or health issues",
      ],
    },
    included: [
      "Personal care assistance",
      "Medication reminders for elderly",
      "Feeding & hygiene support",
      "Baby bathing and diaper care",
      "Mobility assistance for elderly",
      "Activity engagement and companionship",
    ],
    howItWorks: [
      { step: 1, title: "Book Care", description: "Select baby or elderly care" },
      { step: 2, title: "Caregiver Assigned", description: "Trained professional matched" },
      { step: 3, title: "Home Care", description: "Daily specialized assistance" },
      { step: 4, title: "Care Updates", description: "Regular progress reports" },
    ],
    pricing: { startingFrom: "₹799/day", note: "Depends on hours and care requirements" },
    faqs: [
      {
        question: "Are baby caregivers trained in newborn care?",
        answer: "Yes, all our baby caregivers are trained in newborn handling, feeding techniques, hygiene practices, and infant safety protocols."
      },
      {
        question: "What does elderly care include?",
        answer: "Elderly care includes personal hygiene assistance, medication reminders, meal preparation, mobility support, companionship, and activity engagement."
      },
      {
        question: "Can the caregiver handle medical emergencies?",
        answer: "Our caregivers are trained in basic first aid and emergency response. They will immediately contact medical professionals if needed."
      },
      {
        question: "What are the working hours for caregivers?",
        answer: "We offer flexible timing: 8-hour, 12-hour shifts, or 24-hour live-in care based on your requirements."
      },
    ],
    testimonials: [
      {
        name: "Meera Iyer",
        location: "Chennai",
        review: "The baby caregiver helped us tremendously with our newborn. She was gentle, knowledgeable, and gave us great parenting tips."
      },
      {
        name: "Ramesh Patel",
        location: "Pune",
        review: "Wonderful elderly care service! The caregiver treats my mother with so much love and respect. Highly recommended."
      },
    ],
  },

  "physiotherapy-at-home": {
    name: "Physiotherapy at Home",
    subtitle: "Expert physical therapy sessions",
    icon: Activity,
    quickFeatures: ["Certified Therapists", "Customized Plans", "Pain Relief", "Home Convenience"],
    overview: {
      what:
        "Personalized physiotherapy sessions at home to improve mobility, reduce pain, and accelerate recovery from injuries or surgeries.",
      whoShouldOpt: [
        "Post-surgery patients requiring rehabilitation",
        "Stroke patients needing mobility training",
        "Injury recovery patients (sports, accident)",
        "Patients with chronic back or joint pain",
        "Elderly patients with mobility issues",
      ],
    },
    included: [
      "Certified physiotherapist visit",
      "Customized exercise plan",
      "Pain management therapy",
      "Mobility assessment",
      "Manual therapy techniques",
      "Progress tracking",
    ],
    howItWorks: [
      { step: 1, title: "Book Session", description: "Choose therapy type & timing" },
      { step: 2, title: "Assessment", description: "Initial evaluation at home" },
      { step: 3, title: "Therapy Plan", description: "Customized treatment plan" },
      { step: 4, title: "Regular Sessions", description: "Guided exercises & recovery" },
    ],
    pricing: { startingFrom: "₹699/session", note: "Depends on therapy type and package" },
    faqs: [
      {
        question: "How many sessions will I need?",
        answer: "The number of sessions depends on your condition and recovery goals. Typically, patients require 8-12 sessions, but this varies individually."
      },
      {
        question: "Do I need any equipment at home?",
        answer: "Basic equipment like a yoga mat is helpful, but our physiotherapists bring portable equipment when needed for specific therapies."
      },
      {
        question: "Can physiotherapy help with chronic pain?",
        answer: "Yes, physiotherapy is highly effective for managing chronic pain conditions like back pain, arthritis, and joint pain through targeted exercises and manual therapy."
      },
      {
        question: "Are the physiotherapists qualified?",
        answer: "All our physiotherapists are certified professionals with degrees in physiotherapy and specialized training in various therapeutic techniques."
      },
    ],
    testimonials: [
      {
        name: "Suresh Reddy",
        location: "Hyderabad",
        review: "After my knee surgery, the physiotherapist helped me regain mobility much faster than expected. Very professional and caring."
      },
      {
        name: "Kavita Joshi",
        location: "Bangalore",
        review: "The physiotherapy sessions at home were incredibly convenient and effective. My back pain has reduced significantly!"
      },
    ],
  },

  "icu-setup-at-home": {
    name: "ICU Setup at Home",
    subtitle: "Hospital-grade ICU facilities",
    icon: BedDouble,
    quickFeatures: ["ICU Equipment", "24/7 Monitoring", "Medical Team", "Cost-Effective"],
    overview: {
      what:
        "Advanced ICU setup at home with monitoring equipment, ventilators, and round-the-clock medical supervision for critical care patients.",
      whoShouldOpt: [
        "Critical patients requiring intensive monitoring",
        "Long-term ICU care patients",
        "Post-ICU recovery patients",
        "Patients preferring home care over hospital",
      ],
    },
    included: [
      "ICU bed with air mattress",
      "Ventilator support",
      "Multi-parameter monitoring equipment",
      "Medical supervision (nurse + doctor)",
      "Emergency medical supplies",
      "24/7 monitoring",
    ],
    howItWorks: [
      { step: 1, title: "Medical Assessment", description: "Doctor evaluates patient" },
      { step: 2, title: "ICU Installation", description: "Equipment setup at home" },
      { step: 3, title: "Medical Team", description: "Nurses and doctors assigned" },
      { step: 4, title: "Continuous Care", description: "24/7 critical care monitoring" },
    ],
    pricing: { startingFrom: "₹5000/day", note: "Depends on equipment and medical supervision needs" },
    faqs: [
      {
        question: "What medical conditions can be treated with home ICU?",
        answer: "Home ICU is suitable for post-operative recovery, chronic respiratory conditions, neurological conditions, and patients requiring continuous monitoring."
      },
      {
        question: "Is home ICU as safe as hospital ICU?",
        answer: "Yes, when properly set up with qualified medical staff and equipment, home ICU provides comparable care with added comfort of home environment."
      },
      {
        question: "What if there's a medical emergency?",
        answer: "Our medical team is trained to handle emergencies. We also have protocols for immediate hospital transfer if required."
      },
      {
        question: "How quickly can ICU setup be arranged?",
        answer: "After medical assessment and approval, ICU setup can typically be arranged within 24-48 hours."
      },
    ],
    testimonials: [
      {
        name: "Dr. Amit Verma (Patient's Family)",
        location: "Delhi",
        review: "The home ICU setup allowed my father to recover in familiar surroundings with excellent medical care. Much more affordable than hospital ICU."
      },
      {
        name: "Sunita Kapoor",
        location: "Mumbai",
        review: "Outstanding service! The medical team was available 24/7 and the equipment was hospital-grade. Highly recommend for critical care at home."
      },
    ],
  },

  /* ================= ON-CALL MEDICAL ================= */

  "injection-iv-infusion": {
    name: "Injection & IV Infusion",
    subtitle: "Safe medication administration",
    icon: Syringe,
    quickFeatures: ["Sterile Procedure", "Trained Nurses", "Home Service", "Pain-Free"],
    overview: {
      what:
        "Professional injection and IV infusion services at home by certified nurses using sterile equipment and proper medical protocols.",
      whoShouldOpt: [
        "Patients needing regular injections (insulin, antibiotics)",
        "Post-hospital patients requiring IV medications",
        "Chronic condition patients on medication",
        "Patients uncomfortable visiting hospitals",
      ],
    },
    included: [
      "Sterile equipment and supplies",
      "Certified nurse visit",
      "Safe disposal of medical waste",
      "Vitals check before procedure",
      "Post-injection monitoring",
    ],
    howItWorks: [
      { step: 1, title: "Book Service", description: "Choose injection type & timing" },
      { step: 2, title: "Nurse Visit", description: "Qualified nurse arrives" },
      { step: 3, title: "Procedure", description: "Safe administration at home" },
      { step: 4, title: "Follow-up", description: "Post-care instructions" },
    ],
    pricing: { startingFrom: "₹299", note: "Depends on medication and complexity" },
    faqs: [
      {
        question: "Is the procedure painful?",
        answer: "Our nurses are trained in pain-free injection techniques. Most patients experience minimal discomfort."
      },
      {
        question: "Do I need to provide the medication?",
        answer: "Yes, you need to provide the prescribed medication. Our nurses bring sterile equipment and supplies for the procedure."
      },
      {
        question: "Can you administer IV fluids at home?",
        answer: "Yes, we provide IV infusion services at home including saline drips, antibiotic infusions, and other prescribed IV medications."
      },
      {
        question: "How long does an IV infusion take?",
        answer: "Depending on the type and volume, IV infusions typically take 30 minutes to 2 hours. Our nurse stays throughout the procedure."
      },
    ],
    testimonials: [
      {
        name: "Arjun Malhotra",
        location: "Pune",
        review: "Very professional service. The nurse was skilled and the injection was almost painless. Will definitely use again."
      },
      {
        name: "Lakshmi Nair",
        location: "Kochi",
        review: "Convenient and affordable. The nurse came on time and administered the IV with care. Great service!"
      },
    ],
  },

  "wound-dressing-at-home": {
    name: "Wound Dressing at Home",
    subtitle: "Professional wound care",
    icon: Shield,
    quickFeatures: ["Sterile Dressing", "Infection Control", "Expert Care", "Fast Healing"],
    overview: {
      what:
        "Expert wound dressing services at home ensuring proper healing, infection control, and regular monitoring by trained healthcare professionals.",
      whoShouldOpt: [
        "Post-surgery patients with surgical wounds",
        "Diabetic patients with chronic wounds",
        "Accident victims with injury wounds",
        "Bedridden patients with pressure sores",
      ],
    },
    included: [
      "Sterile dressing materials",
      "Wound cleaning and disinfection",
      "Infection control measures",
      "Healing assessment",
      "Pain management",
      "Progress documentation",
    ],
    howItWorks: [
      { step: 1, title: "Book Service", description: "Schedule wound dressing" },
      { step: 2, title: "Nurse Visit", description: "Professional arrives with supplies" },
      { step: 3, title: "Wound Care", description: "Cleaning and fresh dressing" },
      { step: 4, title: "Follow-up", description: "Healing progress monitoring" },
    ],
    pricing: { startingFrom: "₹399", note: "Depends on wound type and complexity" },
    faqs: [
      {
        question: "How often should wound dressing be changed?",
        answer: "It depends on the wound type and healing stage. Typically, dressings are changed every 1-3 days as recommended by your doctor."
      },
      {
        question: "Do you provide dressing materials?",
        answer: "Yes, we provide all sterile dressing materials, antiseptics, and supplies needed for proper wound care."
      },
      {
        question: "Can you handle infected wounds?",
        answer: "Yes, our nurses are trained in managing infected wounds with proper antiseptic protocols. Severe infections may require doctor consultation."
      },
      {
        question: "What if the wound isn't healing properly?",
        answer: "Our nurses monitor healing progress. If the wound shows signs of poor healing or infection, we recommend immediate doctor consultation."
      },
    ],
    testimonials: [
      {
        name: "Pooja Gupta",
        location: "Delhi",
        review: "Excellent wound care service! The nurse was very gentle and my surgical wound healed without any complications."
      },
      {
        name: "Ravi Kumar",
        location: "Bangalore",
        review: "Professional and caring service. They came daily for dressing changes and my diabetic wound healed much faster than expected."
      },
    ],
  },

  "ryles-tube-catheter-change": {
    name: "Ryle's Tube / Catheter Change",
    subtitle: "Expert tube management",
    icon: Pill,
    quickFeatures: ["Sterile Procedure", "Trained Nurses", "Comfortable", "Safe"],
    overview: {
      what:
        "Safe and hygienic Ryle's tube or catheter replacement at home by experienced nurses following strict medical protocols.",
      whoShouldOpt: [
        "Long-term tube feeding patients",
        "Bedridden patients with catheters",
        "Post-stroke patients",
        "Patients unable to visit hospitals",
      ],
    },
    included: [
      "Sterile procedure",
      "Trained nurse",
      "New tube/catheter",
      "Position verification",
      "Patient comfort care",
      "Post-procedure instructions",
    ],
    howItWorks: [
      { step: 1, title: "Book Service", description: "Schedule tube change" },
      { step: 2, title: "Nurse Visit", description: "Experienced nurse arrives" },
      { step: 3, title: "Procedure", description: "Safe tube/catheter change" },
      { step: 4, title: "Verification", description: "Position check & care tips" },
    ],
    pricing: { startingFrom: "₹499", note: "Depends on procedure type" },
    faqs: [
      {
        question: "Is tube/catheter change painful?",
        answer: "Our nurses use gentle techniques to minimize discomfort. Most patients experience mild discomfort that quickly subsides."
      },
      {
        question: "How often should tubes/catheters be changed?",
        answer: "Ryle's tubes are typically changed every 4-6 weeks, and catheters every 2-4 weeks, as per medical guidelines."
      },
      {
        question: "Do I need to provide the new tube/catheter?",
        answer: "It's preferred if you have a prescription and can provide it. Otherwise, we can arrange for standard medical-grade tubes/catheters."
      },
      {
        question: "Can you handle complications during the procedure?",
        answer: "Yes, our nurses are trained to handle common complications. If any serious issues arise, they will immediately contact medical support."
      },
    ],
    testimonials: [
      {
        name: "Deepak Singh",
        location: "Lucknow",
        review: "The nurse changed my father's catheter very professionally. He was comfortable throughout and the process was quick."
      },
      {
        name: "Anjali Reddy",
        location: "Hyderabad",
        review: "Reliable service for Ryle's tube changes. The nurse is always gentle and ensures my mother is comfortable. Thank you!"
      },
    ],
  },

  "tracheostomy-care": {
    name: "Tracheostomy Care",
    subtitle: "Specialized respiratory care",
    icon: Wind,
    quickFeatures: ["Expert Care", "Sterile Technique", "Regular Cleaning", "24/7 Support"],
    overview: {
      what:
        "Professional tracheostomy care at home for respiratory patients including cleaning, tube care, and emergency management.",
      whoShouldOpt: [
        "Patients with permanent tracheostomy",
        "Respiratory patients on long-term ventilation",
        "Post-surgical tracheostomy patients",
        "Patients requiring specialized airway care",
      ],
    },
    included: [
      "Tracheostomy cleaning",
      "Tube care and maintenance",
      "Suctioning when needed",
      "Monitoring for complications",
      "Emergency care readiness",
      "Caregiver training",
    ],
    howItWorks: [
      { step: 1, title: "Book Service", description: "Schedule care visit" },
      { step: 2, title: "Nurse Assessment", description: "Initial evaluation" },
      { step: 3, title: "Care Procedure", description: "Cleaning and maintenance" },
      { step: 4, title: "Training", description: "Family caregiver guidance" },
    ],
    pricing: { startingFrom: "₹699", note: "Depends on care frequency and requirements" },
    faqs: [
      {
        question: "How often does tracheostomy need cleaning?",
        answer: "Typically, tracheostomy sites need cleaning 1-3 times daily. Our nurses will assess and recommend the appropriate frequency."
      },
      {
        question: "Can family members learn tracheostomy care?",
        answer: "Yes, we provide comprehensive training to family members for basic tracheostomy care and emergency procedures."
      },
      {
        question: "What if there's an emergency with the tracheostomy?",
        answer: "Our nurses are trained in emergency tracheostomy care. We also provide 24/7 emergency support and guidance."
      },
      {
        question: "Do you provide suctioning services?",
        answer: "Yes, suctioning is included in our tracheostomy care to keep airways clear and prevent complications."
      },
    ],
    testimonials: [
      {
        name: "Mohan Kumar",
        location: "Chennai",
        review: "The tracheostomy care team is exceptional. They taught us how to care for my brother and are always available for emergencies."
      },
      {
        name: "Rekha Sharma",
        location: "Delhi",
        review: "Professional and compassionate care. The nurse is very skilled and my husband is much more comfortable now."
      },
    ],
  },

  "cannulation-insertion": {
    name: "Cannulation Insertion",
    subtitle: "IV line insertion by experts",
    icon: Activity,
    quickFeatures: ["Painless Technique", "Sterile", "Experienced Nurses", "Quick Service"],
    overview: {
      what:
        "Safe IV cannula insertion by trained professionals at home for patients requiring intravenous access for medications or fluids.",
      whoShouldOpt: [
        "Patients needing IV medication at home",
        "Dehydration patients requiring IV fluids",
        "Post-hospital patients on IV therapy",
        "Patients with difficult venous access",
      ],
    },
    included: [
      "Sterile cannulation",
      "Professional care",
      "Vein assessment",
      "Secure fixation",
      "Site care instructions",
      "Follow-up support",
    ],
    howItWorks: [
      { step: 1, title: "Book Service", description: "Schedule cannulation" },
      { step: 2, title: "Nurse Visit", description: "Skilled nurse arrives" },
      { step: 3, title: "Insertion", description: "Pain-free IV line insertion" },
      { step: 4, title: "Care Instructions", description: "IV site maintenance tips" },
    ],
    pricing: { startingFrom: "₹299", note: "Single insertion, replacement available" },
    faqs: [
      {
        question: "Is cannulation painful?",
        answer: "Our nurses use pain-minimization techniques. Most patients feel only a small prick during insertion."
      },
      {
        question: "How long can a cannula stay in place?",
        answer: "Typically, a cannula can remain for 72-96 hours before replacement is needed, depending on the site condition."
      },
      {
        question: "What if the cannula gets blocked or dislodged?",
        answer: "Contact us immediately. We'll send a nurse to replace the cannula at no additional charge for insertion."
      },
      {
        question: "Can you insert cannula in difficult veins?",
        answer: "Yes, our experienced nurses are skilled in finding veins even in difficult cases including elderly patients and children."
      },
    ],
    testimonials: [
      {
        name: "Sanjay Mehta",
        location: "Mumbai",
        review: "The nurse inserted the cannula so smoothly. I barely felt anything! Very professional service."
      },
      {
        name: "Priya Nambiar",
        location: "Bangalore",
        review: "Quick and efficient service. The nurse was very experienced and found the vein on the first attempt."
      },
    ],
  },

  /* ================= DIAGNOSTICS ================= */

  "master-health-checkups": {
    name: "Master Health Check-ups",
    subtitle: "Comprehensive health screening",
    icon: FileHeart,
    quickFeatures: ["Full Body Checkup", "60+ Tests", "Doctor Review", "Home Collection"],
    overview: {
      what:
        "Complete body health check packages for early detection of diseases including blood tests, organ function tests, and doctor-reviewed reports.",
      whoShouldOpt: [
        "Working professionals for annual health screening",
        "Individuals over 30 for preventive care",
        "People with family history of chronic diseases",
        "Health-conscious individuals",
      ],
    },
    included: [
      "Complete blood count",
      "Lipid profile",
      "Liver & kidney function tests",
      "Thyroid function tests",
      "Blood sugar tests",
      "Vitamin levels",
      "Doctor-reviewed reports",
      "Home sample collection",
    ],
    howItWorks: [
      { step: 1, title: "Book Package", description: "Choose health checkup plan" },
      { step: 2, title: "Sample Collection", description: "Home visit by phlebotomist" },
      { step: 3, title: "Lab Processing", description: "Certified lab testing" },
      { step: 4, title: "Reports", description: "Digital reports with doctor review" },
    ],
    pricing: { startingFrom: "₹1999", note: "Package-based pricing for comprehensive tests" },
    faqs: [
      {
        question: "What tests are included in master health checkup?",
        answer: "Master health checkup includes 60+ tests covering blood count, organ functions, lipid profile, thyroid, diabetes, vitamins, and more."
      },
      {
        question: "Do I need to fast before the test?",
        answer: "Yes, 10-12 hours fasting is required for accurate results, especially for blood sugar and lipid tests. Water is allowed."
      },
      {
        question: "How soon will I get the reports?",
        answer: "Most reports are available within 24-48 hours. Complex tests may take 3-5 days. All reports are digitally delivered."
      },
      {
        question: "Will a doctor review my reports?",
        answer: "Yes, all reports are reviewed by qualified doctors who provide insights and recommendations based on your results."
      },
    ],
    testimonials: [
      {
        name: "Rohit Agarwal",
        location: "Pune",
        review: "Very comprehensive health checkup. The reports were detailed and the doctor's review helped me understand my health better."
      },
      {
        name: "Sneha Kapoor",
        location: "Delhi",
        review: "Convenient home collection and quick reports. Early detection of vitamin deficiency helped me take corrective action!"
      },
    ],
  },

  "blood-tests-at-home": {
    name: "Blood Tests at Home",
    subtitle: "300+ diagnostic tests",
    icon: TestTube,
    quickFeatures: ["Home Collection", "Fast Reports", "300+ Tests", "Affordable"],
    overview: {
      what:
        "Convenient blood sample collection at home with certified labs processing 300+ diagnostic tests for various health conditions.",
      whoShouldOpt: [
        "Anyone needing blood tests",
        "Busy professionals unable to visit labs",
        "Elderly or mobility-challenged patients",
        "Patients requiring regular monitoring",
      ],
    },
    included: [
      "Home sample collection",
      "Certified lab testing",
      "Digital reports",
      "Doctor consultation (if needed)",
      "Free sample recollection if required",
      "NABL accredited labs",
    ],
    howItWorks: [
      { step: 1, title: "Book Test", description: "Choose required blood tests" },
      { step: 2, title: "Home Collection", description: "Phlebotomist visits home" },
      { step: 3, title: "Lab Testing", description: "Sample processed at lab" },
      { step: 4, title: "Digital Reports", description: "Reports via email/app" },
    ],
    pricing: { startingFrom: "₹499", note: "Test-dependent pricing, packages available" },
    faqs: [
      {
        question: "What types of blood tests can be done at home?",
        answer: "We offer 300+ tests including CBC, blood sugar, thyroid, liver, kidney, vitamins, hormones, and specialized disease markers."
      },
      {
        question: "Is home collection safe and hygienic?",
        answer: "Yes, our trained phlebotomists use sterile, disposable equipment and follow strict hygiene protocols."
      },
      {
        question: "What if I need to repeat a test?",
        answer: "If required due to any issue with the sample, we provide free sample recollection at no additional cost."
      },
      {
        question: "Are the labs certified?",
        answer: "Yes, we partner only with NABL-accredited and ISO-certified laboratories ensuring highest quality standards."
      },
    ],
    testimonials: [
      {
        name: "Amit Kulkarni",
        location: "Bangalore",
        review: "Super convenient! The phlebotomist came exactly on time and the blood draw was painless. Reports came the next day."
      },
      {
        name: "Divya Menon",
        location: "Kochi",
        review: "Great service for regular health monitoring. No need to travel to labs anymore. Highly recommended!"
      },
    ],
  },

  "thyroid-diabetes-cardiac-tests": {
    name: "Thyroid | Diabetes | Cardiac Tests",
    subtitle: "Specialized health tests",
    icon: HeartPulse,
    quickFeatures: ["Specialized Tests", "Expert Analysis", "Quick Reports", "Home Collection"],
    overview: {
      what:
        "Specialized diagnostic tests for thyroid disorders, diabetes management, and cardiac health monitoring with expert interpretation.",
      whoShouldOpt: [
        "Patients with thyroid disorders",
        "Diabetic patients needing regular monitoring",
        "Individuals with cardiac risk factors",
        "People with family history of these conditions",
      ],
    },
    included: [
      "Thyroid function tests (T3, T4, TSH)",
      "Diabetes tests (HbA1c, fasting, PP)",
      "Cardiac markers (troponin, lipid profile)",
      "Home sample collection",
      "Expert report interpretation",
      "Treatment recommendations",
    ],
    howItWorks: [
      { step: 1, title: "Select Tests", description: "Choose specific tests needed" },
      { step: 2, title: "Home Visit", description: "Sample collection at home" },
      { step: 3, title: "Specialized Testing", description: "Advanced lab analysis" },
      { step: 4, title: "Expert Review", description: "Specialist report review" },
    ],
    pricing: { startingFrom: "₹799", note: "Depends on tests selected" },
    faqs: [
      {
        question: "How often should thyroid tests be done?",
        answer: "For patients on thyroid medication, tests should be done every 6-12 months. For monitoring symptoms, consult your doctor."
      },
      {
        question: "What is HbA1c and why is it important?",
        answer: "HbA1c shows average blood sugar levels over 3 months. It's the gold standard for diabetes monitoring and management."
      },
      {
        question: "Can cardiac tests predict heart attack risk?",
        answer: "Tests like lipid profile and cardiac markers help assess heart disease risk. Emergency cardiac markers are used for acute conditions."
      },
      {
        question: "Do I need to fast for these tests?",
        answer: "Fasting is required for diabetes tests (8-12 hours) and lipid profile. Thyroid tests generally don't require fasting."
      },
    ],
    testimonials: [
      {
        name: "Ramesh Iyer",
        location: "Mumbai",
        review: "Regular HbA1c monitoring at home helps me manage my diabetes better. Reports are accurate and timely."
      },
      {
        name: "Neeta Joshi",
        location: "Pune",
        review: "Thyroid test at home was so convenient. The report came with clear explanations and helped adjust my medication."
      },
    ],
  },

  "infertility-hormonal-test": {
    name: "Infertility & Hormonal Test",
    subtitle: "Complete hormonal profiling",
    icon: Activity,
    quickFeatures: ["Fertility Tests", "Hormone Panels", "Confidential", "Expert Guidance"],
    overview: {
      what:
        "Advanced hormonal and fertility testing for couples planning pregnancy, including comprehensive hormone panels and reproductive health markers.",
      whoShouldOpt: [
        "Couples planning pregnancy",
        "Women with irregular periods",
        "PCOS/PCOD patients",
        "Individuals with hormonal imbalances",
        "Couples facing conception difficulties",
      ],
    },
    included: [
      "Female hormone panel (FSH, LH, AMH, prolactin)",
      "Male fertility tests (semen analysis)",
      "Thyroid function tests",
      "Androgen levels",
      "Home sample collection",
      "Doctor consultation",
      "Treatment guidance",
    ],
    howItWorks: [
      { step: 1, title: "Book Package", description: "Select fertility test package" },
      { step: 2, title: "Home Collection", description: "Discreet sample collection" },
      { step: 3, title: "Lab Analysis", description: "Specialized testing" },
      { step: 4, title: "Expert Consultation", description: "Doctor reviews results" },
    ],
    pricing: { startingFrom: "₹1499", note: "Package-based pricing for comprehensive panels" },
    faqs: [
      {
        question: "When should fertility tests be done?",
        answer: "For women, specific tests should be done on specific days of the menstrual cycle. Our team will guide you on optimal timing."
      },
      {
        question: "Is semen analysis included?",
        answer: "Yes, male fertility packages include semen analysis. Sample collection instructions are provided for home collection."
      },
      {
        question: "How confidential is the process?",
        answer: "We maintain complete confidentiality. All samples and reports are handled with strict privacy protocols."
      },
      {
        question: "Will I get doctor consultation with reports?",
        answer: "Yes, all fertility test packages include consultation with fertility specialists who explain results and suggest next steps."
      },
    ],
    testimonials: [
      {
        name: "Anonymous",
        location: "Bangalore",
        review: "Very professional and confidential service. The fertility panel helped us understand our situation and plan treatment."
      },
      {
        name: "Anonymous",
        location: "Hyderabad",
        review: "Comprehensive hormonal testing at home made the process less stressful. Doctor consultation was very helpful."
      },
    ],
  },

  "cancer-genetic-tests": {
    name: "Cancer Screening | Genetic Tests",
    subtitle: "Advanced diagnostic testing",
    icon: Microscope,
    quickFeatures: ["Early Detection", "Genetic Analysis", "Cancer Markers", "Expert Review"],
    overview: {
      what:
        "Advanced screening for cancer and genetic disorders using tumor markers, genetic analysis, and specialized diagnostic tests for early detection.",
      whoShouldOpt: [
        "Individuals with family history of cancer",
        "High-risk individuals (smokers, obesity)",
        "People over 40 for preventive screening",
        "Patients requiring cancer monitoring",
      ],
    },
    included: [
      "Tumor marker tests",
      "Genetic mutation analysis",
      "Organ-specific cancer markers",
      "Risk assessment",
      "Doctor consultation",
      "Counseling for positive results",
      "Treatment guidance",
    ],
    howItWorks: [
      { step: 1, title: "Risk Assessment", description: "Select appropriate tests" },
      { step: 2, title: "Sample Collection", description: "Blood/tissue sample at home" },
      { step: 3, title: "Advanced Testing", description: "Genetic/molecular analysis" },
      { step: 4, title: "Specialist Review", description: "Oncologist report review" },
    ],
    pricing: { startingFrom: "₹2999", note: "Test-dependent, genetic tests cost more" },
    faqs: [
      {
        question: "What cancer markers are tested?",
        answer: "We test for various cancer markers including PSA (prostate), CA-125 (ovarian), CEA (colon), AFP (liver), and others based on risk factors."
      },
      {
        question: "Can genetic tests predict cancer risk?",
        answer: "Genetic tests identify mutations (like BRCA1/BRCA2) that increase cancer risk. Results help in preventive planning and monitoring."
      },
      {
        question: "Are these tests painful?",
        answer: "Most tests require only blood samples. Some genetic tests may require saliva or tissue samples, which are collected painlessly."
      },
      {
        question: "What if results show high risk?",
        answer: "We provide specialist consultation to explain results, assess risk, and recommend preventive measures or further diagnostic steps."
      },
    ],
    testimonials: [
      {
        name: "Rajiv Malhotra",
        location: "Delhi",
        review: "Early detection through cancer screening saved my life. The genetic counseling was invaluable for my family's health planning."
      },
      {
        name: "Dr. Sarah Fernandes",
        location: "Mumbai",
        review: "Professional genetic testing service. Results were accurate and the consultation helped me make informed health decisions."
      },
    ],
  },

  "biological-age-test": {
    name: "Biological Age Test",
    subtitle: "Know your biological age",
    icon: Clock,
    quickFeatures: ["Age Assessment", "Health Insights", "Lifestyle Guidance", "Track Aging"],
    overview: {
      what:
        "Advanced test that determines your biological age based on biomarkers, revealing how your body is aging compared to your chronological age.",
      whoShouldOpt: [
        "Health-conscious individuals",
        "People interested in longevity",
        "Fitness enthusiasts tracking progress",
        "Individuals wanting to reverse aging",
      ],
    },
    included: [
      "Comprehensive biomarker analysis",
      "Telomere length testing",
      "Oxidative stress markers",
      "Inflammation markers",
      "Metabolic health assessment",
      "Biological age calculation",
      "Lifestyle recommendations",
      "Anti-aging guidance",
    ],
    howItWorks: [
      { step: 1, title: "Book Test", description: "Select biological age package" },
      { step: 2, title: "Sample Collection", description: "Blood sample at home" },
      { step: 3, title: "Advanced Analysis", description: "Biomarker testing" },
      { step: 4, title: "Age Report", description: "Biological age with recommendations" },
    ],
    pricing: { startingFrom: "₹1999", note: "Single comprehensive test" },
    faqs: [
      {
        question: "What is biological age?",
        answer: "Biological age reflects your body's actual age based on cellular health, unlike chronological age which is just years lived."
      },
      {
        question: "How accurate is the biological age test?",
        answer: "The test uses validated biomarkers and scientific methods. While not 100% predictive, it provides valuable insights into your health."
      },
      {
        question: "Can I reverse my biological age?",
        answer: "Yes! With proper lifestyle changes, diet, exercise, and stress management, many people successfully reduce their biological age."
      },
      {
        question: "How often should I test my biological age?",
        answer: "Testing every 6-12 months helps track the effectiveness of lifestyle changes and anti-aging interventions."
      },
    ],
    testimonials: [
      {
        name: "Aditya Khanna",
        location: "Bangalore",
        review: "Fascinating test! Found out my biological age was 5 years younger than my actual age. Great motivation to maintain healthy habits."
      },
      {
        name: "Megha Desai",
        location: "Ahmedabad",
        review: "The test revealed areas I needed to improve. Following the recommendations, I'm working on reducing my biological age!"
      },
    ],
  },

  /* ================= IMAGING ================= */

  "xray-ecg-at-home": {
    name: "X-Ray & ECG at Home",
    subtitle: "Portable imaging services",
    icon: Scan,
    quickFeatures: ["Home Service", "Digital Reports", "Expert Analysis", "Convenient"],
    overview: {
      what:
        "Portable X-ray and ECG tests conducted safely at home using advanced mobile equipment with digital reports and expert analysis.",
      whoShouldOpt: [
        "Bedridden patients unable to travel",
        "Elderly patients with mobility issues",
        "Post-surgery patients requiring monitoring",
        "Emergency diagnostic needs at home",
      ],
    },
    included: [
      "Portable X-ray/ECG machine",
      "Trained technician visit",
      "Digital report generation",
      "Radiologist/cardiologist review",
      "Same-day reports",
      "Safety protocols followed",
    ],
    howItWorks: [
      { step: 1, title: "Book Test", description: "Schedule X-ray or ECG" },
      { step: 2, title: "Home Visit", description: "Technician with equipment" },
      { step: 3, title: "Test Procedure", description: "Quick and safe imaging" },
      { step: 4, title: "Digital Report", description: "Expert-reviewed results" },
    ],
    pricing: { startingFrom: "₹999", note: "Scan-dependent pricing" },
    faqs: [
      {
        question: "Is portable X-ray safe?",
        answer: "Yes, portable X-ray machines use minimal radiation and are completely safe. Our technicians follow all safety protocols."
      },
      {
        question: "What types of X-rays can be done at home?",
        answer: "Chest X-ray, spine X-ray, joint X-rays (knee, shoulder, etc.) can be done at home. Complex imaging requires hospital visit."
      },
      {
        question: "How long does ECG take?",
        answer: "ECG typically takes 5-10 minutes including setup. Results are available within a few hours."
      },
      {
        question: "Will a doctor review the reports?",
        answer: "Yes, all X-rays are reviewed by radiologists and ECGs by cardiologists before reports are sent to you."
      },
    ],
    testimonials: [
      {
        name: "Harish Rao",
        location: "Chennai",
        review: "Portable X-ray service was a blessing for my bedridden mother. No need to transport her to hospital. Very professional!"
      },
      {
        name: "Kavita Saxena",
        location: "Delhi",
        review: "ECG at home was so convenient. The technician was skilled and the report came within hours. Great service!"
      },
    ],
  },

  "xray-ultrasound": {
    name: "X-Ray | Ultrasound",
    subtitle: "Digital imaging facility",
    icon: Scan,
    quickFeatures: ["Digital Imaging", "Expert Radiologists", "Quick Reports", "Affordable"],
    overview: {
      what:
        "High-quality X-ray and ultrasound imaging at diagnostic centers with advanced equipment and expert radiologist interpretation.",
      whoShouldOpt: [
        "Patients needing diagnostic imaging",
        "Pregnant women for prenatal ultrasound",
        "Injury cases requiring X-rays",
        "Abdominal or organ imaging needs",
      ],
    },
    included: [
      "Digital X-ray/Ultrasound",
      "Advanced imaging equipment",
      "Radiologist interpretation",
      "Digital and printed reports",
      "CD/USB of images",
      "Multiple body part scanning",
    ],
    howItWorks: [
      { step: 1, title: "Book Scan", description: "Choose X-ray or ultrasound" },
      { step: 2, title: "Visit Center", description: "Come to diagnostic center" },
      { step: 3, title: "Imaging", description: "Quick scan procedure" },
      { step: 4, title: "Report", description: "Digital report within hours" },
    ],
    pricing: { startingFrom: "₹1200", note: "Scan type and body part based" },
    faqs: [
      {
        question: "Do I need any preparation for X-ray?",
        answer: "Most X-rays need no preparation. For abdominal X-rays, you may need to fast. We'll inform you during booking."
      },
      {
        question: "Is ultrasound safe during pregnancy?",
        answer: "Yes, ultrasound is completely safe for pregnant women and babies. It's the standard method for prenatal monitoring."
      },
      {
        question: "How long do I have to wait for reports?",
        answer: "X-ray reports typically come within 2-4 hours. Ultrasound reports are usually available within 24 hours."
      },
      {
        question: "Can I get images on CD?",
        answer: "Yes, we provide digital images on CD/USB along with printed reports for your records and doctor consultation."
      },
    ],
    testimonials: [
      {
        name: "Pradeep Kumar",
        location: "Bangalore",
        review: "Modern facility with latest ultrasound machines. The radiologist was very thorough and explained everything clearly."
      },
      {
        name: "Swati Patel",
        location: "Ahmedabad",
        review: "Excellent X-ray service. No waiting time, quick procedure, and got reports the same day. Very satisfied!"
      },
    ],
  },

  "2d-echo": {
    name: "2D Echo",
    subtitle: "Cardiac imaging",
    icon: HeartPulse,
    quickFeatures: ["Heart Imaging", "Cardiologist Review", "Detailed Report", "Safe"],
    overview: {
      what:
        "Detailed heart imaging using 2D echocardiography to assess heart structure, function, and blood flow with cardiologist interpretation.",
      whoShouldOpt: [
        "Heart patients for regular monitoring",
        "Individuals with chest pain or breathlessness",
        "High blood pressure patients",
        "Pre-surgery cardiac assessment",
      ],
    },
    included: [
      "2D echocardiography",
      "Doppler assessment",
      "Heart function evaluation",
      "Valve assessment",
      "Cardiologist report",
      "Digital images and video",
      "Treatment recommendations",
    ],
    howItWorks: [
      { step: 1, title: "Book Echo", description: "Schedule 2D echo test" },
      { step: 2, title: "Visit Clinic", description: "Come to cardiology center" },
      { step: 3, title: "Echo Test", description: "30-minute painless procedure" },
      { step: 4, title: "Cardiologist Review", description: "Detailed report and guidance" },
    ],
    pricing: { startingFrom: "₹1500", note: "Comprehensive cardiac imaging" },
    faqs: [
      {
        question: "Is 2D echo painful or uncomfortable?",
        answer: "No, 2D echo is completely painless. It uses ultrasound waves and you'll only feel a probe moving on your chest."
      },
      {
        question: "How long does the test take?",
        answer: "The 2D echo procedure typically takes 20-30 minutes. You'll get a detailed report within 24 hours."
      },
      {
        question: "Do I need any preparation?",
        answer: "No special preparation needed. Wear comfortable clothing that allows easy chest access. No fasting required."
      },
      {
        question: "What does 2D echo detect?",
        answer: "It detects heart valve problems, heart chamber size, pumping function, blood clots, fluid around heart, and structural abnormalities."
      },
    ],
    testimonials: [
      {
        name: "Sunil Sharma",
        location: "Delhi",
        review: "Excellent cardiac imaging facility. The cardiologist explained my heart condition clearly and suggested appropriate treatment."
      },
      {
        name: "Radha Krishnan",
        location: "Chennai",
        review: "Very professional 2D echo service. The report was detailed with images, helping my doctor plan my treatment effectively."
      },
    ],
  },

  "ct-mri-scan": {
    name: "CT Scan | MRI Scan",
    subtitle: "Advanced imaging technology",
    icon: Scan,
    quickFeatures: ["3D Imaging", "Expert Radiologists", "Detailed Reports", "Latest Technology"],
    overview: {
      what:
        "Advanced CT and MRI scans for accurate diagnosis using latest imaging technology with expert radiologist interpretation and 3D reconstruction.",
      whoShouldOpt: [
        "Patients needing detailed internal imaging",
        "Suspected tumor or cancer cases",
        "Brain and spine imaging needs",
        "Joint and soft tissue evaluation",
        "Complex diagnostic cases",
      ],
    },
    included: [
      "High-resolution CT/MRI scan",
      "Contrast enhancement if required",
      "3D reconstruction",
      "Expert radiologist interpretation",
      "Detailed written report",
      "CD of complete images",
      "Multiple body part scanning",
    ],
    howItWorks: [
      { step: 1, title: "Book Scan", description: "Choose CT or MRI with body part" },
      { step: 2, title: "Pre-Scan Prep", description: "Instructions provided" },
      { step: 3, title: "Scanning", description: "Advanced imaging procedure" },
      { step: 4, title: "Expert Report", description: "Radiologist-reviewed results" },
    ],
    pricing: { startingFrom: "₹3500", note: "Scan type and body part dependent" },
    faqs: [
      {
        question: "What's the difference between CT and MRI?",
        answer: "CT uses X-rays (better for bones, chest, abdomen). MRI uses magnets (better for brain, spine, soft tissues). Your doctor recommends based on need."
      },
      {
        question: "Is MRI claustrophobic?",
        answer: "Some patients feel confined. We have open MRI options and provide support. The procedure typically takes 30-60 minutes."
      },
      {
        question: "Do I need contrast injection?",
        answer: "Contrast enhances image quality for certain scans. Your doctor will prescribe if needed. We ensure safety with allergy screening."
      },
      {
        question: "Can I eat before CT/MRI?",
        answer: "For CT with contrast, 4-6 hours fasting may be needed. MRI usually needs no fasting unless abdominal scan. We'll guide you."
      },
    ],
    testimonials: [
      {
        name: "Dr. Venkat Reddy",
        location: "Hyderabad",
        review: "State-of-the-art imaging facility. The MRI scan quality was excellent and helped in accurate diagnosis of my patient's condition."
      },
      {
        name: "Anjali Verma",
        location: "Mumbai",
        review: "Very professional CT scan service. Staff was caring and the radiologist's report was thorough. Highly recommend!"
      },
    ],
  },

  /* ================= EQUIPMENT ================= */

  "oxygen-concentrator-cylinder": {
    name: "Oxygen Concentrator / Cylinder",
    subtitle: "Respiratory support equipment",
    icon: Wind,
    quickFeatures: ["Home Delivery", "24/7 Support", "Maintenance Included", "Affordable Rental"],
    overview: {
      what:
        "Oxygen concentrators and cylinders available for home rental with installation, maintenance, and 24/7 support for respiratory patients.",
      whoShouldOpt: [
        "COVID-19 recovery patients",
        "COPD and chronic respiratory patients",
        "Low oxygen saturation patients",
        "Post-hospital oxygen therapy patients",
      ],
    },
    included: [
      "Oxygen concentrator or cylinder",
      "Home installation and setup",
      "Usage training",
      "24/7 technical support",
      "Maintenance and servicing",
      "Oxygen saturation monitor",
      "Replacement if faulty",
    ],
    howItWorks: [
      { step: 1, title: "Book Equipment", description: "Select concentrator or cylinder" },
      { step: 2, title: "Home Delivery", description: "Quick delivery and setup" },
      { step: 3, title: "Installation", description: "Professional installation" },
      { step: 4, title: "Ongoing Support", description: "24/7 assistance available" },
    ],
    pricing: { startingFrom: "₹1500/month", note: "Rental based, refundable security deposit" },
    faqs: [
      {
        question: "What's the difference between concentrator and cylinder?",
        answer: "Concentrator produces oxygen from air (unlimited supply, needs electricity). Cylinder has stored oxygen (portable, needs refilling)."
      },
      {
        question: "How long does oxygen cylinder last?",
        answer: "Depends on flow rate and cylinder size. Typically 5-10 hours. We provide refilling service or cylinder replacement."
      },
      {
        question: "Do you provide installation and training?",
        answer: "Yes, our technicians install equipment, demonstrate usage, and train family members on operation and safety."
      },
      {
        question: "What if equipment stops working?",
        answer: "Contact our 24/7 support immediately. We'll provide troubleshooting or send replacement equipment urgently."
      },
    ],
    testimonials: [
      {
        name: "Manoj Gupta",
        location: "Delhi",
        review: "Oxygen concentrator saved my father during COVID recovery. Equipment was excellent and support team was always available."
      },
      {
        name: "Shilpa Menon",
        location: "Bangalore",
        review: "Reliable oxygen cylinder rental service. Timely refills and good maintenance. Very helpful during emergency."
      },
    ],
  },

  "ventilator-bipap-cpap": {
    name: "Ventilator | BiPAP | CPAP",
    subtitle: "Advanced breathing assistance",
    icon: Activity,
    quickFeatures: ["Medical Grade", "Home Setup", "Sleep Apnea Care", "Expert Support"],
    overview: {
      what:
        "Advanced respiratory equipment including ventilators, BiPAP, and CPAP machines for home use with professional setup and monitoring.",
      whoShouldOpt: [
        "Sleep apnea patients needing CPAP",
        "Critical respiratory patients",
        "Patients on long-term ventilation",
        "COPD patients requiring BiPAP support",
      ],
    },
    included: [
      "Ventilator/BiPAP/CPAP machine",
      "Professional setup and calibration",
      "Masks and accessories",
      "Usage training",
      "Regular maintenance",
      "Technical support 24/7",
      "Sleep study data if applicable",
    ],
    howItWorks: [
      { step: 1, title: "Medical Assessment", description: "Doctor prescribes equipment" },
      { step: 2, title: "Equipment Delivery", description: "Device delivered to home" },
      { step: 3, title: "Professional Setup", description: "Calibration and training" },
      { step: 4, title: "Monitoring", description: "Regular follow-ups and support" },
    ],
    pricing: { startingFrom: "₹4000/month", note: "Device type dependent, security deposit required" },
    faqs: [
      {
        question: "What's the difference between CPAP, BiPAP, and Ventilator?",
        answer: "CPAP: constant pressure for sleep apnea. BiPAP: two pressures for breathing disorders. Ventilator: complete breathing support for critical patients."
      },
      {
        question: "Is CPAP uncomfortable to sleep with?",
        answer: "Initially it may feel unusual, but most users adapt within a week. We provide different mask options for comfort."
      },
      {
        question: "How often does the machine need servicing?",
        answer: "We recommend servicing every 3-6 months. Regular cleaning of masks and filters should be done weekly."
      },
      {
        question: "Can I travel with the equipment?",
        answer: "CPAP and BiPAP machines are portable. Ventilators are larger but we can arrange travel-friendly options if needed."
      },
    ],
    testimonials: [
      {
        name: "Ashok Reddy",
        location: "Hyderabad",
        review: "BiPAP machine improved my sleep quality drastically. Professional setup and regular maintenance checks are excellent."
      },
      {
        name: "Geeta Sharma",
        location: "Jaipur",
        review: "CPAP rental service is affordable and reliable. The team helped me choose the right mask and settings. Sleep better now!"
      },
    ],
  },

  "hospital-bed-wheelchair": {
    name: "Hospital Bed | Wheelchair",
    subtitle: "Mobility & comfort solutions",
    icon: BedDouble,
    quickFeatures: ["Electric/Manual Options", "Home Delivery", "Comfortable", "Affordable"],
    overview: {
      what:
        "Hospital beds and wheelchairs available for rent with home delivery, installation, and support for bedridden and mobility-challenged patients.",
      whoShouldOpt: [
        "Bedridden patients requiring adjustable beds",
        "Post-surgery recovery patients",
        "Elderly or disabled individuals",
        "Patients needing temporary mobility aid",
      ],
    },
    included: [
      "Hospital bed (manual or electric)",
      "Wheelchair (standard or powered)",
      "Home delivery and installation",
      "Mattress and accessories",
      "Usage demonstration",
      "Maintenance support",
      "Replacement if damaged",
    ],
    howItWorks: [
      { step: 1, title: "Select Equipment", description: "Choose bed or wheelchair" },
      { step: 2, title: "Home Delivery", description: "Equipment delivered quickly" },
      { step: 3, title: "Installation", description: "Professional setup" },
      { step: 4, title: "Usage Support", description: "Training and assistance" },
    ],
    pricing: { startingFrom: "₹2000/month", note: "Rental based, refundable security deposit" },
    faqs: [
      {
        question: "What types of hospital beds are available?",
        answer: "We offer manual (crank) and electric (motorized) hospital beds with adjustable height, backrest, and leg rest positions."
      },
      {
        question: "Do you provide mattresses with hospital beds?",
        answer: "Yes, all hospital beds come with comfortable medical-grade mattresses. Air mattresses are available for additional comfort."
      },
      {
        question: "What wheelchair options do you have?",
        answer: "We have standard manual wheelchairs, commode wheelchairs, and powered wheelchairs based on patient needs and mobility level."
      },
      {
        question: "Can equipment be returned before rental period ends?",
        answer: "Yes, early returns are accepted. Rental charges apply for used period, and security deposit is refunded after inspection."
      },
    ],
    testimonials: [
      {
        name: "Ramakant Joshi",
        location: "Pune",
        review: "Electric hospital bed made caring for my bedridden father much easier. Delivery and setup were very professional."
      },
      {
        name: "Nisha Kapoor",
        location: "Mumbai",
        review: "Wheelchair rental was perfect for my mother's recovery period. Good quality and affordable pricing. Highly recommend!"
      },
    ],
  },

  "icu-monitor-dvt-pump": {
    name: "ICU Monitor | DVT Pump",
    subtitle: "Critical care equipment",
    icon: Activity,
    quickFeatures: ["Medical Monitoring", "DVT Prevention", "ICU Quality", "Professional Setup"],
    overview: {
      what:
        "ICU monitoring equipment and DVT pumps for home critical care including vital signs monitoring and deep vein thrombosis prevention.",
      whoShouldOpt: [
        "Critical care patients at home",
        "Post-surgery patients requiring monitoring",
        "Bedridden patients at risk of DVT",
        "Patients on home ICU setup",
      ],
    },
    included: [
      "Multi-parameter ICU monitor",
      "DVT pump with compression sleeves",
      "Blood pressure monitoring",
      "Heart rate and oxygen monitoring",
      "Professional installation",
      "Usage training",
      "24/7 technical support",
    ],
    howItWorks: [
      { step: 1, title: "Medical Need", description: "Doctor prescribes equipment" },
      { step: 2, title: "Equipment Delivery", description: "Devices delivered home" },
      { step: 3, title: "Professional Setup", description: "Installation and calibration" },
      { step: 4, title: "Monitoring", description: "Continuous patient monitoring" },
    ],
    pricing: { startingFrom: "₹3000/month", note: "Equipment type dependent, security deposit required" },
    faqs: [
      {
        question: "What parameters does ICU monitor track?",
        answer: "ICU monitors track heart rate, blood pressure, oxygen saturation, respiratory rate, and temperature continuously."
      },
      {
        question: "What is DVT pump used for?",
        answer: "DVT pump uses sequential compression to improve blood circulation in legs, preventing blood clots in bedridden patients."
      },
      {
        question: "Do I need medical staff to operate equipment?",
        answer: "Basic monitoring can be done by family members after training. Critical care situations require trained nursing staff."
      },
      {
        question: "Are alarms adjustable on ICU monitor?",
        answer: "Yes, alarm limits can be set as per doctor's instructions. Our technicians help configure appropriate alert thresholds."
      },
    ],
    testimonials: [
      {
        name: "Dr. Sanjay Kumar",
        location: "Delhi",
        review: "ICU monitor rental was essential for home care of critical patient. Equipment quality was excellent and monitoring was accurate."
      },
      {
        name: "Meera Patel",
        location: "Ahmedabad",
        review: "DVT pump helped prevent complications for my bedridden mother. Easy to use and very effective. Great rental service!"
      },
    ],
  },

  "air-mattress-suction-machine": {
    name: "Air Mattress | Suction Machine",
    subtitle: "Patient comfort devices",
    icon: BedDouble,
    quickFeatures: ["Pressure Relief", "Bedsore Prevention", "Suction Support", "Easy to Use"],
    overview: {
      what:
        "Comfort and medical devices including air mattresses for bedsore prevention and suction machines for airway clearance in home care.",
      whoShouldOpt: [
        "Long-term bedridden patients",
        "Patients at risk of pressure sores",
        "Patients requiring airway suctioning",
        "Post-operative care patients",
      ],
    },
    included: [
      "Medical air mattress with pump",
      "Electric suction machine",
      "Suction catheters and accessories",
      "Installation and setup",
      "Usage demonstration",
      "Regular maintenance",
      "Replacement parts if needed",
    ],
    howItWorks: [
      { step: 1, title: "Select Equipment", description: "Choose mattress or suction unit" },
      { step: 2, title: "Home Delivery", description: "Equipment delivered quickly" },
      { step: 3, title: "Installation", description: "Professional setup and demo" },
      { step: 4, title: "Usage Guidance", description: "Training and ongoing support" },
    ],
    pricing: { startingFrom: "₹1200/month", note: "Rental based, refundable security deposit" },
    faqs: [
      {
        question: "How does air mattress prevent bedsores?",
        answer: "Air mattress alternates pressure in different sections, redistributing body weight and improving blood circulation to prevent pressure ulcers."
      },
      {
        question: "Is air mattress noisy?",
        answer: "Modern air mattresses have quiet pumps. While there's some sound from the pump, most patients and caregivers find it acceptable."
      },
      {
        question: "Who can operate suction machine?",
        answer: "Trained nurses or trained family members can operate suction machines. We provide comprehensive training for safe usage."
      },
      {
        question: "How often should suction catheters be replaced?",
        answer: "Suction catheters should be replaced after each use or as per medical guidelines. We provide regular supply of disposable catheters."
      },
    ],
    testimonials: [
      {
        name: "Vinod Sharma",
        location: "Bangalore",
        review: "Air mattress was crucial in preventing bedsores for my mother. The pump works quietly and the mattress is very comfortable."
      },
      {
        name: "Rekha Pillai",
        location: "Kerala",
        review: "Suction machine rental was essential for my husband's care. Equipment quality is good and support team is always helpful."
      },
    ],
  },

  /* ================= TELEMEDICINE ================= */

  "online-video-consultation": {
    name: "Online 24/7 Video Consultation",
    subtitle: "Always Accessible",
    icon: Video,
    quickFeatures: ["24/7 Available", "Instant Connect", "Expert Doctors", "Convenient"],
    overview: {
      what:
        "Connect with qualified doctors instantly through video consultation from the comfort of your home, available 24/7 for all your healthcare needs.",
      whoShouldOpt: [
        "Patients needing quick medical advice",
        "Follow-up consultations",
        "Non-emergency health concerns",
        "Prescription renewals",
        "Second opinion seekers",
      ],
    },
    included: [
      "24/7 doctor availability",
      "Video consultation",
      "Digital prescription",
      "Medical advice",
      "Follow-up support",
      "Health record maintenance",
    ],
    howItWorks: [
      { step: 1, title: "Book Consultation", description: "Select specialty & time" },
      { step: 2, title: "Connect with Doctor", description: "Video call with expert" },
      { step: 3, title: "Get Diagnosis", description: "Medical advice & prescription" },
      { step: 4, title: "Follow-up", description: "Track health & medications" },
    ],
    pricing: { startingFrom: "₹299", note: "Consultation fee varies by specialist" },
    faqs: [
      {
        question: "Is video consultation as effective as in-person?",
        answer: "Yes, for most non-emergency conditions, video consultation is highly effective. Doctors can diagnose and prescribe medications remotely."
      },
      {
        question: "Can I get a prescription through video consultation?",
        answer: "Absolutely! After consultation, doctors provide digital prescriptions that are valid at all pharmacies."
      },
      {
        question: "What if I need physical examination?",
        answer: "If the doctor determines physical examination is necessary, they'll recommend an in-person visit to a clinic or hospital."
      },
      {
        question: "Are the doctors qualified?",
        answer: "Yes, all our doctors are licensed medical professionals with verified credentials and extensive experience."
      },
    ],
    testimonials: [
      {
        name: "Rahul Verma",
        location: "Mumbai",
        review: "Super convenient! Got consultation for fever at midnight. Doctor was professional and prescribed medicines immediately."
      },
      {
        name: "Sneha Patel",
        location: "Bangalore",
        review: "Video consultation saved me a trip to the hospital. Doctor was attentive and the digital prescription worked perfectly."
      },
    ],
  },

  /* ================= PHARMACY ================= */

  "pharmacy": {
    name: "Pharmacy",
    subtitle: "Instant Meds Solutions",
    icon: ShoppingBag,
    quickFeatures: ["Home Delivery", "Verified Medicines", "Prescription Upload", "Affordable"],
    overview: {
      what:
        "Order medicines online with prescription and get them delivered to your doorstep. Genuine medicines from verified pharmacies at best prices.",
      whoShouldOpt: [
        "Patients needing regular medications",
        "Chronic disease patients",
        "Busy professionals",
        "Elderly unable to visit pharmacies",
        "Anyone seeking convenience",
      ],
    },
    included: [
      "Prescription medicine delivery",
      "OTC medicines and health products",
      "Verified and genuine medicines",
      "Medicine reminders",
      "Refill notifications",
      "Easy prescription upload",
    ],
    howItWorks: [
      { step: 1, title: "Upload Prescription", description: "Share prescription online" },
      { step: 2, title: "Verify & Confirm", description: "Pharmacist verifies order" },
      { step: 3, title: "Processing", description: "Medicines packed securely" },
      { step: 4, title: "Home Delivery", description: "Delivered to your doorstep" },
    ],
    pricing: { startingFrom: "Free Delivery", note: "On orders above ₹500" },
    faqs: [
      {
        question: "Do I need a prescription to order medicines?",
        answer: "Yes, prescription medicines require a valid prescription. OTC medicines can be ordered without prescription."
      },
      {
        question: "How long does delivery take?",
        answer: "Typically 24-48 hours depending on your location. Express delivery available in select cities."
      },
      {
        question: "Are the medicines genuine?",
        answer: "Yes, we source all medicines from verified and licensed distributors. All products are genuine with proper batch numbers."
      },
      {
        question: "Can I return medicines if needed?",
        answer: "Yes, medicines can be returned if unopened and unused within 7 days, as per our return policy."
      },
    ],
    testimonials: [
      {
        name: "Arun Kumar",
        location: "Chennai",
        review: "Very convenient medicine delivery service. All medicines were genuine and delivered on time. Great prices too!"
      },
      {
        name: "Priya Iyer",
        location: "Pune",
        review: "Ordering my father's monthly medicines is now so easy. The reminder feature ensures we never run out of stock."
      },
    ],
  },

  /* ================= CORPORATE HEALTH ================= */

  "corporate-wellness": {
    name: "Corporate Wellness",
    subtitle: "Healthy Workforce",
    icon: Briefcase,
    quickFeatures: ["Employee Health", "Preventive Care", "On-site Checkups", "Wellness Programs"],
    overview: {
      what:
        "Comprehensive corporate wellness programs including health checkups, preventive screenings, and wellness initiatives to keep your workforce healthy and productive.",
      whoShouldOpt: [
        "Companies wanting employee health programs",
        "Organizations prioritizing preventive care",
        "Businesses seeking productivity improvement",
        "Startups to large enterprises",
      ],
    },
    included: [
      "Annual health checkups for employees",
      "On-site health screening camps",
      "Vaccination drives",
      "Health talks and workshops",
      "Mental wellness programs",
      "Fitness challenges",
      "Customized wellness plans",
      "Health data analytics",
    ],
    howItWorks: [
      { step: 1, title: "Consultation", description: "Understand company needs" },
      { step: 2, title: "Custom Plan", description: "Design wellness program" },
      { step: 3, title: "Implementation", description: "On-site health camps" },
      { step: 4, title: "Monitoring", description: "Track health outcomes" },
    ],
    pricing: { startingFrom: "₹499/employee", note: "Custom packages based on company size" },
    faqs: [
      {
        question: "What size companies do you work with?",
        answer: "We work with companies of all sizes - from startups with 10 employees to large enterprises with 10,000+ employees."
      },
      {
        question: "Can you customize the wellness program?",
        answer: "Absolutely! We design wellness programs based on your industry, workforce demographics, and specific health goals."
      },
      {
        question: "Do you provide on-site health checkups?",
        answer: "Yes, we conduct health screening camps at your office premises with all necessary equipment and medical staff."
      },
      {
        question: "How does this benefit the company?",
        answer: "Corporate wellness reduces absenteeism, improves productivity, boosts employee morale, and reduces healthcare costs long-term."
      },
    ],
    testimonials: [
      {
        name: "Rajesh Malhotra (HR Head)",
        location: "Gurgaon",
        review: "Excellent corporate wellness program! Employee participation was high and the health screening helped many employees detect issues early."
      },
      {
        name: "Kavita Deshmukh (CEO)",
        location: "Mumbai",
        review: "Our company's productivity improved significantly after implementing this wellness program. Employees feel valued and healthier!"
      },
    ],
  },
};