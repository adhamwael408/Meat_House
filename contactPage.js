/* Contact Us Page View Component */
import { getLang, t } from '../state/i18n.js';

export function renderContactPage(container) {
  const lang = getLang();

  const html = `
    <div class="container" style="padding: 4rem 1.5rem;">
      <div class="section-header">
        <span class="section-tag">${t('contact.title')}</span>
        <h1 class="section-title">MEAT HOUSE "The Butcher's"</h1>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">${t('contact.subtitle')}</p>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 3rem; margin-top: 3rem;">
        <!-- Contact Info & Quick Buttons Card -->
        <div style="flex: 1; min-width: 300px; background-color: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
          <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
            📍 ${lang === 'ar' ? 'معلومات الموقع والاتصال' : 'Location & Contact Details'}
          </h2>

          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
            <div style="display: flex; gap: 14px;">
              <div style="font-size: 1.5rem; color: var(--accent-red);">📍</div>
              <div>
                <h4 style="font-weight: 800; font-size: 1.05rem;">${lang === 'ar' ? 'العنوان والموقع' : 'Store Location'}</h4>
                <p style="color: var(--text-secondary); margin-top: 4px; line-height: 1.5;">
                  ${t('contact.location')}
                </p>
              </div>
            </div>

            <div style="display: flex; gap: 14px;">
              <div style="font-size: 1.5rem; color: var(--accent-red);">📱</div>
              <div>
                <h4 style="font-weight: 800; font-size: 1.05rem;">${lang === 'ar' ? 'الهاتف والواتساب' : 'Phone & WhatsApp'}</h4>
                <a href="https://wa.me/966568148422" target="_blank" style="color: var(--accent-red); font-weight: 800; font-size: 1.1rem; display: block; margin-top: 4px;">
                  +966 56 814 8422
                </a>
              </div>
            </div>

            <div style="display: flex; gap: 14px;">
              <div style="font-size: 1.5rem; color: var(--accent-red);">📸</div>
              <div>
                <h4 style="font-weight: 800; font-size: 1.05rem;">${lang === 'ar' ? 'حساب الانستغرام الرسمي' : 'Official Instagram'}</h4>
                <a href="https://www.instagram.com/meathouse.sa?igsi=MWJwY2oxZ3JucHNyaw==" target="_blank" style="color: #E1306C; font-weight: 800; display: block; margin-top: 4px;">
                  @meathouse.sa
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: auto;">
            <a href="https://wa.me/966568148422" target="_blank" class="btn btn-whatsapp clickable" style="justify-content: center;">
              💬 WhatsApp
            </a>
            <a href="tel:+966568148422" class="btn btn-primary clickable" style="justify-content: center;">
              📞 Call Now
            </a>
          </div>
        </div>

        <!-- Interactive Map Placeholder & Message Form -->
        <div style="flex: 1.2; min-width: 300px; display: flex; flex-direction: column; gap: 2rem;">
          <!-- Map Box -->
          <div style="background-color: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); overflow: hidden; height: 220px; position: relative; box-shadow: var(--shadow-sm);">
            <iframe 
              src="https://maps.google.com/maps?q=Safwa+Saudi+Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>

          <!-- Contact Form -->
          <div style="background-color: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
            <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem;">
              ✉️ ${t('contact.formTitle')}
            </h3>

            <form id="contactForm">
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <div class="form-group" style="flex: 1; min-width: 140px;">
                  <label class="form-label">${t('checkout.fullName')}</label>
                  <input type="text" class="form-input" required>
                </div>
                <div class="form-group" style="flex: 1; min-width: 140px;">
                  <label class="form-label">${t('checkout.phone')}</label>
                  <input type="tel" class="form-input" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">${lang === 'ar' ? 'الرسالة / الاستفسار' : 'Message'}</label>
                <textarea class="form-textarea" rows="3" required></textarea>
              </div>

              <button type="submit" class="btn btn-primary clickable" style="width: 100%;">
                ${t('contact.send')} ➔
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(lang === 'ar' ? 'شكراً لك! تم استلام رسالتك وسيتم التواصل معك قريباً.' : 'Thank you! Your message has been received.');
  });
}
