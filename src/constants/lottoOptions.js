export const LOTTO_OPTIONS = Object.freeze({
  regex: /^(?:[1-9]|[1-3][0-9]|40|4[1-5])$/,
  coinRegex: /^\d+$/,
  length: 6,
  spliter: ",",
  coinUnit: 1000,
  min: 1,
  max: 45,
});

export const PRIZE = Object.freeze({
  fifth: 5000,
  fourth: 50000,
  third: 1500000,
  second: 30000000,
  first: 2000000000,
});

export const RANK_INDEX = Object.freeze({
  0: "first",
  1: "second",
  2: "third",
  3: "fourth",
  4: "fifth",
});
