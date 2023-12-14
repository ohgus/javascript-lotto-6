import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "../constants/messages.js";

const OutputView = {
  userLottos(lottos) {
    Console.print(PRINT.quantity(lottos.length));

    lottos.forEach((lotto) => {
      Console.print(PRINT.userLotto(lotto));
    });
  },

  result(result, profitRate) {
    Console.print(PRINT.statistics);
    Console.print(PRINT.lineSplit);
    Console.print(PRINT.fifth(result[4]));
    Console.print(PRINT.fourth(result[3]));
    Console.print(PRINT.third(result[2]));
    Console.print(PRINT.second(result[1]));
    Console.print(PRINT.first(result[0]));
    Console.print(PRINT.profitRate(profitRate));
  },

  error(errorMessage) {
    Console.print(errorMessage);
  },
};

export default OutputView;
