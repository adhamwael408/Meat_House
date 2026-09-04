/* Footer Component */
import { getLang, t } from '../state/i18n.js';

export function renderFooter() {
  const lang = getLang();

  const footerHtml = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Info -->
          <div class="footer-brand">
            <div class="brand-logo" style="color: #ffffff;">
              <img src="assets/logo/logo.svg" alt="Meat House Logo" style="height: 50px;">
              <div>
                <div style="font-size: 1.3rem; font-weight: 900;">MEAT HOUSE</div>
                <div style="font-size: 0.75rem; color: var(--accent-gold); letter-spacing: 2px;">THE BUTCHER'S</div>
              </div>
            </div>
            <p>${t('footer.brandDesc')}</p>
            <div style="display: flex; gap: 12px; margin-top: 1.25rem;">
              <a href="https://www.instagram.com/meathouse.sa?igsi=MWJwY2oxZ3JucHNyaw==" target="_blank" class="icon-btn clickable" title="Instagram" style="background: rgba(255,255,255,0.08); color: #fff;">
                📸
              </a>
              <a href="https://wa.me/966568148422" target="_blank" class="icon-btn clickable" title="WhatsApp" style="background: rgba(37, 211, 102, 0.2); color: #25D366;">
                💬
              </a>
              <a href="tel:+966568148422" class="icon-btn clickable" title="Call Us" style="background: rgba(255,255,255,0.08); color: #fff;">
                📞
              </a>
            </div>
          </div>

          <!-- Quick Navigation Links -->
          <div>
            <h4 class="footer-title">${t('footer.quickLinks')}</h4>
            <ul class="footer-links">
              <li><a href="#home" class="footer-link clickable">${t('nav.home')}</a></li>
              <li><a href="#products" class="footer-link clickable">${t('nav.products')}</a></li>
              <li><a href="#categories" class="footer-link clickable">${t('nav.categories')}</a></li>
              <li><a href="#offers" class="footer-link clickable">${t('nav.offers')}</a></li>
              <li><a href="#about" class="footer-link clickable">${t('nav.about')}</a></li>
              <li><a href="#contact" class="footer-link clickable">${t('nav.contact')}</a></li>
            </ul>
          </div>

          <!-- Product Categories -->
          <div>
            <h4 class="footer-title">${t('nav.categories')}</h4>
            <ul class="footer-links">
              <li><a href="#products?cat=lamb" class="footer-link clickable">${lang === 'ar' ? 'اللحوم الضاني' : 'Lamb Meat'}</a></li>
              <li><a href="#products?cat=veal" class="footer-link clickable">${lang === 'ar' ? 'اللحوم البتلو' : 'Veal Meat'}</a></li>
              <li><a href="#products?cat=beef" class="footer-link clickable">${lang === 'ar' ? 'اللحوم البقري' : 'Beef Meat'}</a></li>
              <li><a href="#products?cat=burgers" class="footer-link clickable">${lang === 'ar' ? 'البرجر الفاخر' : 'Gourmet Burgers'}</a></li>
              <li><a href="#products?cat=kebab" class="footer-link clickable">${lang === 'ar' ? 'الكباب والكفتة' : 'Kebab & Kofta'}</a></li>
            </ul>
          </div>

          <!-- Contact Information -->
          <div>
            <h4 class="footer-title">${t('contact.title')}</h4>
            <ul class="footer-links" style="font-size: 0.95rem; line-height: 1.6;">
              <li style="display: flex; gap: 10px;">
                <span>📍</span>
                <span>${lang === 'ar' ? 'صفوى، حي العروبة، مجمع الاقتصاد - المنطقة الشرقية' : 'Safwa, Al-Orouba Dist., Economy Complex, Eastern Province, KSA'}</span>
              </li>
              <li style="display: flex; gap: 10px;">
                <span>📱</span>
                <a href="tel:+966568148422" style="color: var(--accent-gold); font-weight: 700;">+966568148422</a>
              </li>
              <li style="display: flex; gap: 10px;">
                <span>📸</span>
                <a href="https://www.instagram.com/meathouse.sa?igsi=MWJwY2oxZ3JucHNyaw==" target="_blank" style="color: var(--accent-gold);">@meathouse.sa</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
          ${t('footer.rights')}
        </div>
      </div>
    </footer>
  `;

  document.getElementById('appFooter').innerHTML = footerHtml;
}
