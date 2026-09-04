/* Product Detail Modal Component - Persistent & Dynamic Weight Calculation */
import { getLang, t } from '../state/i18n.js';
import { products } from '../data/products.js';
import { addToCart, getWeightMultiplier } from '../state/cart.js';

export function renderProductDetailModal(productId, onClose) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const lang = getLang();
  const name = typeof product.name === 'object' ? product.name[lang] : product.name;
  const desc = typeof product.desc === 'object' ? product.desc[lang] : product.desc;
  
  const basePricePerKg = product.price; // Base price for 1 KG
  let currentWeight = '1 KG';
  let currentQty = 1;

  function calculateCalculatedPrice() {
    const mult = getWeightMultiplier(currentWeight);
    return basePricePerKg * mult * currentQty;
  }

  const modalHtml = `
    <div class="modal-backdrop active" id="productDetailModalBackdrop">
      <div class="modal-card" id="productDetailModalCard">
        <button class="icon-btn clickable modal-close-btn" id="modalCloseBtn">✕</button>

        <div style="display: flex; flex-wrap: wrap;">
          <!-- Product Image View -->
          <div style="flex: 1; min-width: 280px; max-width: 400px; background-color: var(--bg-secondary); position: relative; min-height: 350px;">
            <img src="${product.image}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;">
            
            <div class="product-brand-stamp" style="top: 20px; right: 20px;">
              <img src="assets/logo/logo.svg" alt="Meat House Logo">
            </div>
          </div>

          <!-- Product Details Form -->
          <div style="flex: 1; min-width: 280px; padding: 2.5rem; display: flex; flex-direction: column;">
            <span style="font-size: 0.85rem; color: var(--accent-red); font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.4rem;">
              MEAT HOUSE OFFICIAL CUT
            </span>
            <h2 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 0.5rem;">${name}</h2>
            
            <!-- Base Price Per KG Badge -->
            <div style="font-size: 0.95rem; color: var(--text-muted); font-weight: 700; margin-bottom: 1rem;">
              ${lang === 'ar' ? `السعر الكلي: ${basePricePerKg} ر.س / كيلو` : `Base Price: ${basePricePerKg} SAR / KG`}
            </div>

            <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${desc}</p>

            <!-- Dynamic Calculated Price -->
            <div style="font-size: 2.4rem; font-weight: 900; color: var(--accent-red); margin-bottom: 1.5rem; display: flex; align-items: baseline; gap: 8px;">
              <span id="modalCalculatedPrice">${calculateCalculatedPrice()}</span>
              <span style="font-size: 1.1rem; font-weight: 600;" id="modalPriceLabel">${t('product.sar')}</span>
            </div>

            <!-- Weight Pills Selector: 500g | 1 KG | 2 KG -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: 700; margin-bottom: 0.5rem;">${t('product.selectWeight')}</label>
              <div class="weight-selector" id="modalWeightSelector">
                <button class="weight-opt clickable" data-weight="500g">500g</button>
                <button class="weight-opt active clickable" data-weight="1 KG">1 KG</button>
                <button class="weight-opt clickable" data-weight="2 KG">2 KG</button>
              </div>
            </div>

            <!-- Quantity Modifier -->
            <div style="margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem;">
              <label style="font-weight: 700;">${lang === 'ar' ? 'الكمية:' : 'Quantity:'}</label>
              <div style="display: flex; align-items: center; gap: 8px; background-color: var(--bg-secondary); padding: 6px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                <button class="clickable" id="modalQtyMinus" style="font-size: 1.2rem; font-weight: 900; width: 28px; height: 28px;">-</button>
                <span id="modalQtyVal" style="font-size: 1.1rem; font-weight: 800; min-width: 24px; text-align: center;">1</span>
                <button class="clickable" id="modalQtyPlus" style="font-size: 1.2rem; font-weight: 900; width: 28px; height: 28px;">+</button>
              </div>
            </div>

            <!-- Actions buttons -->
            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: auto;">
              <button class="btn btn-primary clickable" id="modalAddToCartBtn" style="width: 100%;">
                🛒 ${t('product.addToCart')}
              </button>
              <a id="modalWhatsAppBtn" href="#" target="_blank" class="btn btn-whatsapp clickable" style="width: 100%;">
                📱 ${t('product.orderWhatsApp')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('appModal');
  container.innerHTML = modalHtml;

  // Prevent clicks inside modal card from closing the modal
  document.getElementById('productDetailModalCard')?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close only on X button or backdrop click
  document.getElementById('modalCloseBtn')?.addEventListener('click', closeModal);
  document.getElementById('productDetailModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'productDetailModalBackdrop') closeModal();
  });

  function closeModal() {
    container.innerHTML = '';
    if (onClose) onClose();
  }

  function updateModalPriceAndLink() {
    const total = calculateCalculatedPrice();
    const priceEl = document.getElementById('modalCalculatedPrice');
    if (priceEl) priceEl.innerText = total;

    const itemTotal = basePricePerKg * getWeightMultiplier(currentWeight) * currentQty;
    const delivery = 5;
    const finalTotal = itemTotal + delivery;

    const text = lang === 'ar' 
      ? `مرحباً Meat House 👋\n\nأرغب في طلب المنتج التالي:\n• المنتج: ${name}\n• السعر للكيلو: ${basePricePerKg} ريال للكيلو\n• الوزن المختار: ${currentWeight}\n• الكمية: ${currentQty}\n• إجمالي المنتج: ${itemTotal} ريال\n• التوصيل (صفوى): ${delivery} ريال\n• الإجمالي النهائي: ${finalTotal} ريال\n\nيرجى تأكيد الطلب.`
      : `Hello Meat House 👋\n\nI would like to order:\n• Product: ${name}\n• Price: ${basePricePerKg} SAR / KG\n• Selected Weight: ${currentWeight}\n• Quantity: ${currentQty}\n• Product Total: ${itemTotal} SAR\n• Delivery (Safwa): ${delivery} SAR\n• Final Total: ${finalTotal} SAR\n\nPlease confirm my order.`;

    const waBtn = document.getElementById('modalWhatsAppBtn');
    if (waBtn) waBtn.href = `https://wa.me/966568148422?text=${encodeURIComponent(text)}`;
  }

  // Weight selector pills - Update price without closing!
  document.querySelectorAll('#modalWeightSelector .weight-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      document.querySelectorAll('#modalWeightSelector .weight-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentWeight = btn.dataset.weight;
      updateModalPriceAndLink();
    });
  });

  // Quantity plus/minus - Update price without closing!
  const qtyValEl = document.getElementById('modalQtyVal');
  document.getElementById('modalQtyMinus')?.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (currentQty > 1) {
      currentQty--;
      if (qtyValEl) qtyValEl.innerText = currentQty;
      updateModalPriceAndLink();
    }
  });

  document.getElementById('modalQtyPlus')?.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    currentQty++;
    if (qtyValEl) qtyValEl.innerText = currentQty;
    updateModalPriceAndLink();
  });

  // Initial update
  updateModalPriceAndLink();

  // Add to cart
  document.getElementById('modalAddToCartBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product, currentWeight, currentQty);
    closeModal();
    document.getElementById('cartDrawer')?.classList.add('open');
    document.getElementById('cartDrawerOverlay')?.classList.add('active');
  });
}
