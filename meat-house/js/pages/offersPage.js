/* Special Offers Page View Component */
import { getLang, t } from '../state/i18n.js';
import { specialOffers } from '../data/offers.js';

export function renderOffersPage(container) {
  const lang = getLang();

  const html = `
    <div class="container" style="padding: 4rem 1.5rem;">
      <div class="section-header">
        <span class="section-tag">${t('sections.offersTag')}</span>
        <h1 class="section-title">${t('sections.offersTitle')}</h1>
        <p style="color: var(--text-muted); margin-top: 0.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          ${lang === 'ar' ? 'استمتع بأفضل باقات الشواء والعروض العائلية المصممة بعناية لتوفير أعلى جودة وأفضل سعر' : 'Discover curated family packages & artisan BBQ bundles crafted for supreme taste'}
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; margin-top: 3rem;">
        ${specialOffers.map(offer => {
          const title = offer.title[lang];
          const desc = offer.desc[lang];
          const badge = offer.saveBadge[lang];

          const waMsg = lang === 'ar'
            ? `مرحباً Meat House 👋\nأرغب في طلب عرض: ${title}\nبسعر: ${offer.price} ر.س`
            : `Hello Meat House 👋\nI want to order offer: ${title}\nPrice: ${offer.price} SAR`;

          return `
            <div style="background-color: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); overflow: hidden; box-shadow: var(--shadow-md); display: flex; flex-direction: column; position: relative;">
              <div style="position: relative; height: 240px; overflow: hidden;">
                <img src="${offer.image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
                <span style="position: absolute; top: 16px; right: 16px; background-color: var(--accent-red); color: #fff; font-weight: 800; font-size: 0.85rem; padding: 6px 14px; border-radius: var(--radius-full); box-shadow: var(--shadow-sm);">
                  ${badge}
                </span>
                <div class="product-brand-stamp" style="top: 16px; left: 16px;">
                  <img src="assets/logo/logo.svg" alt="Meat House Brand">
                </div>
              </div>

              <div style="padding: 2rem; display: flex; flex-direction: column; flex-grow: 1;">
                <h3 style="font-size: 1.4rem; font-weight: 900; margin-bottom: 0.75rem;">${title}</h3>
                <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem; margin-bottom: 1.5rem;">${desc}</p>

                <div style="margin-top: auto; padding-top: 1.25rem; border-top: 1px dashed var(--border-color); display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <span style="font-size: 2rem; font-weight: 900; color: var(--accent-red);">${offer.price} ${t('product.sar')}</span>
                    <span style="font-size: 1.1rem; color: var(--text-muted); text-decoration: line-through; margin-left: 6px;">${offer.originalPrice} ${t('product.sar')}</span>
                  </div>

                  <a href="https://wa.me/966568148422?text=${encodeURIComponent(waMsg)}" target="_blank" class="btn btn-whatsapp clickable" style="padding: 10px 18px; font-size: 0.9rem;">
                    📱 ${lang === 'ar' ? 'اطلب الباقة' : 'Order Bundle'}
                  </a>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  container.innerHTML = html;
}
