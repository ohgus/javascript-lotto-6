import { Console } from "@woowacourse/mission-utils";
import { OUTPUT } from "../constants/messages.js";

const OutputView = {
  printLottoQuantity(quantity) {
    Console.print(`${"\n"}${quantity}${OUTPUT.quantity}`);
  },
};
