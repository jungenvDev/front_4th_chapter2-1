import { CartTitle } from './Cart.js';
import { ProductSelector } from './Product.js';
import { initializeCartEvents } from '../logic/cartEvents.js';
import { PaymentInfo } from './Payment.js';
const App = () => {
  // initProductSelector();
  const template = `
    <div class="bg-gray-100 p-8" id="app">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        ${CartTitle()}
        ${ProductSelector()}
        <div id="cart-items"></div>
        ${PaymentInfo()}
      </div>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = template;
  const element = container.firstElementChild;

  initializeCartEvents();
  // startLightningSale(selectedOptions);
  // startRecommendProduct(selectedOptions);

  return element;
};

export default App;
