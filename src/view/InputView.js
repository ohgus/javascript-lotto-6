import { Console } from "@woowacourse/mission-utils";
import { INPUT } from "../constants/messages.js";

const InputView = {
  readPurchaseMoney() {
    return Console.readLineAsync(INPUT.purcahse);
  },

  readWinningNumber() {
    return Console.readLineAsync(INPUT.winningNumbers);
  },

  readBonusNumber() {
    return Console.readLineAsync(INPUT.bonusNumber);
  },
};

export default InputView;
