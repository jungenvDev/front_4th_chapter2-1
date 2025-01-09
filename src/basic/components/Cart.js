export const CartTitle = () => {
  return `
  <h1 class="text-2xl font-bold mb-4">장바구니</h1>
  `;
};

//장바구니에 추가하는 버튼
export const AddToCartButton = () => {
  return `
  <button id="add-to-cart" class="bg-blue-500 text-white px-4 py-2 rounded">추가</button>
  `;
};

//장바구니 상품 수량 변경 버튼
export const QuantityChangeButton = (itemId, isIncrease, label) => {
  return `
    <button 
      class="quantity-change bg-blue-500 text-white px-2 py-1 rounded mr-1" 
      data-product-id="${itemId}"
      data-change="${isIncrease ? 1 : -1}"
    >${label}</button>
  `;
};

export const RemoveButton = (itemId) => {
  return `
    <button 
      class="remove-item bg-red-500 text-white px-2 py-1 rounded" 
      data-product-id="${itemId}"
    >삭제</button>
  `;
};

export const CartItem = (item) => {
  return `
    <div id="${
      item.id
    }" class="cart-item flex justify-between items-center p-2">
      <span>${item.name} - ${item.price}원 x 1</span>
      <div>
        ${QuantityChangeButton(item.id, false, '-')}
        ${QuantityChangeButton(item.id, true, '+')}
        ${RemoveButton(item.id)}
      </div>
    </div>
  `;
};
