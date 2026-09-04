/* Products Page View Component */
import { getLang, t } from '../state/i18n.js';
import { categories } from '../data/categories.js';
import { products } from '../data/products.js';
import { createProductCard, bindProductCardEvents } from '../components/productCard.js';

export function renderProductsPage(container, openProductModal, initialCategory = null) {
  const lang = getLang();
  let selectedCategory = initialCategory || 'all';
  let searchQuery = '';
  let sortBy = 'default';

  function filterProducts() {
    return products.filter(p => {
      // Category check
      if (selectedCategory !== 'all' && p.categoryId !== selectedCategory) {
        return false;
      }
      // Search query check (search both AR and EN)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameAr = (p.name.ar || '').toLowerCase();
        const nameEn = (p.name.en || '').toLowerCase();
        const descAr = (p.desc.ar || '').toLowerCase();
        const descEn = (p.desc.en || '').toLowerCase();

        return nameAr.includes(q) || nameEn.includes(q) || descAr.includes(q) || descEn.includes(q);
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }

  function updateGrid() {
    const filtered = filterProducts();
    const grid = document.getElementById('catalogProductGrid');
    const countEl = document.getElementById('productResultsCount');

    if (countEl) {
      countEl.innerText = `${filtered.length} ${lang === 'ar' ? 'منتج متاح' : 'Products Available'}`;
    }

    if (grid) {
      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">${lang === 'ar' ? 'لم نجد أي منتج يطابق بحثك' : 'No products match your search'}</h3>
            <p>${lang === 'ar' ? 'جرب البحث بكلمات أخرى أو اختر قسماً آخر' : 'Try searching for other keywords or select another category'}</p>
          </div>
        `;
      } else {
        grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
        bindProductCardEvents(grid, openProductModal);
      }
    }
  }

  const html = `
    <div class="container" style="padding: 4rem 1.5rem;">
      <!-- Page Title -->
      <div style="margin-bottom: 2.5rem;">
        <h1 style="font-size: 2.5rem; font-weight: 900; margin-bottom: 0.5rem;">${t('nav.products')}</h1>
        <p style="color: var(--text-muted);">${lang === 'ar' ? 'جميع اللحوم والمصنعات الطازجة يومياً من ميت هاوس صفوى' : 'Explore all fresh meats butchered daily at Meat House KSA'}</p>
      </div>

      <!-- Search & Filters Toolbar -->
      <div style="background-color: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color); padding: 1.25rem; margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between; box-shadow: var(--shadow-sm);">
        <!-- Search Input -->
        <div style="position: relative; flex: 1; min-width: 260px;">
          <input type="text" id="productSearchInput" class="form-input" placeholder="${t('nav.searchPlaceholder')}" style="padding-left: 42px;">
          <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); opacity: 0.5;">🔍</span>
        </div>

        <!-- Sort dropdown -->
        <div style="width: 180px;">
          <select id="productSortSelect" class="form-select">
            <option value="default">${lang === 'ar' ? 'الترتيب الافتراضي' : 'Default Sorting'}</option>
            <option value="price-low">${lang === 'ar' ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
            <option value="price-high">${lang === 'ar' ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
          </select>
        </div>

        <div id="productResultsCount" style="font-weight: 700; color: var(--accent-red); font-size: 0.95rem;">
          -- ${lang === 'ar' ? 'منتج متاح' : 'Products'}
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 1rem; margin-bottom: 2.5rem;" id="categoryPillContainer">
        <button class="weight-opt ${selectedCategory === 'all' ? 'active' : ''} clickable" data-cat="all" style="padding: 10px 20px; font-size: 0.95rem; white-space: nowrap;">
          🌟 ${lang === 'ar' ? 'جميع الأقسام' : 'All Categories'}
        </button>
        ${categories.map(c => `
          <button class="weight-opt ${selectedCategory === c.id ? 'active' : ''} clickable" data-cat="${c.id}" style="padding: 10px 20px; font-size: 0.95rem; white-space: nowrap;">
            ${c.icon} ${c.name[lang]}
          </button>
        `).join('')}
      </div>

      <!-- Product Cards Grid -->
      <div class="product-grid" id="catalogProductGrid">
        <!-- Injected via JavaScript -->
      </div>
    </div>
  `;

  container.innerHTML = html;

  // Bind Toolbar Events
  document.getElementById('productSearchInput')?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    updateGrid();
  });

  document.getElementById('productSortSelect')?.addEventListener('change', (e) => {
    sortBy = e.target.value;
    updateGrid();
  });

  document.querySelectorAll('#categoryPillContainer .weight-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#categoryPillContainer .weight-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.dataset.cat;
      updateGrid();
    });
  });

  // Initial render of grid
  updateGrid();
}
