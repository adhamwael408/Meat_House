/* About Us Page View Component */
import { getLang, t } from '../state/i18n.js';

export function renderAboutPage(container) {
  const lang = getLang();

  const html = `
    <div class="container" style="padding: 4rem 1.5rem;">
      <div class="section-header">
        <span class="section-tag">${t('sections.aboutTag')}</span>
        <h1 class="section-title">${t('nav.about')}</h1>
      </div>

      <!-- Main Story Banner -->
      <div style="background-color: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); padding: 3.5rem 2.5rem; box-shadow: var(--shadow-md); margin-bottom: 4rem;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 3rem;">
          <div style="flex: 1.2; min-width: 280px;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <img src="assets/logo/logo.svg" alt="Meat House Logo" style="height: 60px;">
              <div>
                <h2 style="font-size: 2rem; font-weight: 900;">MEAT HOUSE</h2>
                <div style="color: var(--accent-gold); font-weight: 800; letter-spacing: 2px;">THE BUTCHER'S</div>
              </div>
            </div>

            <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 1.5rem; font-weight: 600;">
              ${lang === 'ar' ? t('about.arabicContent') : t('about.englishContent')}
            </p>

            <p style="font-size: 1rem; line-height: 1.7; color: var(--text-secondary);">
              ${lang === 'ar' 
                ? 'انطلقت رحلتنا من صفوى في المنطقة الشرقية بهدف تقديم مفهوم جديد ومبتكر لملحمة فاخرة تدمج بين الأصالة والجودة العالية وبين أحدث وسائل الخدمة والتغليف الصحي.'
                : 'Our journey began in Safwa, Eastern Province, with a mission to redefine the gourmet butcher shop experience, blending heritage butchery with state-of-the-art hygiene & packaging.'}
            </p>
          </div>

          <div style="flex: 0.8; min-width: 260px; text-align: center;">
            <img src="assets/images/hero_banner.png" alt="Meat House Butcher Shop" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
          </div>
        </div>
      </div>

      <!-- 4 Pillars of Excellence Grid -->
      <h2 style="font-size: 1.8rem; font-weight: 800; text-align: center; margin-bottom: 2.5rem;">
        ${lang === 'ar' ? 'ركائز الجودة في ميت هاوس' : 'Our 4 Pillars of Butchery Quality'}
      </h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem;">
        <div style="background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center; box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🥇</div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">${t('about.quality')}</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.5;">${t('about.qualityDesc')}</p>
        </div>

        <div style="background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center; box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🌿</div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">${t('about.fresh')}</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.5;">${t('about.freshDesc')}</p>
        </div>

        <div style="background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center; box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔪</div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">${t('about.prep')}</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.5;">${t('about.prepDesc')}</p>
        </div>

        <div style="background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center; box-shadow: var(--shadow-sm);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">❤️</div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">${t('about.satisfaction')}</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.5;">${t('about.satisfactionDesc')}</p>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}
