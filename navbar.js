/* Navigation Bar Component */
import { getLang, setLang, t } from '../state/i18n.js';
import { getTheme, toggleTheme } from '../state/theme.js';
import { getCartCount } from '../state/cart.js';

export function renderNavbar() {
  const lang = getLang();
  const theme = getTheme();
  const cartCount = getCartCount();

  const navHtml = `
    <nav class="navbar">
      <div class="container nav-container">
        <!-- Logo -->
        <a href="#home" class="brand-logo clickable">
          <img src="assets/logo/logo.svg" alt="Meat House Logo" id="navLogo">
          <span>MEAT HOUSE</span>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links">
          <li><a href="#home" class="nav-link" data-route="home">${t('nav.home')}</a></li>
          <li><a href="#products" class="nav-link" data-route="products">${t('nav.products')}</a></li>
          <li><a href="#categories" class="nav-link" data-route="categories">${t('nav.categories')}</a></li>
          <li><a href="#offers" class="nav-link" data-route="offers">${t('nav.offers')}</a></li>
          <li><a href="#about" class="nav-link" data-route="about">${t('nav.about')}</a></li>
          <li><a href="#contact" class="nav-link" data-route="contact">${t('nav.contact')}</a></li>
        </ul>

        <!-- Right Side Actions -->
        <div class="nav-actions">
          <!-- Quick Search Button -->
          <button class="icon-btn clickable" id="searchBtn" title="${t('nav.searchPlaceholder')}">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>

          <!-- Language Switcher -->
          <button class="icon-btn clickable" id="langToggleBtn" title="Switch Language">
            <span style="font-weight: 800; font-size: 0.85rem;">${lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          <!-- Theme Toggle (Light/Dark) -->
          <button class="icon-btn clickable" id="themeToggleBtn" title="Toggle Theme">
            ${theme === 'dark' ? `
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ` : `
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            `}
          </button>

          <!-- Cart Icon -->
          <button class="icon-btn clickable" id="cartOpenBtn" title="${t('nav.cart')}">
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            <span class="cart-badge" id="cartCountBadge">${cartCount}</span>
          </button>

          <!-- Mobile Hamburger -->
          <button class="icon-btn mobile-menu-btn clickable" id="mobileMenuBtn">
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Drawer Navigation -->
    <div class="drawer-overlay" id="mobileDrawerOverlay"></div>
    <div class="mobile-drawer" id="mobileDrawer">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="brand-logo">
          <img src="assets/logo/logo.svg" alt="Meat House Logo" style="height: 40px;">
          <span>MEAT HOUSE</span>
        </div>
        <button class="icon-btn clickable" id="closeMobileDrawerBtn">✕</button>
      </div>

      <ul style="list-style: none; display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1rem;">
        <li><a href="#home" class="nav-link mobile-nav-link" data-route="home">${t('nav.home')}</a></li>
        <li><a href="#products" class="nav-link mobile-nav-link" data-route="products">${t('nav.products')}</a></li>
        <li><a href="#categories" class="nav-link mobile-nav-link" data-route="categories">${t('nav.categories')}</a></li>
        <li><a href="#offers" class="nav-link mobile-nav-link" data-route="offers">${t('nav.offers')}</a></li>
        <li><a href="#about" class="nav-link mobile-nav-link" data-route="about">${t('nav.about')}</a></li>
        <li><a href="#contact" class="nav-link mobile-nav-link" data-route="contact">${t('nav.contact')}</a></li>
      </ul>
    </div>
  `;

  document.getElementById('appNavbar').innerHTML = navHtml;
  bindNavbarEvents();
}

function bindNavbarEvents() {
  // Language switcher
  document.getElementById('langToggleBtn')?.addEventListener('click', () => {
    const current = getLang();
    setLang(current === 'ar' ? 'en' : 'ar');
  });

  // Theme switcher
  document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
    toggleTheme();
  });

  // Cart drawer open
  document.getElementById('cartOpenBtn')?.addEventListener('click', () => {
    document.getElementById('cartDrawer')?.classList.add('open');
    document.getElementById('cartDrawerOverlay')?.classList.add('active');
  });

  // Mobile menu toggle
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');

  document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    drawer?.classList.add('open');
    overlay?.classList.add('active');
  });

  document.getElementById('closeMobileDrawerBtn')?.addEventListener('click', () => {
    drawer?.classList.remove('open');
    overlay?.classList.remove('active');
  });

  overlay?.addEventListener('click', () => {
    drawer?.classList.remove('open');
    overlay?.classList.remove('active');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer?.classList.remove('open');
      overlay?.classList.remove('active');
    });
  });

  // Search button
  document.getElementById('searchBtn')?.addEventListener('click', () => {
    window.location.hash = '#products';
    setTimeout(() => {
      document.getElementById('productSearchInput')?.focus();
    }, 200);
  });
}
