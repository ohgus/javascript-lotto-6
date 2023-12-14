import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../model/Lotto.js";
import Store from "../model/Store.js";
import LottoMachine from "../model/LottoMachine.js";
import Bonus from "../model/Bonus.js";

import { RANK_INDEX, PRIZE } from "../constants/lottoOptions.js";

class Controller {
  #lotto;
  #store;
  #machine;
  #bonus;
  #result;

  constructor() {
    this.#result = Array.from({ length: 5 }, (item) => 0);
  }

  async play() {
    await this.#readCoins();
  }

  async #readCoins() {
    try {
      const coins = await InputView.coins();
      this.#store = new Store(coins);
      this.#machine = new LottoMachine(this.#store.getCoins());
      OutputView.userLottos(this.#machine.getUserLottos());
      return await this.#readLottoNumber();
    } catch (error) {
      OutputView.error(error.message);
      return await this.#readCoins();
    }
  }

  async #readLottoNumber() {
    try {
      const numbers = await InputView.numbers();
      this.#lotto = new Lotto(numbers);
      return await this.#readBonusNumber();
    } catch (error) {
      OutputView.error(error.message);
      return await this.#readLottoNumber();
    }
  }

  async #readBonusNumber() {
    try {
      const number = await InputView.bonusNumber();
      this.#bonus = new Bonus(number, this.#lotto.getLottoNumbers());
      this.#saveResult(
        this.#lotto.getLottoNumbers(),
        this.#machine.getUserLottos(),
        this.#bonus.getBonusNumber()
      );
      return this.#printResult(this.#result);
    } catch (error) {
      OutputView.error(error.message);
      return await this.#readBonusNumber();
    }
  }

  #saveResult(lotto, userLottos, bonusNumber) {
    userLottos.forEach((userLotto) => {
      const matchCount = this.#calculateMathCount(userLotto, lotto);
      const bonusMatch = this.#checkBonus(userLotto, bonusNumber);

      if (matchCount === 3) this.#result[4] += 1;
      else if (matchCount === 4) this.#result[3] += 1;
      else if (matchCount === 5 && bonusMatch) this.#result[1] += 1;
      else if (matchCount === 5) this.#result[2] += 1;
      else if (matchCount === 6) this.#result[0] += 1;
    });
  }

  #calculateMathCount(userLotto, lotto) {
    let count = 0;
    userLotto.forEach((number) => {
      if (lotto.includes(number)) {
        count += 1;
      }
    });
    return count;
  }

  #checkBonus(userLotto, bonusNumber) {
    if (userLotto.includes(bonusNumber)) {
      return true;
    }
    return false;
  }

  #printResult(result) {
    const coins = this.#store.getCoins();
    const totalPrize = this.#calculatePrize(result);
    const profitRate = this.#calculateProfitRate(coins, totalPrize);
    OutputView.result(result, profitRate);
  }

  #calculatePrize(result) {
    let prize = 0;
    result.forEach((number, index) => {
      prize += number * PRIZE[RANK_INDEX[index]];
    });
    return prize;
  }

  #calculateProfitRate(coins, prize) {
    const temp = (prize / coins) * 100;
    return (Math.round(temp * 10) / 10).toFixed(1);
  }
}

export default Controller;
