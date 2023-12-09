import { OPTION } from "./constants/lottoOption.js";
import { ERROR } from "./constants/messages.js";

class Customer {
  #purchaseMoney;

  constructor(purchaseMoney) {
    this.#validate(purchaseMoney);
    this.#purchaseMoney = purchaseMoney;
  }

  getPurchaseQuantity() {
    return this.#calculatePurchaseQuantity();
  }

  #calculatePurchaseQuantity() {
    return Number(this.#purchaseMoney) / OPTION.basicUnit;
  }

  #validate(money) {
    const money = Number(money);

    if (money % OPTION.basicUnit !== 0) {
      throw new Error(ERROR.purchase);
    }
  }
}

export default Customer;
