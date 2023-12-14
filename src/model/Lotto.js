import { LOTTO_OPTIONS } from "../constants/lottoOptions.js";
import { ERROR } from "../constants/messages.js";

class Lotto {
  #numbers;

  constructor(input) {
    this.#validate(input);
    this.#numbers = input.split(LOTTO_OPTIONS.spliter);
  }

  #validate(input) {
    const numbers = input.split(LOTTO_OPTIONS.spliter);

    if (numbers.length !== LOTTO_OPTIONS.length) {
      throw new Error(`${ERROR.title} ${ERROR.message.length}`);
    } else if (new Set(numbers).size !== LOTTO_OPTIONS.length) {
      throw new Error(`${ERROR.title} ${ERROR.message.duplicate}`);
    }

    numbers.forEach((number) => {
      if (!LOTTO_OPTIONS.regex.test(number)) {
        throw new Error(`${ERROR.title} ${ERROR.message.range}`);
      }
    });
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
