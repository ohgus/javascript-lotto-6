import { Random } from "@woowacourse/mission-utils";
import { LOTTO_OPTIONS } from "../constants/lottoOptions.js";

class LottoMachine {
  #userLottos;

  constructor(coins) {
    this.#userLottos = this.#generateLottos(coins);
  }

  #generateLottos(coins) {
    const quantity = coins / LOTTO_OPTIONS.coinUnit;
    const lottos = [];

    for (let i = 0; i < quantity; i++) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO_OPTIONS.min,
        LOTTO_OPTIONS.max,
        LOTTO_OPTIONS.length
      ).sort((a, b) => a - b);
      lottos.push(lotto);
    }
    return lottos;
  }
}
