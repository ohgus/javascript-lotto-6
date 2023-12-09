class Lotto {
  #numbers;

  constructor(numbers, customerLottos) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.customerLottos = customerLottos;
  }

  getRankInfo(bonusNumber) {
    const rankInfo = Array.from({ length: 5 }, () => 0);

    return this.#calculateRank(bonusNumber, rankInfo);
  }

  #calculateRank(bonusNumber, rankInfo) {
    this.customerLottos.forEach((lotto) => {
      const matchCount = this.#countMatch(lotto, this.#numbers);
      const haveBonus = this.#checkBonus(lotto, bonusNumber);

      if (matchCount === 3) return (rankInfo[4] += 1);
      if (matchCount === 4) return (rankInfo[3] += 1);
      if (matchCount === 5 && !haveBonus) return (rankInfo[2] += 1);
      if (matchCount === 5 && haveBonus) return (rankInfo[1] += 1);
      if (matchCount === 6) return (rankInfo[0] += 1);
    });

    return rankInfo;
  }

  #countMatch(customerLotto, winningNumbers) {
    let match = 0;

    customerLotto.forEach((number) => {
      if (winningNumbers.includes(number)) match += 1;
    });

    return match;
  }

  #checkBonus(lotto, bonusNumber) {
    return lotto.includes(Number(bonusNumber));
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

export default Lotto;

const lotto = new Lotto([1, 2, 3, 4, 5, 6], [[1, 2, 3, 4, 5, 6]]);
console.log(lotto.getRankInfo(7));
