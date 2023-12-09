import { OPTION } from "./constants/lottoOption.js";

class Customer {
  #purchaseMoney;

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
  }

  getPurchaseQuantity() {
    return this.#calculatePurchaseQuantity();
  }

  #calculatePurchaseQuantity() {
    return Number(this.#purchaseMoney) / OPTION.basicUnit;
  }
}

export default Customer;
