/* Theme Manager - Light & Dark Mode */

let currentTheme = localStorage.getItem('meathouse_theme') || 'dark';

export function getTheme() {
  return currentTheme;
}

export function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('meathouse_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
}

export function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Initial setup
document.documentElement.setAttribute('data-theme', currentTheme);
