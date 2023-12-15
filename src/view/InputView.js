import { Console } from "@woowacourse/mission-utils";
import { READ } from "../constants/messages.js";

const InputView = {
  async coins() {
    const input = await Console.readLineAsync(READ.coins);
    return input;
  },

  async numbers() {
    const input = await Console.readLineAsync(READ.numbers);
    return input;
  },

  async bonusNumber() {
    const input = await Console.readLineAsync(READ.bonusNumber);
    return input;
  },
};

export default InputView;