import { Console } from "@woowacourse/mission-utils";
import { READ } from "../constants/messages.js";

const InputView = {
  async coins() {
    const input = await Console.readLineAsync(READ.coins);
    return input;
  },
};

export default InputView;
