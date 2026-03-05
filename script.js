/* ============================================
   CANNED AIR - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all functionality
  initMobileMenu();
  initCart();
  initSmoothScroll();
  initSubscribeForm();
  initActiveNavigation();
});

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  
  if (!menuBtn || !nav) return;
  
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });
  
  // Close menu when clicking a nav link
  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      menuBtn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
    }
  });
}

/* ============================================
   SHOPPING CART
   ============================================ */
function initCart() {
  const cartCountEl = document.querySelector('.cart-count');
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  
  // Initialize cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cannedAirCart')) || [];
  updateCartCount();
  
  // Add to cart functionality
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.dataset.product;
      const price = parseFloat(btn.dataset.price);
      
      // Add item to cart
      cart.push({ product, price, id: Date.now() });
      localStorage.setItem('cannedAirCart', JSON.stringify(cart));
      updateCartCount();
      
      // Visual feedback
      const originalText = btn.textContent;
      btn.textContent = 'Added!';
      btn.disabled = true;
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1500);
    });
  });
  
  function updateCartCount() {
    if (cartCountEl) {
      cartCountEl.textContent = cart.length;
      cartCountEl.style.display = cart.length > 0 ? 'flex' : 'none';
    }
  }
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   SUBSCRIBE FORM
   ============================================ */
function initSubscribeForm() {
  const form = document.getElementById('subscribe-form');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = form.querySelector('.subscribe-input');
    const email = input.value;
    
    if (email) {
      // Show success feedback
      const btn = form.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      input.value = '';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 2000);
    }
  });
}

/* ============================================
   ACTIVE NAVIGATION ON SCROLL
   ============================================ */
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const observerOptions = {
    rootMargin: '-20% 0px -80% 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}
