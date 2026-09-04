/* Shopping Cart Side Drawer Component - Safwa Delivery Fee & Dynamic Item Breakdown */
import { getLang, t } from '../state/i18n.js';
import { getCart, removeFromCart, updateQty, getCartSubtotal, getDeliveryFee, getCartTotal, formatWhatsAppMessage } from '../state/cart.js';

export function renderCartDrawer() {
  const lang = getLang();
  const cart = getCart();
  const subtotal = getCartSubtotal();
  const delivery = getDeliveryFee();
  const total = getCartTotal();

  const drawerHtml = `
    <div class="drawer-overlay" id="cartDrawerOverlay"></div>
    <div class="cart-drawer" id="cartDrawer">
      <div class="cart-header">
        <h3 style="font-size: 1.25rem; font-weight: 800;">🛒 ${t('cart.title')}</h3>
        <button class="icon-btn clickable" id="closeCartDrawerBtn">✕</button>
      </div>

      <div class="cart-body">
        ${cart.length === 0 ? `
          <div style="text-align: center; margin: auto 0; padding: 2rem; color: var(--text-muted);">
            <div style="font-size: 3.5rem; margin-bottom: 1rem;">🥩</div>
            <p style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">${t('cart.empty')}</p>
            <p style="font-size: 0.9rem;">${lang === 'ar' ? 'تصفح منتجاتنا الطازجة وأضف رغباتك لسلتك' : 'Explore our fresh meats & add your items'}</p>
          </div>
        ` : `
          <!-- Safwa Delivery Banner -->
          <div class="safwa-delivery-badge">
            <span>🚚</span>
            <span>${lang === 'ar' ? 'رسوم التوصيل داخل جميع مناطق صفوى 5 ريال فقط' : 'Delivery within all areas of Safwa: Only 5 SAR'}</span>
          </div>

          ${cart.map(item => {
            const name = typeof item.name === 'object' ? item.name[lang] : item.name;
            const itemTotal = item.itemUnitPrice * item.qty;
            return `
              <div class="cart-item">
                <img src="${item.image}" alt="${name}" class="cart-item-img">
                <div class="cart-item-info">
                  <h4 style="font-size: 0.95rem; font-weight: 700;">${name}</h4>
                  <div style="font-size: 0.8rem; color: var(--text-muted); margin: 2px 0;">
                    ${lang === 'ar' ? `السعر للكيلو: ${item.basePrice} ر.س | الوزن: ${item.weight}` : `Rate: ${item.basePrice} SAR/KG | Weight: ${item.weight}`}
                  </div>
                  <div style="font-weight: 800; color: var(--accent-red); font-size: 0.95rem;">${itemTotal} ${t('product.sar')}</div>
                </div>

                <div style="display: flex; align-items: center; gap: 6px; background-color: var(--bg-secondary); padding: 4px 8px; border-radius: var(--radius-sm);">
                  <button class="cart-qty-btn clickable" data-id="${item.id}" data-weight="${item.weight}" data-delta="-1" style="font-weight: 900; width: 22px; height: 22px;">-</button>
                  <span style="font-weight: 800; font-size: 0.9rem; min-width: 18px; text-align: center;">${item.qty}</span>
                  <button class="cart-qty-btn clickable" data-id="${item.id}" data-weight="${item.weight}" data-delta="1" style="font-weight: 900; width: 22px; height: 22px;">+</button>
                </div>

                <button class="cart-remove-btn clickable" data-id="${item.id}" data-weight="${item.weight}" style="color: var(--text-muted); font-size: 1.1rem; padding: 4px;">🗑️</button>
              </div>
            `;
          }).join('')}
        `}
      </div>

      ${cart.length > 0 ? `
        <div class="cart-footer">
          <div class="cart-row">
            <span>${t('cart.subtotal')}</span>
            <span>${subtotal} ${t('product.sar')}</span>
          </div>
          <div class="cart-row" style="font-size: 0.9rem; color: var(--text-muted);">
            <span>${lang === 'ar' ? 'توصيل صفوى (Safwa):' : 'Safwa Delivery:'}</span>
            <span>${delivery} ${t('product.sar')}</span>
          </div>
          <div class="cart-row total">
            <span>${t('cart.total')}</span>
            <span>${total} ${t('product.sar')}</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 1.25rem;">
            <a href="https://wa.me/966568148422?text=${formatWhatsAppMessage()}" target="_blank" class="btn btn-whatsapp clickable" style="width: 100%;">
              📱 ${t('product.orderWhatsApp')}
            </a>
            <a href="#checkout" class="btn btn-primary clickable" id="cartToCheckoutBtn" style="width: 100%;">
              💳 ${t('cart.checkout')}
            </a>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  document.getElementById('appCartDrawer').innerHTML = drawerHtml;
  bindCartDrawerEvents();
}

function bindCartDrawerEvents() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');

  document.getElementById('closeCartDrawerBtn')?.addEventListener('click', () => {
    drawer?.classList.remove('open');
    overlay?.classList.remove('active');
  });

  overlay?.addEventListener('click', () => {
    drawer?.classList.remove('open');
    overlay?.classList.remove('active');
  });

  document.getElementById('cartToCheckoutBtn')?.addEventListener('click', () => {
    drawer?.classList.remove('open');
    overlay?.classList.remove('active');
  });

  document.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const weight = btn.dataset.weight;
      const delta = parseInt(btn.dataset.delta);
      updateQty(id, weight, delta);
    });
  });

  document.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const weight = btn.dataset.weight;
      removeFromCart(id, weight);
    });
  });
}
