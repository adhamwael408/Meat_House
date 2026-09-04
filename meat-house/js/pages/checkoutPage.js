/* Checkout Page View Component - Fixed Safwa 5 SAR Delivery & Itemized Invoice */
import { getLang, t } from '../state/i18n.js';
import { getCart, getCartSubtotal, getDeliveryFee, getCartTotal, formatWhatsAppMessage } from '../state/cart.js';

export function renderCheckoutPage(container) {
  const lang = getLang();
  const cart = getCart();
  const subtotal = getCartSubtotal();
  const delivery = getDeliveryFee();
  const total = getCartTotal();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="container" style="padding: 6rem 1.5rem; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
        <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 1rem;">${t('cart.empty')}</h2>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">${lang === 'ar' ? 'قم بإضافة منتجات لسلتك قبل الانتقال لإتمام الطلب' : 'Add items to your cart before proceeding to checkout'}</p>
        <a href="#products" class="btn btn-primary clickable">${t('hero.ctaShop')}</a>
      </div>
    `;
    return;
  }

  const html = `
    <div class="container" style="padding: 4rem 1.5rem;">
      <h1 style="font-size: 2.2rem; font-weight: 900; margin-bottom: 2rem;">${t('checkout.title')}</h1>

      <!-- Safwa Fixed Delivery Notice -->
      <div class="safwa-delivery-badge" style="margin-bottom: 2rem; padding: 14px 20px; font-size: 1rem;">
        <span style="font-size: 1.4rem;">🚚</span>
        <div>
          <div style="font-weight: 800;">${lang === 'ar' ? 'توصيل سريع ومبرد داخل صفوى' : 'Refrigerated Delivery inside Safwa'}</div>
          <div style="font-size: 0.9rem; font-weight: 600; opacity: 0.9;">
            ${lang === 'ar' ? 'التوصيل داخل جميع مناطق صفوى 5 ريال فقط' : 'Delivery within all areas of Safwa: Only 5 SAR'}
          </div>
        </div>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 3rem;">
        <!-- Customer Details Form -->
        <div style="flex: 1.2; min-width: 300px; background-color: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
          <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
            📋 ${t('checkout.personalInfo')}
          </h2>

          <form id="checkoutForm">
            <div class="form-group">
              <label class="form-label">${t('checkout.fullName')} *</label>
              <input type="text" id="custName" class="form-input" required placeholder="${lang === 'ar' ? 'مثال: محمد أحمد' : 'e.g. Mohammed Ahmed'}">
            </div>

            <div class="form-group">
              <label class="form-label">${t('checkout.phone')} *</label>
              <input type="tel" id="custPhone" class="form-input" required placeholder="+966 5X XXX XXXX">
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <div class="form-group" style="flex: 1; min-width: 140px;">
                <label class="form-label">${t('checkout.city')} *</label>
                <select id="custCity" class="form-select">
                  <option value="Safwa">صفوى (Safwa)</option>
                  <option value="Qatif">القطيف (Qatif)</option>
                  <option value="Ras Tanura">رأس تنورة (Ras Tanura)</option>
                  <option value="Dammam">الدمام (Dammam)</option>
                  <option value="Khobar">الخبر (Khobar)</option>
                </select>
              </div>

              <div class="form-group" style="flex: 2; min-width: 200px;">
                <label class="form-label">${t('checkout.address')} *</label>
                <input type="text" id="custAddress" class="form-input" required placeholder="${lang === 'ar' ? 'الحي، اسم الشارع، رقم المنزل' : 'District, Street Name, Villa/Apt #'}">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${t('checkout.notes')}</label>
              <textarea id="custNotes" class="form-textarea" rows="3" placeholder="${lang === 'ar' ? 'مثال: تقطيع مكعبات صغيرة، بدون دهن، تغليف مفرغ من الهواء...' : 'e.g. Cut into small cubes, vacuum sealed packaging...'}"></textarea>
            </div>

            <!-- Payment Methods -->
            <h3 style="font-size: 1.2rem; font-weight: 800; margin: 2rem 0 1rem 0; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
              💳 ${t('checkout.paymentMethod')}
            </h3>

            <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 2rem;">
              <label style="display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: var(--radius-sm); border: 2px solid var(--accent-red); background-color: var(--bg-secondary); cursor: pointer;">
                <input type="radio" name="payment" value="whatsapp" checked style="accent-color: var(--accent-red);">
                <div>
                  <div style="font-weight: 800;">💬 ${lang === 'ar' ? 'تأكيد وإرسال الفاتورة عبر واتساب (موصى به)' : 'Confirm & Send Itemized Order via WhatsApp (Recommended)'}</div>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">${lang === 'ar' ? 'سيصل الطلب مجهزاً برقم الجوال والتقطيع لممثل ميت هاوس' : 'Direct link sent with exact item weights & totals to Meat House agent'}</div>
                </div>
              </label>

              <label style="display: flex; align-items: center; gap: 12px; padding: 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); opacity: 0.8;">
                <input type="radio" name="payment" value="cod">
                <div>
                  <div style="font-weight: 700;">💵 ${t('checkout.cod')}</div>
                </div>
              </label>
            </div>

            <button type="submit" class="btn btn-whatsapp clickable" style="width: 100%; padding: 16px; font-size: 1.1rem;">
              📱 ${t('checkout.confirmWhatsApp')}
            </button>
          </form>
        </div>

        <!-- Order Summary Side Card -->
        <div style="flex: 0.8; min-width: 280px; background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); height: fit-content; box-shadow: var(--shadow-sm);">
          <h2 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
            🛒 ${t('checkout.orderSummary')} (${cart.length})
          </h2>

          <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; max-height: 320px; overflow-y: auto; padding-right: 4px;">
            ${cart.map(item => {
              const name = typeof item.name === 'object' ? item.name[lang] : item.name;
              const itemTotal = item.itemUnitPrice * item.qty;
              return `
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.95rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 8px;">
                  <div>
                    <div style="font-weight: 700;">${name}</div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">
                      ${lang === 'ar' ? `${item.basePrice} ر.س/كيلو | ${item.weight} × ${item.qty}` : `${item.basePrice} SAR/KG | ${item.weight} × ${item.qty}`}
                    </div>
                  </div>
                  <div style="font-weight: 800; color: var(--accent-red);">${itemTotal} ${t('product.sar')}</div>
                </div>
              `;
            }).join('')}
          </div>

          <div style="border-top: 1px dashed var(--border-color); padding-top: 1rem;">
            <div class="cart-row">
              <span>${t('cart.subtotal')}</span>
              <span>${subtotal} ${t('product.sar')}</span>
            </div>
            <div class="cart-row" style="font-size: 0.9rem; color: var(--text-muted);">
              <span>${lang === 'ar' ? 'توصيل صفوى:' : 'Delivery (Safwa):'}</span>
              <span>${delivery} ${t('product.sar')}</span>
            </div>
            <div class="cart-row total" style="margin-top: 0.75rem;">
              <span>${t('cart.total')}</span>
              <span>${total} ${t('product.sar')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const customerDetails = {
      fullName: document.getElementById('custName').value,
      phone: document.getElementById('custPhone').value,
      city: document.getElementById('custCity').value,
      address: document.getElementById('custAddress').value,
      notes: document.getElementById('custNotes').value
    };

    const waEncoded = formatWhatsAppMessage(customerDetails);
    window.open(`https://wa.me/966568148422?text=${waEncoded}`, '_blank');
  });
}
