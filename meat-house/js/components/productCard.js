/* Product Card UI Component - Dynamic Weight Pricing */
import { getLang, t } from '../state/i18n.js';
import { getWeightMultiplier } from '../state/cart.js';

export function createProductCard(product) {
  const lang = getLang();
  const name = typeof product.name === 'object' ? product.name[lang] : product.name;
  const desc = typeof product.desc === 'object' ? product.desc[lang] : product.desc;
  const badgeText = product.badge ? (typeof product.badge === 'object' ? product.badge[lang] : product.badge) : null;
  
  const basePrice = product.price; // Price per 1 KG
  const unitLabel = lang === 'ar' ? 'ر.س / كيلو' : 'SAR / KG';

  return `
    <div class="product-card clickable" data-product-id="${product.id}">
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${name}" class="product-img" loading="lazy">
        
        <!-- Official Meat House Subtle Stamp -->
        <div class="product-brand-stamp" title="Meat House Official Quality">
          <img src="assets/logo/logo.svg" alt="Meat House Stamp">
        </div>

        ${badgeText ? `<span class="product-badge">${badgeText}</span>` : ''}
      </div>

      <div class="product-info">
        <h3 class="product-name">${name}</h3>
        <p class="product-desc">${desc}</p>

        <!-- Weight Selection Pills: 500g | 1 KG | 2 KG -->
        <div class="weight-selector" data-base-price="${basePrice}">
          <button class="weight-opt clickable" data-weight="500g" data-mult="0.5">500g</button>
          <button class="weight-opt active clickable" data-weight="1 KG" data-mult="1.0">1 KG</button>
          <button class="weight-opt clickable" data-weight="2 KG" data-mult="2.0">2 KG</button>
        </div>

        <div class="product-bottom">
          <div>
            <span class="product-price" data-price-el="${product.id}">${basePrice}</span>
            <span class="product-currency" data-unit-el="${product.id}">${unitLabel}</span>
          </div>

          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary quick-view-btn clickable" data-id="${product.id}" title="${t('product.quickView')}" style="padding: 8px 12px; font-size: 0.85rem;">
              👁️
            </button>
            <button class="btn btn-primary add-cart-btn clickable" data-id="${product.id}" style="padding: 8px 16px; font-size: 0.9rem;">
              🛒 ${t('product.addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function bindProductCardEvents(containerElement, openModalCallback) {
  if (!containerElement) return;

  // Weight selector pills - Update price dynamically without closing anything!
  containerElement.querySelectorAll('.weight-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      const card = btn.closest('.product-card');
      const selector = btn.closest('.weight-selector');
      const productId = card.dataset.productId;
      const basePrice = parseFloat(selector.dataset.basePrice || 60);
      const mult = parseFloat(btn.dataset.mult || 1.0);
      const lang = getLang();

      selector.querySelectorAll('.weight-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const priceDisplay = card.querySelector(`[data-price-el="${productId}"]`);
      const unitDisplay = card.querySelector(`[data-unit-el="${productId}"]`);

      if (priceDisplay) {
        const calculatedPrice = basePrice * mult;
        priceDisplay.innerText = calculatedPrice;
      }

      if (unitDisplay) {
        if (mult === 1.0) {
          unitDisplay.innerText = lang === 'ar' ? 'ر.س / كيلو' : 'SAR / KG';
        } else {
          unitDisplay.innerText = lang === 'ar' ? 'ر.س' : 'SAR';
        }
      }
    });
  });

  // Add to cart click
  containerElement.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const productId = btn.dataset.id;
      const card = btn.closest('.product-card');
      const activeWeightBtn = card.querySelector('.weight-opt.active');
      const weight = activeWeightBtn ? activeWeightBtn.dataset.weight : '1 KG';

      window.dispatchEvent(new CustomEvent('addToCartTrigger', {
        detail: { productId, weight }
      }));

      btn.style.transform = 'scale(0.92)';
      setTimeout(() => btn.style.transform = 'scale(1)', 150);
    });
  });

  // Quick View Click
  containerElement.querySelectorAll('.quick-view-btn, .product-img-wrapper').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const card = btn.closest('.product-card');
      const productId = card.dataset.productId;
      if (openModalCallback) openModalCallback(productId);
    });
  });
}
