let a = 1;
if (true) a = 2; // SyntaxError: Lexical declaration cannot appear in a single-statement context
if (true) {
  const b = 1;
} // SyntaxError: Lexical declaration cannot appear in a single-statement context
if (true) var b = 1;
