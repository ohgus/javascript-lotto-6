export const ERROR = Object.freeze({
  title: "[ERROR]",
  message: {
    length: "로또 번호는 6개여야 합니다. 다시 입력해주세요.",
    duplicate: "중복된 번호는 입력할 수 없습니다. 다시 입력해주세요.",
    small: "1,000원 이상의 금액부터 입력할 수 있습니다. 다시 입력해주세요.",
    NaN: "금액은 숫자만 입력할 수 있습니다. 다시 입력해주세요.",
    unit: "1,000원 단위의 금액만 입력할 수 있습니다. 다시 입력해주세요.",
    range:
      "당첨 번호, 보너스 번호는 1~45사이의 번호만 입력할 수 있습니다. 다시 입력해주세요.",
  },
});

export const READ = Object.freeze({
  coins: "구입금액을 입력해 주세요.\n",
  numbers: "\n당첨 번호를 입력해 주세요.\n",
  bonusNumber: "\n보너스 번호를 입력해 주세요.\n",
});

export const PRINT = Object.freeze({
  quantity: (quantity) => `\n${quantity}개를 구매했습니다.`,
  userLotto: (lotto) => `[${lotto.join(", ")}]`,
});
