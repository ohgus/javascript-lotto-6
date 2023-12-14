import { ERROR } from "../constants/messages.js";
import { LOTTO_OPTIONS } from "../constants/lottoOptions.js";

class Store {
  #coins;

  constructor(input) {
    this.#validate(input);
    this.#coins = Number(input);
  }

  #validate(input) {
    const coins = Number(input);

    if (!LOTTO_OPTIONS.coinRegex.test(coins)) {
      throw new Error(`${ERROR.title} ${ERROR.message.NaN}`);
    } else if (coins < LOTTO_OPTIONS.coinUnit) {
      throw new Error(`${ERROR.title} ${ERROR.message.small}`);
    } else if (coins % LOTTO_OPTIONS.coinUnit !== 0) {
      throw new Error(`${ERROR.title} ${ERROR.message.unit}`);
    }
  }

  getCoins() {
    return this.#coins;
  }
}

export default Store;
