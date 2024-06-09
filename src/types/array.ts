let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let names: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
let names2: Array<string> = ["a", "b", "c", "d", "e", "f", "g"];

let names3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 1, 2];
let names4 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  1,
  2,
  3,
  false,
  true,
];

let names5: (string | number)[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  1,
  2,
  3,
];
let names6: Array<string | number> = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  1,
  2,
  3,
  4,
  5,
  6,
];

console.log("names6 a = ", names6[0]);

let names7: string[];

names7 = ["Tony", "Steve", "John"];

console.log(names7.pop()); // removes John and return it

console.log("names7 = ", names7);
