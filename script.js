/* ============================================
   CANNED AIR - JAVASCRIPT
   Premium E-commerce Landing Page
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all functionality
  initMobileMenu();
  initCart();
  initCartModal();
  initSmoothScroll();
  initSubscribeForm();
  initActiveNavigation();
  initScrollReveal();
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
let cart = [];

function initCart() {
  const cartCountEl = document.querySelector('.cart-count');
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  
  // Initialize cart from localStorage
  cart = JSON.parse(localStorage.getItem('cannedAirCart')) || [];
  updateCartCount();
  updateCartModal();
  
  // Add to cart functionality
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.dataset.product;
      const price = parseFloat(btn.dataset.price);
      
      // Add item to cart
      cart.push({ product, price, id: Date.now() });
      saveCart();
      updateCartCount();
      updateCartModal();
      
      // Visual feedback with animation
      btn.classList.add('adding');
      const originalText = btn.textContent;
      btn.textContent = 'Added!';
      btn.disabled = true;
      
      // Bump animation on cart count
      if (cartCountEl) {
        cartCountEl.classList.remove('bump');
        void cartCountEl.offsetWidth; // Trigger reflow
        cartCountEl.classList.add('bump');
      }
      
      setTimeout(() => {
        btn.classList.remove('adding');
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

function saveCart() {
  localStorage.setItem('cannedAirCart', JSON.stringify(cart));
}

/* ============================================
   CART MODAL
   ============================================ */
function initCartModal() {
  const modal = document.getElementById('cart-modal');
  const cartBtn = document.querySelector('.cart-btn');
  const closeBtn = document.querySelector('.cart-close-btn');
  const backdrop = document.querySelector('.cart-modal-backdrop');
  
  if (!modal || !cartBtn) return;
  
  // Open modal
  cartBtn.addEventListener('click', () => {
    openCartModal();
  });
  
  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', closeCartModal);
  }
  
  if (backdrop) {
    backdrop.addEventListener('click', closeCartModal);
  }
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCartModal();
    }
  });
  
  function openCartModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  function closeCartModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function updateCartModal() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total-price');
  
  if (!cartItemsEl) return;
  
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    if (cartTotalEl) cartTotalEl.textContent = '$0.00';
    return;
  }
  
  // Render cart items
  cartItemsEl.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.product}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
      </div>
      <button class="cart-item-remove" data-index="${index}" aria-label="Remove ${item.product} from cart">
        Remove
      </button>
    </div>
  `).join('');
  
  // Add remove functionality
  const removeButtons = cartItemsEl.querySelectorAll('.cart-item-remove');
  removeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      removeFromCart(index);
    });
  });
  
  // Update total
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  if (cartTotalEl) cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartModal();
  
  // Update cart count
  const cartCountEl = document.querySelector('.cart-count');
  if (cartCountEl) {
    cartCountEl.textContent = cart.length;
    cartCountEl.style.display = cart.length > 0 ? 'flex' : 'none';
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
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
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
      btn.classList.add('adding');
      btn.disabled = true;
      input.value = '';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('adding');
        btn.disabled = false;
      }, 2500);
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

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length === 0) return;
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  revealElements.forEach(el => {
    observer.observe(el);
  });
}
