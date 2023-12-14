import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../model/Lotto.js";
import Store from "../model/Store.js";
import LottoMachine from "../model/LottoMachine.js";
import Bonus from "../model/Bonus.js";

class Controller {
  #lotto;
  #userLotto;
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
    } catch (error) {
      OutputView.error(error.message);
      return await this.#readLottoNumber();
    }
  }
}

export default Controller;
