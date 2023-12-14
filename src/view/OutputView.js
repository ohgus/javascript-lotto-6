import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "../constants/messages.js";

const OutputView = {
  userLottos(lottos) {
    Console.print(PRINT.quantity(lottos.length));

    lottos.forEach((lotto) => {
      Console.print(PRINT.userLotto(lotto));
    });
  },
};

export default OutputView;
