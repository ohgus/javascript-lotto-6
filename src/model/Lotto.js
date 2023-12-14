import { LOTTO_OPTIONS } from "../constants/lottoOptions.js";
import { ERROR } from "../constants/messages.js";

class Lotto {
  #numbers;

  constructor(input) {
    this.#validate(input);
    this.#numbers = input;
  }

  #validate(input) {
    const numbers = input.split(LOTTO_OPTIONS.spliter);

    if (numbers.length !== LOTTO_OPTIONS.length) {
      throw new Error(`${ERROR.title} ${ERROR.message.length}`);
    } else if (new Set(numbers).size !== LOTTO_OPTIONS.length) {
      throw new Error(`${ERROR.title} ${ERROR.message.duplicate}`);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;