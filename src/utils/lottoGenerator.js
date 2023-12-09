import { Random } from "@woowacourse/mission-utils";
import { OPTION } from "../constants/lottoOption.js";

const lottoGenerator = {
  generateLotto() {
    const lotto = Random.pickUniqueNumbersInRange(
      OPTION.min,
      OPTION.max,
      OPTION.length
    ).sort((a, b) => a - b);

    return lotto;
  },

  getLotto(quantity) {
    const allLotto = [];

    for (let i = 0; i < quantity; i++) {
      const lotto = this.generateLotto();
      allLotto.push(lotto);
    }

    return allLotto;
  },
};
