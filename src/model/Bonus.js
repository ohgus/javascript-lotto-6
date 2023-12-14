import { LOTTO_OPTIONS } from "../constants/lottoOptions.js";
import { ERROR } from "../constants/messages.js";

class Bonus {
  #bonusNumber;

  constructor(input, lottoNumbers) {
    this.#validate(input, lottoNumbers);
    this.#bonusNumber = Number(input);
  }

  #validate(input, lottoNumbers) {
    const bonusNumber = Number(input);

    if (!LOTTO_OPTIONS.regex.test(bonusNumber)) {
      throw new Error(`${ERROR.title} ${ERROR.message.range}`);
    } else if (lottoNumbers.includes(bonusNumber)) {
      throw new Error(`${ERROR.title} ${ERROR.message.duplicate}`);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
