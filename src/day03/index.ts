import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split('');

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total = 1;
  const visited:Record<string,boolean> = {"0 0": true}
  let x = 0;
  let y = 0;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === '^') {
      y++;
    } else if (c === 'v') {
      y--;
    } else if (c === '>') {
      x++;
    } else if (c === '<') {
      x--;
    }
    const key = `${x} ${y}`;
    if (!visited[key]) {
      total++;
      visited[key]=true;
    }
  }

  return total;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let total = 1;
  const visited:Record<string,boolean> = {"0 0": true}
  let x = 0;
  let y = 0;
  let rx = 0;
  let ry = 0;
  for (let i = 0; i < input.length; i+=2) {
    switch (input[i]) {
      case '^':
        y++;
        break;
      case 'v':
        y--;
        break;
      case '>':
        x++;
        break;
      case '<':
        x--;
        break;
    }
    switch (input[i+1]) {
      case '^':
        ry++;
        break;
      case 'v':
        ry--;
        break;
      case '>':
        rx++;
        break;
      case '<':
        rx--;
        break;
    }
    const key = `${x} ${y}`;
    if (!visited[key]) {
      total++;
      visited[key]=true;
    }
    const keyR = `${rx} ${ry}`;
    if (!visited[keyR]) {
      total++;
      visited[keyR]=true;
    }
  }

  return total;
};

run({
  part1: {
    tests: [
      {
        input: `>`,
        expected: 2,
      },
      {
        input: `^>v<`,
        expected: 4,
      },
      {
        input: `^v^v^v^v^v`,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `^v`,
        expected: 3,
      },      {
        input: `^>v<`,
        expected: 3,
      },      {
        input: `^v^v^v^v^v`,
        expected: 11,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
