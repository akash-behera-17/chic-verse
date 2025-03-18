
/*
* Elegance Salon Website JavaScript
* A beginner-friendly JavaScript file for a salon website
*/

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in the footer
  setCurrentYear();
  
  // Handle mobile menu toggle
  setupMobileMenu();
  
  // Add scroll event to handle header appearance
  handleHeaderScroll();
  
  // Setup animate on scroll
  setupScrollAnimation();
  
  // Setup contact form submission
  setupContactForm();
  
  // Setup back to top button
  setupBackToTop();
  
  // Setup FAQ toggles
  setupFaqToggles();
  
  // Setup testimonial slider
  setupTestimonialSlider();
  
  // Setup tabs navigation (for services page)
  setupTabsNavigation();
  
  // Setup gallery filters (for gallery page)
  setupGalleryFilters();
});

// Set the current year in the footer copyright
function setCurrentYear() {
  const yearElements = document.querySelectorAll('#currentYear');
  const currentYear = new Date().getFullYear();
  
  yearElements.forEach(element => {
    element.textContent = currentYear;
  });
}

// Handle mobile menu toggle
function setupMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = mobileToggle.querySelector('i');
      if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileToggle.contains(event.target) && !mobileMenu.contains(event.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
}

// Handle header appearance on scroll
function handleHeaderScroll() {
  const header = document.getElementById('header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.padding = '15px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
      }
    });
  }
}

// Setup animate on scroll functionality
function setupScrollAnimation() {
  const animatedElements = document.querySelectorAll('.section-heading, .service-card, .about-image, .about-content, .gallery-item, .testimonial-card, .team-card, .value-card');
  
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation classes based on element type
        if (entry.target.classList.contains('section-heading')) {
          entry.target.classList.add('slide-in-top');
        } else if (entry.target.classList.contains('service-card') || 
                  entry.target.classList.contains('testimonial-card') ||
                  entry.target.classList.contains('team-card') ||
                  entry.target.classList.contains('value-card')) {
          entry.target.classList.add('fade-in');
          // Add a small delay based on the element's index
          const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1;
          entry.target.style.animationDelay = `${delay}s`;
        } else if (entry.target.classList.contains('about-image')) {
          entry.target.classList.add('slide-in-left');
        } else if (entry.target.classList.contains('about-content')) {
          entry.target.classList.add('slide-in-right');
        } else if (entry.target.classList.contains('gallery-item')) {
          entry.target.classList.add('scale-in');
          // Add a small delay based on the element's index
          const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1;
          entry.target.style.animationDelay = `${delay}s`;
        }
        
        // Stop observing once the animation has been applied
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is in the viewport
    rootMargin: '0px 0px -50px 0px' // Adjust the trigger point (negative value means "before it comes into view")
  });
  
  // Start observing the elements
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Setup contact form submission with validation
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form inputs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Simple validation
      if (name === '' || email === '' || message === '') {
        showToast('Error', 'Please fill out all required fields', 'error');
        return;
      }
      
      // Simple email validation
      if (!validateEmail(email)) {
        showToast('Error', 'Please enter a valid email address', 'error');
        return;
      }
      
      // In a real application, you would send the data to a server here
      // For now, we'll just simulate a successful submission
      
      // Show loading state (you could add a loading spinner here)
      const submitButton = contactForm.querySelector('button[type="submit"]');
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // Simulate server delay
      setTimeout(function() {
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
        
        // Show success message
        showToast('Success', 'Your message has been sent successfully!', 'success');
      }, 1500);
    });
  }
}

// Setup back to top button
function setupBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  
  if (backToTopButton) {
    // Show button when user scrolls down 300px
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Setup FAQ toggles
function setupFaqToggles() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      // Close all other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current FAQ
      item.classList.toggle('active');
    });
  });
}

// Setup testimonial slider
function setupTestimonialSlider() {
  const slider = document.getElementById('testimonialsSlider');
  
  if (slider) {
    const testimonials = slider.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevButton = document.getElementById('prevTestimonial');
    const nextButton = document.getElementById('nextTestimonial');
    
    let currentIndex = 0;
    
    // Create dots
    if (dotsContainer) {
      testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', function() {
          goToSlide(index);
        });
        
        dotsContainer.appendChild(dot);
      });
    }
    
    // Set up button click events
    if (prevButton) {
      prevButton.addEventListener('click', function() {
        goToSlide(currentIndex - 1);
      });
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', function() {
        goToSlide(currentIndex + 1);
      });
    }
    
    // Function to go to a specific slide
    function goToSlide(index) {
      // Handle looping
      if (index < 0) {
        index = testimonials.length - 1;
      } else if (index >= testimonials.length) {
        index = 0;
      }
      
      currentIndex = index;
      
      // Move the slider
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
          if (i === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    }
    
    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left (next)
        goToSlide(currentIndex + 1);
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right (prev)
        goToSlide(currentIndex - 1);
      }
    }
    
    // Auto advance slides every 5 seconds
    setInterval(function() {
      goToSlide(currentIndex + 1);
    }, 5000);
  }
}

// Setup tabs navigation
function setupTabsNavigation() {
  const tabsContainer = document.getElementById('servicesTabs');
  
  if (tabsContainer) {
    const tabButtons = tabsContainer.querySelectorAll('.tab-button');
    const tabPanes = tabsContainer.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to current button
        button.classList.add('active');
        
        // Show corresponding tab pane
        const tabId = button.getAttribute('data-tab');
        const tabPane = document.getElementById(tabId);
        if (tabPane) {
          tabPane.classList.add('active');
        }
      });
    });
    
    // Handle hash links (e.g., services.html#haircuts)
    if (window.location.hash) {
      const tabId = window.location.hash.substring(1);
      const targetButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
      
      if (targetButton) {
        // Simulate click on the target tab
        targetButton.click();
        
        // Scroll to the section
        setTimeout(function() {
          const tabsOffset = tabsContainer.offsetTop - 100;
          window.scrollTo({
            top: tabsOffset,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }
}

// Setup gallery filters
function setupGalleryFilters() {
  const galleryFilter = document.getElementById('galleryFilter');
  const galleryGrid = document.getElementById('galleryGrid');
  
  if (galleryFilter && galleryGrid) {
    const filterButtons = galleryFilter.querySelectorAll('button');
    const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
    
    // Show loading spinner
    const loadingIndicator = document.getElementById('gallery-loading');
    if (loadingIndicator) {
      // Hide loading spinner after images are loaded
      window.addEventListener('load', function() {
        loadingIndicator.style.display = 'none';
        galleryGrid.style.display = 'grid';
      });
    }
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // Filter gallery items
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
}

// Email validation helper function
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Show toast notification
function showToast(title, message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = toast.querySelector('.toast-content i');
  
  // Set content
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  
  // Set icon based on type
  if (type === 'success') {
    toastIcon.className = 'fas fa-check-circle';
    toastIcon.style.color = '#4caf50';
  } else if (type === 'error') {
    toastIcon.className = 'fas fa-times-circle';
    toastIcon.style.color = '#f44336';
  } else if (type === 'warning') {
    toastIcon.className = 'fas fa-exclamation-circle';
    toastIcon.style.color = '#ff9800';
  } else if (type === 'info') {
    toastIcon.className = 'fas fa-info-circle';
    toastIcon.style.color = '#2196f3';
  }
  
  // Show the toast
  toast.classList.add('active');
  
  // Auto close after 4 seconds (matching the progress animation)
  const toastTimeout = setTimeout(function() {
    toast.classList.remove('active');
  }, 4000);
  
  // Close on click
  const toastClose = document.getElementById('toastClose');
  if (toastClose) {
    toastClose.addEventListener('click', function() {
      toast.classList.remove('active');
      clearTimeout(toastTimeout);
    });
  }
}

// Handle anchor links smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Skip if the link is inside a tab navigation
    if (this.closest('.tabs-navigation')) return;
    
    const targetId = this.getAttribute('href').substring(1);
    
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Calculate header height for offset
        const headerHeight = document.getElementById('header').offsetHeight;
        
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight - 20,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          const mobileToggle = document.getElementById('mobileToggle');
          const icon = mobileToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    }
  });
});
