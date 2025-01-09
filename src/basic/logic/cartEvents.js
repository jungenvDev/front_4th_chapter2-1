import {
  updateCartItemQuantity,
  handleCartItemDelete,
  addToCart
} from './cartLogic.js';

export function initializeCartEvents() {
  document.addEventListener('click', (e) => {
    if (e.target.matches('#add-to-cart')) {
      addToCart();
    }
    // 수량 변경 버튼 이벤트
    if (e.target.matches('.quantity-change')) {
      const productId = e.target.dataset.productId;
      const change = parseInt(e.target.dataset.change);
      updateCartItemQuantity(productId, change > 0);
    }

    // 삭제 버튼 이벤트
    if (e.target.matches('.remove-item')) {
      const productId = e.target.dataset.productId;
      handleCartItemDelete(productId);
    }
  });
}
