//결제 정보
export const PaymentInfo = () => {
  return `
  <div id="cart-total" class="text-xl font-bold my-4">
총액: 0원${DisplayPoint()}
  </div>
  `;
};

//포인트 정보
export const DisplayPoint = () => {
  return `
  <span id="loyalty-points" class="text-blue-500 ml-2">(포인트: 0)</span>
  `;
};
