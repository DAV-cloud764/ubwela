// ═══════════════════════════════════════════════════════════════════════
// PREMIUM HERBAL CLINIC - ENHANCED INTERACTIONS
// ═══════════════════════════════════════════════════════════════════════

// NAVBAR SCROLL BEHAVIOR
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add scrolled class for styling changes
  if (scrollTop > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// HAMBURGER MENU
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('active');
  
  if (navLinks.classList.contains('active')) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Handle window resize to reset menu on desktop
window.addEventListener('resize', () => {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth > 1024) {
    navLinks.classList.remove('active');
  }
});

// ═══════════════════════════════════════════════════════════════════════
// IMAGE CAROUSEL - ABOUT SECTION
// ═══════════════════════════════════════════════════════════════════════
const images = document.querySelectorAll('.image-carousel img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

if (leftArrow && rightArrow) {
  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
}

// ═══════════════════════════════════════════════════════════════════════
// INTERSECTION OBSERVER - SCROLL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe service boxes
  document.querySelectorAll(".service-box").forEach(box => {
    observer.observe(box);
  });
});

// ═══════════════════════════════════════════════════════════════════════
// PRIMARY CALL-TO-ACTION FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function callNow() {
  window.location.href = "tel:+255620196710";
}

function bookAppointment() {
  document.querySelector('.appointment-booking').scrollIntoView({ behavior: 'smooth' });
}

function bookConsultation() {
  document.querySelector('.appointment-booking').scrollIntoView({ behavior: 'smooth' });
}

function scrollToDave() {
  document.getElementById('product').scrollIntoView({ behavior: 'smooth' });
}

// ═══════════════════════════════════════════════════════════════════════
// PRODUCT RECOMMENDER - STEP NAVIGATION
// ═══════════════════════════════════════════════════════════════════════

let userSelections = {};
let currentStep = 1;

function nextStep(step, value) {
  if (step !== currentStep) {
    alert("Please complete the current step before proceeding.");
    return;
  }
  userSelections[`step${step}`] = value;
  
  // Fade out current step
  const currentElement = document.getElementById(`step${step}`);
  currentElement.style.animation = 'fadeOut 0.3s ease-out';
  
  setTimeout(() => {
    currentElement.classList.add("hidden");
    const nextElement = document.getElementById(`step${step + 1}`);
    if (nextElement) {
      nextElement.classList.remove("hidden");
      nextElement.style.animation = 'slideUp 0.5s ease-out';
    }
    currentStep++;
  }, 300);
}

function prevStep(step) {
  if (step > 1) {
    document.getElementById(`step${step}`).classList.add("hidden");
    document.getElementById(`step${step - 1}`).classList.remove("hidden");
    currentStep--;
  }
}

function showRecommendation(age) {
  userSelections["age"] = age;
  document.getElementById("step3").classList.add("hidden");

  let result = "";
  if (userSelections.step1 === "Digestive Issues") {
    result = "Aloe Vera Herbal Syrup";
  } else if (userSelections.step1 === "Low Energy & Fatigue") {
    result = "Ginseng & Moringa Energy Tonic";
  } else if (userSelections.step1 === "Weak Immune System") {
    result = "Turmeric + Honey Booster";
  } else if (userSelections.step1 === "Stress & Anxiety") {
    result = "Ashwagandha Calm Formula";
  } else if (userSelections.step1 === "Skin Problems") {
    result = "Neem & Aloe Skin Cleanser";
  }

  document.getElementById("recommendationText").innerText = result;
  document.getElementById("recommendationSection").classList.remove("hidden");

  // Auto-fill form with recommendation
  document.getElementById("recommendationBox").value =
    "Health Concern: " + userSelections.step1 + "\n" +
    "Activity Level: " + userSelections.step2 + "\n" +
    "Age Range: " + userSelections.age + "\n" +
    "Recommended Product: " + result + "\n" +
    "Usage: Take 2 tablespoons daily after meals with warm water.";

  document.getElementById("contactForm").classList.remove("hidden");
}

function cancel() {
  userSelections = {};
  currentStep = 1;
  document.getElementById("recommendationSection").classList.add("hidden");
  document.getElementById("contactForm").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.add("hidden");
}

// ═══════════════════════════════════════════════════════════════════════
// WHATSAPP FLOATING ICON - PULSE ANIMATION
// ═══════════════════════════════════════════════════════════════════════

window.addEventListener("scroll", () => {
  const whatsappIcon = document.querySelector(".whatsapp-float");
  if (whatsappIcon) {
    whatsappIcon.style.transition = "transform 0.3s ease";
    whatsappIcon.style.transform = "scale(1.05)";
    setTimeout(() => {
      whatsappIcon.style.transform = "scale(1)";
    }, 300);
  }
});

// ═══════════════════════════════════════════════════════════════════════
// COUNTER ANIMATION - HIGHLIGHTS SECTION
// ═══════════════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  const highlightsSection = document.querySelector('.highlights');
  const counters = [
    { element: document.getElementById('highlight-h2-1'), target: 5000, suffix: '+' },
    { element: document.getElementById('highlight-h2-2'), target: 15, suffix: '+' },
    { element: document.getElementById('highlight-h2-3'), target: 100, suffix: '%' },
    { element: document.getElementById('highlight-h2-4'), target: 50, suffix: '+' }
  ];

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          if (counter.element) {
            animateCounter(counter.element, counter.target, counter.suffix);
          }
        });
      }
    });
  }, { threshold: 0.5 });

  if (highlightsSection) {
    observer.observe(highlightsSection);
  }

  function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 120;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + suffix;
    }, 16);
  }
});

// ═══════════════════════════════════════════════════════════════════════
// FORMSPREE JSON SUBMISSION HANDLER
// ═══════════════════════════════════════════════════════════════════════

// Function to convert form data to JSON
function formToJSON(form) {
  const formData = new FormData(form);
  const data = {};
  
  // Handle regular form fields
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  // Handle additional fields that might not be in FormData
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    if (input.name && input.value) {
      data[input.name] = input.value;
    } else if (input.id && input.value && !data[input.id]) {
      // Use id as fallback if name is not present
      data[input.id] = input.value;
    }
  });
  
  return data;
}

// Function to submit form data as JSON to Formspree
async function submitToFormspree(form, formData) {
  const response = await fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

// ═══════════════════════════════════════════════════════════════════════
// CONTACT FORM VALIDATION & SUBMISSION
// ═══════════════════════════════════════════════════════════════════════

(function () {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (form && note) {
    function showMessage(text, ok) {
      note.textContent = text;
      note.style.color = ok ? '#2d5a3f' : '#d32f2f';
      note.style.fontWeight = '600';
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      note.textContent = '';

      const name = form.name?.value?.trim() || form.querySelector('#name')?.value?.trim();
      const email = form.email?.value?.trim() || form.querySelector('#email')?.value?.trim();
      const subject = form.subject?.value?.trim() || form.querySelector('#subject')?.value?.trim();
      const message = form.message?.value?.trim() || form.querySelector('#message')?.value?.trim();
      const phone = form.phone?.value?.trim() || form.querySelector('#phone')?.value?.trim();

      if (!name || !email || !subject || !message) {
        showMessage('Please complete all required fields marked with *', false);
        return;
      }

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) {
        showMessage('Please enter a valid email address', false);
        return;
      }

      showMessage('Sending message...', true);
      
      try {
        // Convert form data to JSON
        const formData = formToJSON(form);
        
        // Submit to Formspree
        await submitToFormspree(form, formData);
        
        showMessage('Your message has been sent successfully! Thank you for contacting us.', true);
        form.reset();
      } catch (error) {
        console.error('Form submission error:', error);
        showMessage('There was an error sending your message. Please try again.', false);
      }
    });
  }
}());

// ═══════════════════════════════════════════════════════════════════════
// APPOINTMENT FORM SUBMISSION
// ═══════════════════════════════════════════════════════════════════════

(function () {
  const appointmentForm = document.querySelector('.appointment-form');
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      
      // Get form elements
      const nameInput = this.querySelector('#full-name');
      const emailInput = this.querySelector('#email');
      const phoneInput = this.querySelector('#phone');
      const serviceInput = this.querySelector('#service');
      const dateInput = this.querySelector('#date');
      const timeInput = this.querySelector('#time');
      const additionalInfoInput = this.querySelector('#additional-info');
      
      // Validate required fields
      const name = nameInput?.value?.trim();
      const email = emailInput?.value?.trim();
      const phone = phoneInput?.value?.trim();
      const service = serviceInput?.value?.trim();
      const date = dateInput?.value?.trim();
      const time = timeInput?.value?.trim();
      
      if (!name || !email || !phone || !service || !date || !time) {
        alert('Please fill in all required fields.');
        return;
      }

      // Validate email
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Booking...';
      submitBtn.disabled = true;
      
      try {
        // Convert form data to JSON
        const formData = formToJSON(this);
        
        // Submit to Formspree
        await submitToFormspree(this, formData);
        
        alert('Your appointment has been booked successfully! We will contact you within 24 hours to confirm.');
        this.reset();
      } catch (error) {
        console.error('Appointment booking error:', error);
        alert('There was an error booking your appointment. Please try again or contact us directly.');
      } finally {
        // Restore button state
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }
}());

// ═══════════════════════════════════════════════════════════════════════
// CSS ANIMATION KEYFRAMES (Dynamically added)
// ═══════════════════════════════════════════════════════════════════════

const animationStyle = document.createElement('style');
animationStyle.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
document.head.appendChild(animationStyle);

// ═══════════════════════════════════════════════════════════════════════
// INTERNATIONALIZATION (i18n) SYSTEM
// ═══════════════════════════════════════════════════════════════════════

// Translation data
const translations = {
  en: {
    // Navigation
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-products': 'Products',
    'nav-testimonials': 'Testimonials',
    'nav-contact': 'Contact',
    
    // Buttons
    'btn-call-now': 'Call Now',
    'btn-book-appointment': 'Book Appointment',
    'btn-book-consultation': 'Book Consultation',
    'btn-explore-products': 'Explore Products',
    'btn-book-appointment-submit': 'Book Appointment',
    'btn-send-message': 'Send Message',
    
    // Hero Section
    'hero-subtitle': 'Natural Healing Solutions',
    'hero-title': 'Welcome to Natural Herbal<br>Clinic',
    'hero-description': 'Traditional African herbal medicine meets modern wellness.<br />Experience natural healing for a healthier life.',
    
    // Features
    'feature-natural': '100% Natural',
    'feature-expert': 'Expert Herbalists',
    'feature-proven': 'Proven Results',
    
    // About Section
    'about-label': 'About us',
    'about-title': 'Your Partner in Natural Health',
    'about-description': 'At Natural Herbal Clinic, we blend traditional African herbal wisdom with modern wellness practices to provide holistic healing solutions.',
    
    // Services Section
    'services-label': 'Our Services',
    'services-title': 'Natural Healing Solutions',
    'services-intro': 'Discover our comprehensive range of herbal treatments and wellness services.',
    
    // Testimonials
    'testimonials-title': 'Testimonials',
    'testimonials-subtitle': 'What Our Clients Say',
    'testimonials-description': 'Real stories from people who have experienced natural healing.',
    
    // Appointment Booking
    'appointment-title': 'Book Appointment',
    'appointment-heading': 'Schedule Your Consultation',
    'appointment-description': 'Take the first step towards natural healing. Book your personalized consultation today.',
    'appointment-confirmation': "We'll contact you within 24 hours to confirm your appointment.",
    
    // Form Labels
    'form-label-name': 'Full Name',
    'form-label-email': 'Email',
    'form-label-phone': 'Phone Number',
    'form-label-service': 'Service',
    'form-label-date': 'Date',
    'form-label-time': 'Time',
    'form-label-additional': 'Additional Information',
    
    // Form Placeholders
    'form-placeholder-name': 'Enter your full name',
    'form-placeholder-email': 'your@email.com',
    'form-placeholder-phone': '+255 XXX XXX XXX',
    'form-placeholder-time': 'Select time',
    'form-placeholder-additional': 'Additional Information',
    
    // Contact Section
    'contact-prelink': 'Get In Touch',
    'contact-title': 'Contact Us',
    'contact-lead': 'Have questions? We are here to help you on your journey to natural wellness.',
    'visit-title': 'Visit Our Clinic',
    
    // Contact Form
    'form-title': 'Send Us a Message',
    'form-subtitle': 'Fill the form below and we will reply as soon as possible.',
    'contact-form-name': 'Name',
    'contact-form-email': 'Email',
    'contact-form-phone': 'Phone',
    'contact-form-subject': 'Subject',
    'contact-form-message': 'Message',
    'contact-form-name-placeholder': 'Full name',
    'contact-form-email-placeholder': 'you@example.com',
    'contact-form-phone-placeholder': '+255 xxx xxx xxx',
    'contact-form-subject-placeholder': 'Reason for contact',
    'contact-form-message-placeholder': 'Write your message here'
  },
  
  sw: {
    // Navigation
    'nav-home': 'Nyumbani',
    'nav-about': 'Kutuhusu',
    'nav-services': 'Huduma',
    'nav-products': 'Bidhaa',
    'nav-testimonials': 'Ushuhuda',
    'nav-contact': 'Wasiliana',
    
    // Buttons
    'btn-call-now': 'Piga Simu',
    'btn-book-appointment': 'Ratibu Miadi',
    'btn-book-consultation': 'Ratibu Ushauri',
    'btn-explore-products': 'Chunguza Bidhaa',
    'btn-book-appointment-submit': 'Ratibu Miadi',
    'btn-send-message': 'Tuma Ujumbe',
    
    // Hero Section
    'hero-subtitle': 'Suluhisho za Uponyaji wa Asili',
    'hero-title': 'Karibu Natural Herbal<br>Clinic',
    'hero-description': 'Dawa za asili za Kiafrika zinakutana na ustawi wa kisasa.<br />Furahia uponyaji wa asili kwa maisha yenye afya zaidi.',
    
    // Features
    'feature-natural': '100% ya Asili',
    'feature-expert': 'Wataalamu wa Mimea',
    'feature-proven': 'Matokeo ya Uhakika',
    
    // About Section
    'about-label': 'Kutuhusu',
    'about-title': 'Mshirika Wako katika Afya ya Asili',
    'about-description': 'Katika Natural Herbal Clinic, tunachanganya hekima za jadi za mimea ya Kiafrika na mazoea ya kisasa ya ustawi ili kutoa suluhisho za uponyaji wa jumla.',
    
    // Services Section
    'services-label': 'Huduma Zetu',
    'services-title': 'Suluhisho za Uponyaji wa Asili',
    'services-intro': 'Gundua mfumo wetu mkuu wa matibabu ya mimea na huduma za ustawi.',
    
    // Testimonials
    'testimonials-title': 'Ushuhuda',
    'testimonials-subtitle': 'Wateja Wetu Wanasema Nini',
    'testimonials-description': 'Hadithi za kweli kutoka kwa watu waliopata uponyaji wa asili.',
    
    // Appointment Booking
    'appointment-title': 'Ratibu Miadi',
    'appointment-heading': 'Panga Ushauri Wako',
    'appointment-description': 'Chukua hatua ya kwanza kuelekea uponyaji wa asili. Ratibu ushauri wako wa kibinafsi leo.',
    'appointment-confirmation': 'Tutawasiliana nawe ndani ya masaa 24 ili kuthibitisha miadi yako.',
    
    // Form Labels
    'form-label-name': 'Jina Kamili',
    'form-label-email': 'Barua Pepe',
    'form-label-phone': 'Nambari ya Simu',
    'form-label-service': 'Huduma',
    'form-label-date': 'Tarehe',
    'form-label-time': 'Muda',
    'form-label-additional': 'Maelezo ya Ziada',
    
    // Form Placeholders
    'form-placeholder-name': 'Ingiza jina lako kamili',
    'form-placeholder-email': 'barua@pepe.com',
    'form-placeholder-phone': '+255 XXX XXX XXX',
    'form-placeholder-time': 'Chagua muda',
    'form-placeholder-additional': 'Maelezo ya Ziada',
    
    // Contact Section
    'contact-prelink': 'Wasiliana',
    'contact-title': 'Wasiliana Nasi',
    'contact-lead': 'Una maswali? Tuko hapa kukusaidia katika safari yako ya ustawi wa asili.',
    'visit-title': 'Tembelea Kliniki Yetu',
    
    // Contact Form
    'form-title': 'Tutumie Ujumbe',
    'form-subtitle': 'Jaza fomu iliyo hapa chini na tutajibu haraka iwezekanavyo.',
    'contact-form-name': 'Jina',
    'contact-form-email': 'Barua Pepe',
    'contact-form-phone': 'Simu',
    'contact-form-subject': 'Mada',
    'contact-form-message': 'Ujumbe',
    'contact-form-name-placeholder': 'Jina kamili',
    'contact-form-email-placeholder': 'wewe@mfano.com',
    'contact-form-phone-placeholder': '+255 xxx xxx xxx',
    'contact-form-subject-placeholder': 'Sababu ya kuwasiliana',
    'contact-form-message-placeholder': 'Andika ujumbe wako hapa'
  }
};

// Current language state
let currentLanguage = localStorage.getItem('preferred-language') || 'en';

// Initialize language system
function initializeI18n() {
  // Set initial language buttons state
  updateLanguageButtons();
  
  // Apply saved language
  translatePage(currentLanguage);
  
  // Add event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
      const newLang = this.getAttribute('data-lang');
      switchLanguage(newLang);
    });
  });
}

// Update language button states
function updateLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(button => {
    if (button.getAttribute('data-lang') === currentLanguage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Switch language function
function switchLanguage(lang) {
  if (lang !== currentLanguage && translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    updateLanguageButtons();
    translatePage(lang);
  }
}

// Translate page content
function translatePage(lang) {
  const langData = translations[lang];
  
  // Translate elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (langData[key]) {
      element.innerHTML = langData[key];
    }
  });
  
  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (langData[key]) {
      element.setAttribute('placeholder', langData[key]);
    }
  });
}

// Initialize i18n system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit to ensure all elements are rendered
  setTimeout(() => {
    initializeI18n();
  }, 100);
});

