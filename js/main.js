
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
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
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
