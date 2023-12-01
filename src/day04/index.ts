import run from "aocrunner";
import {createHash} from "node:crypto";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let result = null;
  let i = 0;
  let hash;
  while (!result) {
    hash = createHash("md5").update(`${input}${i}`).digest("hex");
    if (hash.startsWith("00000")) {
      return i;
    } 

    i++;
  }
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let result = null;
  let i = 0;
  let hash;
  while (!result) {
    hash = createHash("md5").update(`${input}${i}`).digest("hex");
    if (hash.startsWith("000000")) {
      return i;
    } 

    i++;
  }
};

run({
  part1: {
    tests: [
      {
        input: `abcdef`,
        expected: 609043,
      },
      {
        input: `pqrstuv`,
        expected: 1048970,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
