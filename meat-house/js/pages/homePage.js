/* Home Page View Component */
import { getLang, t } from '../state/i18n.js';
import { categories } from '../data/categories.js';
import { products } from '../data/products.js';
import { specialOffers } from '../data/offers.js';
import { createProductCard, bindProductCardEvents } from '../components/productCard.js';

export function renderHomePage(container, openProductModal) {
  const lang = getLang();
  const featuredProducts = products.slice(0, 8);
  const mainOffer = specialOffers[0];

  const html = `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-content">
        <div class="hero-badge">
          <span>👑</span> ${t('hero.badge')}
        </div>
        <h1 class="hero-title">${t('hero.title')}</h1>
        <p class="hero-subtitle">${t('hero.subtitle')}</p>
        <div class="hero-ctas">
          <a href="#products" class="btn btn-primary clickable">${t('hero.ctaShop')} ➔</a>
          <a href="#categories" class="btn btn-secondary clickable">${t('hero.ctaMenu')}</a>
        </div>
      </div>
    </section>

    <!-- Shop By Category Section -->
    <section class="container" style="padding: 5rem 1.5rem 2rem 1.5rem;">
      <div class="section-header">
        <span class="section-tag">${t('sections.categoriesTag')}</span>
        <h2 class="section-title">${t('sections.categoriesTitle')}</h2>
      </div>

      <div class="category-grid">
        ${categories.map(cat => {
          const catName = cat.name[lang];
          const catDesc = cat.description[lang];
          return `
            <a href="#products?cat=${cat.id}" class="category-card clickable">
              <div class="category-icon">${cat.icon}</div>
              <h3 class="category-title">${catName}</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">${catDesc}</p>
              <span class="category-count">${cat.count} ${lang === 'ar' ? 'منتج طازج' : 'Fresh Items'}</span>
            </a>
          `;
        }).join('')}
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="container" style="padding: 4rem 1.5rem 5rem 1.5rem;">
      <div class="section-header">
        <span class="section-tag">${t('sections.featuredTag')}</span>
        <h2 class="section-title">${t('sections.featuredTitle')}</h2>
      </div>

      <div class="product-grid" id="homeProductGrid">
        ${featuredProducts.map(p => createProductCard(p)).join('')}
      </div>

      <div style="text-align: center; margin-top: 3.5rem;">
        <a href="#products" class="btn btn-secondary clickable" style="border-color: var(--accent-red); color: var(--accent-red);">
          ${lang === 'ar' ? 'عرض جميع المنتجات (40+ منتج)' : 'Explore Full Menu (40+ Items)'} ➔
        </a>
      </div>
    </section>

    <!-- Special Offer Feature Banner -->
    ${mainOffer ? `
      <section class="container" style="padding: 0 1.5rem 5rem 1.5rem;">
        <div style="background: linear-gradient(135deg, #1C1514 0%, #341A17 100%); border-radius: var(--radius-lg); border: 1px solid var(--accent-red); padding: 3rem 2rem; color: #fff; display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; box-shadow: var(--shadow-lg);">
          <div style="flex: 1; min-width: 280px;">
            <span style="background: var(--accent-red); color: #fff; font-weight: 800; font-size: 0.8rem; padding: 4px 12px; border-radius: var(--radius-full); text-transform: uppercase;">
              ${mainOffer.saveBadge[lang]}
            </span>
            <h2 style="font-size: 2.2rem; font-weight: 900; margin: 1rem 0; color: #ffffff;">${mainOffer.title[lang]}</h2>
            <p style="font-size: 1.05rem; color: #D4CDC7; line-height: 1.6; margin-bottom: 1.5rem;">${mainOffer.desc[lang]}</p>
            <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem;">
              <span style="font-size: 2.5rem; font-weight: 900; color: var(--accent-gold);">${mainOffer.price} ${t('product.sar')}</span>
              <span style="font-size: 1.4rem; color: #8A817A; text-decoration: line-through;">${mainOffer.originalPrice} ${t('product.sar')}</span>
            </div>
            <a href="#offers" class="btn btn-primary clickable">
              🔥 ${lang === 'ar' ? 'اطلب الباقة الآن' : 'Claim Special Offer'}
            </a>
          </div>

          <div style="flex: 1; min-width: 280px; max-width: 480px; margin: 0 auto; text-align: center;">
            <img src="${mainOffer.image}" alt="BBQ Box" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md); border: 2px solid rgba(212,175,55,0.3);">
          </div>
        </div>
      </section>
    ` : ''}

    <!-- About Section Teaser -->
    <section style="background-color: var(--bg-secondary); padding: 5rem 0;">
      <div class="container" style="display: flex; flex-wrap: wrap; align-items: center; gap: 3rem;">
        <div style="flex: 1; min-width: 280px;">
          <span class="section-tag">${t('sections.aboutTag')}</span>
          <h2 class="section-title" style="margin-bottom: 1.5rem;">${t('sections.aboutTitle')}</h2>
          <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 2rem;">
            ${lang === 'ar' ? t('about.arabicContent') : t('about.englishContent')}
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">🥩</div>
              <h4 style="font-weight: 800; font-size: 1rem; margin-bottom: 0.25rem;">${t('about.quality')}</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${t('about.qualityDesc')}</p>
            </div>
            <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">✨</div>
              <h4 style="font-weight: 800; font-size: 1rem; margin-bottom: 0.25rem;">${t('about.fresh')}</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">${t('about.freshDesc')}</p>
            </div>
          </div>
          <a href="#about" class="btn btn-secondary clickable" style="border-color: var(--accent-red); color: var(--accent-red);">${t('nav.about')} ➔</a>
        </div>

        <div style="flex: 1; min-width: 280px; text-align: center;">
          <img src="assets/images/hero_banner.png" alt="Meat House Quality" style="width: 100%; max-width: 500px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); margin: 0 auto;">
        </div>
      </div>
    </section>

    <!-- Instagram Section -->
    <section class="container" style="padding: 5rem 1.5rem;">
      <div class="section-header">
        <span class="section-tag">@meathouse.sa</span>
        <h2 class="section-title">${lang === 'ar' ? 'تابعنا على انستغرام' : 'Follow Us on Instagram'}</h2>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">${lang === 'ar' ? 'شاهد مستجدات التقطيع اليومي وعروضنا الحصرية' : 'Check out our daily butchery cuts and exclusive stories'}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem;">
        <img src="assets/images/beef_ribeye.png" style="height: 220px; width: 100%; object-fit: cover; border-radius: var(--radius-md);">
        <img src="assets/images/burgers.png" style="height: 220px; width: 100%; object-fit: cover; border-radius: var(--radius-md);">
        <img src="assets/images/lamb_cuts.png" style="height: 220px; width: 100%; object-fit: cover; border-radius: var(--radius-md);">
        <img src="assets/images/kebab_kofta.png" style="height: 220px; width: 100%; object-fit: cover; border-radius: var(--radius-md);">
      </div>

      <div style="text-align: center; margin-top: 2.5rem;">
        <a href="https://www.instagram.com/meathouse.sa?igsi=MWJwY2oxZ3JucHNyaw==" target="_blank" class="btn btn-secondary clickable" style="border-color: #E1306C; color: #E1306C;">
          📸 Instagram @meathouse.sa
        </a>
      </div>
    </section>
  `;

  container.innerHTML = html;
  bindProductCardEvents(document.getElementById('homeProductGrid'), openProductModal);
}
