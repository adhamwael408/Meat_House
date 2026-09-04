/* Main Web Application Controller */
import { initCustomCursor } from './components/cursor.js';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderCartDrawer } from './components/cartDrawer.js';
import { getLang } from './state/i18n.js';
import { getCartCount, addToCart } from './state/cart.js';
import { products } from './data/products.js';

// Import Pages
import { renderHomePage } from './pages/homePage.js';
import { renderProductsPage } from './pages/productsPage.js';
import { renderProductDetailModal } from './pages/productDetailPage.js';
import { renderOffersPage } from './pages/offersPage.js';
import { renderCheckoutPage } from './pages/checkoutPage.js';
import { renderAboutPage } from './pages/aboutPage.js';
import { renderContactPage } from './pages/contactPage.js';

// Router & State Handler
export function initApp() {
  // 1. Custom Butcher Knife Cursor
  initCustomCursor();

  // 2. Render Header Navbar & Footer
  renderNavbar();
  renderFooter();
  renderCartDrawer();

  // 3. Floating WhatsApp Pulse Button
  renderFloatingWhatsApp();

  // 4. Hash Router
  window.addEventListener('hashchange', handleRoute);
  handleRoute();

  // 5. Global Custom Event Listeners
  window.addEventListener('languageChange', () => {
    renderNavbar();
    renderFooter();
    renderCartDrawer();
    handleRoute();
  });

  window.addEventListener('themeChange', () => {
    renderNavbar();
  });

  window.addEventListener('cartUpdate', () => {
    const badge = document.getElementById('cartCountBadge');
    if (badge) badge.innerText = getCartCount();
    renderCartDrawer();
  });

  window.addEventListener('addToCartTrigger', (e) => {
    const { productId, weight } = e.detail;
    const prod = products.find(p => p.id === productId);
    if (prod) {
      addToCart(prod, weight, 1);
      // Open Cart Drawer
      document.getElementById('cartDrawer')?.classList.add('open');
      document.getElementById('cartDrawerOverlay')?.classList.add('active');
    }
  });
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const mainContent = document.getElementById('appContent');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active navbar link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const route = link.dataset.route;
    if (hash.startsWith(`#${route}`)) {
      link.classList.add('active');
    }
  });

  if (hash === '#home' || hash === '') {
    renderHomePage(mainContent, openProductModal);
  } else if (hash.startsWith('#products')) {
    const urlParams = new URLSearchParams(hash.split('?')[1] || '');
    const cat = urlParams.get('cat');
    renderProductsPage(mainContent, openProductModal, cat);
  } else if (hash === '#categories') {
    renderHomePage(mainContent, openProductModal);
    setTimeout(() => {
      document.querySelector('.category-grid')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else if (hash.startsWith('#product/')) {
    const productId = hash.replace('#product/', '');
    renderHomePage(mainContent, openProductModal);
    openProductModal(productId);
  } else if (hash === '#offers') {
    renderOffersPage(mainContent);
  } else if (hash === '#checkout') {
    renderCheckoutPage(mainContent);
  } else if (hash === '#about') {
    renderAboutPage(mainContent);
  } else if (hash === '#contact') {
    renderContactPage(mainContent);
  } else {
    renderHomePage(mainContent, openProductModal);
  }
}

function openProductModal(productId) {
  renderProductDetailModal(productId, () => {
    // If route was #product/:id, reset back
    if (window.location.hash.startsWith('#product/')) {
      window.location.hash = '#products';
    }
  });
}

function renderFloatingWhatsApp() {
  const existing = document.getElementById('whatsappFloatBtn');
  if (existing) return;

  const btn = document.createElement('a');
  btn.id = 'whatsappFloatBtn';
  btn.href = 'https://wa.me/966568148422';
  btn.target = '_blank';
  btn.className = 'whatsapp-float clickable';
  btn.title = 'Contact Meat House on WhatsApp';
  btn.innerHTML = `
    <svg width="34" height="34" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  `;
  document.body.appendChild(btn);
}

// Launch on DOM ready
document.addEventListener('DOMContentLoaded', initApp);
