/* Shopping Cart & Dynamic Weight Calculation State */
import { getLang } from './i18n.js';

let cart = JSON.parse(localStorage.getItem('meathouse_cart')) || [];

export function getWeightMultiplier(weightStr) {
  if (!weightStr) return 1.0;
  const w = weightStr.toString().toLowerCase().trim();
  if (w.includes('500g') || w.includes('نصف') || w.includes('half')) return 0.5;
  if (w.includes('2') || w.includes('٢')) return 2.0;
  return 1.0; // 1 KG standard
}

function saveCart() {
  localStorage.setItem('meathouse_cart', JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cartUpdate', { detail: { cart } }));
}

export function getCart() {
  return cart;
}

export function addToCart(product, selectedWeight = '1 KG', qty = 1) {
  const weight = selectedWeight || '1 KG';
  const multiplier = getWeightMultiplier(weight);
  const basePricePerKg = product.price;

  const existingIndex = cart.findIndex(item => item.id === product.id && item.weight === weight);

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      basePrice: basePricePerKg, // Price per 1 KG
      multiplier: multiplier,   // 0.5, 1.0, 2.0
      itemUnitPrice: basePricePerKg * multiplier, // Calculated price for this weight
      image: product.image,
      weight: weight,
      qty: qty
    });
  }
  saveCart();
}

export function removeFromCart(id, weight) {
  cart = cart.filter(item => !(item.id === id && item.weight === weight));
  saveCart();
}

export function updateQty(id, weight, delta) {
  const item = cart.find(item => item.id === id && item.weight === weight);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id, weight);
    } else {
      saveCart();
    }
  }
}

export function clearCart() {
  cart = [];
  saveCart();
}

export function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.itemUnitPrice * item.qty), 0);
}

export function getDeliveryFee() {
  const subtotal = getCartSubtotal();
  if (subtotal === 0) return 0;
  return 5; // Fixed 5 SAR delivery inside Safwa
}

export function getCartTotal() {
  return getCartSubtotal() + getDeliveryFee();
}

export function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

export function formatWhatsAppMessage(customerDetails = null) {
  const lang = getLang();
  const subtotal = getCartSubtotal();
  const delivery = getDeliveryFee();
  const total = getCartTotal();

  if (lang === 'ar') {
    let msg = `مرحباً Meat House 👋\n\nأرغب في طلب المنتجات التالية:\n\n`;
    cart.forEach((item, index) => {
      const name = typeof item.name === 'object' ? item.name.ar : item.name;
      const itemTotal = item.itemUnitPrice * item.qty;
      msg += `${index + 1}. *${name}*\n   • السعر للكيلو: ${item.basePrice} ر.س / كيلو\n   • الوزن المختار: ${item.weight}\n   • الكمية: ${item.qty}\n   • إجمالي المنتج: ${itemTotal} ر.س\n\n`;
    });
    msg += `---------------------------\n`;
    msg += `المجموع الفرعي: ${subtotal} ر.س\n`;
    msg += `رسوم التوصيل (صفوى): ${delivery} ر.س\n`;
    msg += `*الإجمالي النهائي: ${total} ر.س*\n\n`;

    if (customerDetails) {
      msg += `📋 *بيانات العميل والتوصيل:*\n`;
      msg += `• الاسم: ${customerDetails.fullName || 'غير محدد'}\n`;
      msg += `• الجوال: ${customerDetails.phone || 'غير محدد'}\n`;
      msg += `• المدينة: ${customerDetails.city || 'صفوى'}\n`;
      msg += `• العنوان: ${customerDetails.address || 'غير محدد'}\n`;
      if (customerDetails.notes) {
        msg += `• ملاحظات التقطيع والطلب: ${customerDetails.notes}\n`;
      }
    }
    msg += `\nيرجى تأكيد الطلب والتوصيل. شكراً لكم!`;
    return encodeURIComponent(msg);
  } else {
    let msg = `Hello Meat House 👋\n\nI would like to order the following products:\n\n`;
    cart.forEach((item, index) => {
      const name = typeof item.name === 'object' ? item.name.en : item.name;
      const itemTotal = item.itemUnitPrice * item.qty;
      msg += `${index + 1}. *${name}*\n   • Price per KG: ${item.basePrice} SAR / KG\n   • Selected Weight: ${item.weight}\n   • Quantity: ${item.qty}\n   • Product Total: ${itemTotal} SAR\n\n`;
    });
    msg += `---------------------------\n`;
    msg += `Subtotal: ${subtotal} SAR\n`;
    msg += `Delivery (Safwa): ${delivery} SAR\n`;
    msg += `*Final Order Total: ${total} SAR*\n\n`;

    if (customerDetails) {
      msg += `📋 *Customer & Delivery Details:*\n`;
      msg += `• Name: ${customerDetails.fullName || 'Not specified'}\n`;
      msg += `• Phone: ${customerDetails.phone || 'Not specified'}\n`;
      msg += `• City: ${customerDetails.city || 'Safwa'}\n`;
      msg += `• Address: ${customerDetails.address || 'Not specified'}\n`;
      if (customerDetails.notes) {
        msg += `• Cutting Notes: ${customerDetails.notes}\n`;
      }
    }
    msg += `\nPlease confirm my order. Thank you!`;
    return encodeURIComponent(msg);
  }
}
