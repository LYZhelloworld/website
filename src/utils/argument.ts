/**
 * Parses arguments into string array.
 * 
 * The leading/trailing spaces will be ignored.
 * Multiple spaces between arguments will be treated as one space.
 * 
 * The backslash `\` will escape the following character:
 * - ` `: a single space (not considered as an argument separator).
 * - `\`: a backslash (`\`).
 * - `n`: a newline.
 * - `r`: **ignored**. This is not considered as a newline. Please use `\n` instead.
 * - `t`: a tab.
 * - `"`: a double quote (`"`).
 * - other: the character as it is.
 * 
 * When a text is quoted with double quotes `""`, the spaces will be preserved.
 * Do note that the backslash escaping is still available in double quotes.
 * 
 * @param {string} command The command to parse.
 * @returns A string array with parsed arguments.
 * @throws when a backslash is not followed by a character, or a quote is not closed.
 */
export function parseArguments(command: string): string[] {
  // Whether the previous character is a backslash.
  let isEscaping = false;

  // Whether the current content is in double quote.
  let isInQuote = false;

  const result: string[] = [];
  let argumentBuffer = "";

  for (let i = 0; i < command.length; i++) {
    const c = command.charAt(i);

    // Escape mode (higher priority than quote mode).
    if (isEscaping) {
      switch (c) {
        case " ":
        case "\\":
          argumentBuffer += c;
          break;
        case "n":
          argumentBuffer += "\n";
          break;
        case "r":
          break;
        case "t":
          argumentBuffer += "\t";
          break;
        case '"':
          argumentBuffer += '"';
          break;
        default:
          argumentBuffer += "\\" + c;
          break;
      }

      isEscaping = false;
      continue;
    }

    // Quit quote mode.
    if (isInQuote) {
      if (c === '"') {
        isInQuote = false;
        continue;
      }
    }

    // Normal mode.
    switch (c) {
      case " ":
        if (isInQuote) {
          argumentBuffer += c;
          continue;
        }

        // Separator between arguments.
        // If the buffer contains characters, put them at the end of the arguments.
        // Otherwise, ignore.
        if (argumentBuffer) {
          // New argument.
          result.push(argumentBuffer);
          argumentBuffer = "";
        }

        break;
      case "\\":
        isEscaping = true;
        break;
      case '"':
        isInQuote = true;
        break;
      default:
        argumentBuffer += c;
        break;
    }
  }

  // At the end of a line, both the escape mode and the quote mode should be false.
  if (isEscaping) {
    throw new Error("The backslash must be followed by a character.");
  }

  if (isInQuote) {
    throw new Error("The double quote is not closed.");
  }

  // Check if there are remaining characters in the buffer.
  if (argumentBuffer) {
    result.push(argumentBuffer);
  }

  return result;
}
