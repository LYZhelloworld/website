// Converts a character to a binary string.
export function charToBin(char: string | number): string {
  let bin;
  if (typeof char === "number") {
    bin = char.toString(2);
  } else if (typeof char === "string") {
    bin = char.charCodeAt(0).toString(2);
  } else {
    throw Error("Invalid type");
  }
  if (bin.length < 8) {
    bin = "0".repeat(8 - bin.length) + bin;
  }
  return bin;
}

// Converts a binary string to quadrant symbols.
export function convertToQuadrants(bin: string): string {
  const zero = "&#9626;";
  const one = "&#9630;";
  bin = bin.replace(/0/g, zero);
  bin = bin.replace(/1/g, one);
  return bin;
}
