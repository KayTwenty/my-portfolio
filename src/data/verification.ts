export interface Challenge {
  question: string;
  isCorrect: (input: string) => boolean;
}

function normalize(input: string): string {
  return input.trim().toLowerCase();
}

function mathChallenge(): Challenge {
  const operations = ["×", "÷"] as const;
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let num1: number;
  let num2: number;
  let answer: number;

  if (operation === "÷") {
    // For division, ensure clean division with no remainders
    num2 = Math.floor(Math.random() * 10) + 2; // divisor: 2-11
    const quotient = Math.floor(Math.random() * 10) + 2; // result: 2-11
    num1 = num2 * quotient;
    answer = quotient;
  } else {
    num1 = Math.floor(Math.random() * 12) + 2; // 2-13
    num2 = Math.floor(Math.random() * 12) + 2; // 2-13
    answer = num1 * num2;
  }

  return {
    question: `${num1} ${operation} ${num2} = ?`,
    isCorrect: (input) => normalize(input) === String(answer),
  };
}

function sequenceChallenge(): Challenge {
  if (Math.random() < 0.5) {
    // Geometric: start * ratio^i
    const ratio = Math.random() < 0.5 ? 2 : 3;
    const start = Math.floor(Math.random() * 3) + 1;
    const terms = [0, 1, 2, 3, 4].map((i) => start * ratio ** i);
    return {
      question: `Complete the sequence: ${terms.slice(0, 4).join(", ")}, ?`,
      isCorrect: (input) => normalize(input) === String(terms[4]),
    };
  }

  // Arithmetic: start + step*i
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 8) + 2;
  const terms = [0, 1, 2, 3, 4].map((i) => start + step * i);
  return {
    question: `Complete the sequence: ${terms.slice(0, 4).join(", ")}, ?`,
    isCorrect: (input) => normalize(input) === String(terms[4]),
  };
}

function fibonacciChallenge(): Challenge {
  const seeds: [number, number][] = [
    [1, 1],
    [1, 2],
    [2, 3],
  ];
  const [a0, b0] = seeds[Math.floor(Math.random() * seeds.length)];
  const terms = [a0, b0];
  for (let i = 2; i < 6; i++) terms.push(terms[i - 1] + terms[i - 2]);

  return {
    question: `What comes next: ${terms.slice(0, 5).join(", ")}, ?`,
    isCorrect: (input) => normalize(input) === String(terms[5]),
  };
}

const staticPool: { question: string; answers: string[] }[] = [
  { question: "Complete the pattern: A, C, E, G, ?", answers: ["i"] },
  { question: "Hand is to Glove as Foot is to ___?", answers: ["sock", "shoe"] },
  { question: "Which one doesn't belong: Circle, Square, Triangle, Sphere?", answers: ["sphere"] },
  { question: "Which one doesn't belong: Salmon, Trout, Dolphin, Bass?", answers: ["dolphin"] },
  { question: "Book is to Reading as Fork is to ___?", answers: ["eating"] },
  { question: "Which one doesn't belong: Perl, Python, TypeScript, Broccoli?", answers: ["broccoli"] },
  { question: "Loud is to Quiet as Fast is to ___?", answers: ["slow"] },
  { question: "Which number is the odd one out: 2, 4, 6, 7, 8?", answers: ["7"] },
  { question: "All Zips are Zaps. All Zaps are Zops. Are all Zips Zops? (yes/no)", answers: ["yes", "y"] },
  { question: "Which one doesn't belong: Hammer, Screwdriver, Wrench, Banana?", answers: ["banana"] },
  { question: "Water is to Ice as Liquid is to ___?", answers: ["solid"] },
];

function staticChallenge(): Challenge {
  const item = staticPool[Math.floor(Math.random() * staticPool.length)];
  return {
    question: item.question,
    isCorrect: (input) => item.answers.includes(normalize(input)),
  };
}

// staticChallenge appears twice to give the curated riddle/analogy pool as much
// weight as the procedural math/sequence/fibonacci generators combined.
const generators = [mathChallenge, sequenceChallenge, fibonacciChallenge, staticChallenge, staticChallenge];

export function getRandomChallenge(): Challenge {
  const generator = generators[Math.floor(Math.random() * generators.length)];
  return generator();
}
