import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split('');

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return input.reduce((acc,curr,i, a)=>{return acc+=curr==='('?1:-1;}, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let acc = 0;
  for (let i = 0; i < input.length; i++) {
    acc += input[i] === '(' ? 1 : -1;
    if (acc === -1) return i + 1;
  }
};

run({
  part1: {
    tests: [
      {
        input: `(())`,
        expected: 0,
      },
      {
        input: `()()`,
        expected: 0,
      },
      {
        input: `(((`,
        expected: 3,
      },
      {
        input: `(()(()(`,
        expected: 3,
      },
      {
        input: `))(((((`,
        expected: 3,
      },
      {
        input: `())`,
        expected: -1,
      },
      {
        input: `))(`,
        expected: -1,
      },
      {
        input: `)))`,
        expected: -3,
      },
      {
        input: `)())()) `,
        expected: -3,
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
