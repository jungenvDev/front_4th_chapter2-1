import { productData } from '../data/data.js';
import { AddToCartButton } from './Cart.js';

export const ProductSelector = () => {
  const select = `
  <div>
    <select id="product-select" class="border rounded p-2 mr-2">
      ${productData
        .map(
          (product) =>
            `<option value="${product.id}" ${
              product.quantity === 0 ? 'disabled' : ''
            }>${product.name} - ${product.price}원</option>`
        )
        .join('')}
    </select>
    ${AddToCartButton()}
  </div>
  `;

  return select;
};

export const StockStatus = (text) => {
  return `
  <div id="stock-status" class="text-sm text-gray-500 mt-2">
    ${text}
  </div>
  `;
};
