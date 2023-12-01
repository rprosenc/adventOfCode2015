import run from "aocrunner";
import { exit } from "process";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let total = 0;
  for (let i = 0; i < input.length; i++) {
    const [l, w, h] = input[i].split("x").map((x) => parseInt(x));
    const squares = [l*w, w*h, h*l];
    squares.sort((a,b)=>a-b); // sort ascending by numeric value (instead of lexicographically)
    total += 2*squares[0] + 2*squares[1] + 2*squares[2] + squares[0]; // all six sides plus smallest side as slack
  }

  return total;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let total = 0;
  for (let i = 0; i < input.length; i++) {
    const sides = input[i].split("x").map((x) => parseInt(x));
    sides.sort((a,b)=>a-b); // sort ascending by numeric value (instead of lexicographically)
    total += 2*sides[0] + 2*sides[1] + (sides[0]*sides[1]*sides[2]); // all six sides plus smallest side as slack
  }
  
  return total;
};

run({
  part1: {
    tests: [
      {
        input: `2x3x4`,
        expected: 58,
      },
      {
        input: `1x1x10`,
        expected: 43,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `2x3x4`,
        expected: 34,
      },
      {
        input: `1x1x10`,
        expected: 14,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
