/* Minimal & Elegant Luxury Butcher Knife Cursor Component */

export function initCustomCursor() {
  // Disable completely on mobile and touch devices
  if (!window.matchMedia('(pointer: fine)').matches || window.innerWidth <= 768) {
    return;
  }

  // Remove existing cursor elements if any
  document.querySelectorAll('.custom-cursor-dot').forEach(el => el.remove());

  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  cursorDot.innerHTML = `
    <svg class="custom-cursor-svg" viewBox="0 0 32 32">
      <g transform="rotate(-20 16 16)">
        <!-- Sleek Handle -->
        <rect x="14" y="17" width="4" height="11" rx="1.5" fill="#1C1514" stroke="#D4AF37" stroke-width="0.8"/>
        <!-- Minimal Blade -->
        <path d="M10 4 h12 v11 c0 3.5 -3.5 5.5 -12 5.5 z" fill="#9E2A2B" stroke="#FFFFFF" stroke-width="1.2"/>
        <circle cx="18" cy="8" r="1.2" fill="#FFFFFF"/>
      </g>
    </svg>
  `;
  document.body.appendChild(cursorDot);

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.classList.add('active');

    // Check if hovering over clickable elements
    const target = e.target.closest('a, button, .clickable, .product-card, .category-card, .weight-opt');
    if (target) {
      cursorDot.classList.add('hovering');
    } else {
      cursorDot.classList.remove('hovering');
    }
  });

  window.addEventListener('mousedown', () => {
    cursorDot.classList.add('chop');
    setTimeout(() => cursorDot.classList.remove('chop'), 220);
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.22;
    currentY += (mouseY - currentY) * 0.22;
    cursorDot.style.left = `${currentX}px`;
    cursorDot.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  }
  animate();
}
