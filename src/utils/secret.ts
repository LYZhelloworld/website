const [minLength, maxLength] = [6, 12];
const letters = "abcdefghijklmnopqrstuvwxyz0123456789";

// Generates a random secret string.
export function generateSecret() {
  const length = getRandomNumberInRange(minLength, maxLength);
  let secret = "";
  for (let i = 0; i < length; i++) {
    secret += generateRandomLetter();
  }
  return secret;
}

// Generates a random lowercase letter or a number.
function generateRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

// Generates a random number in range [min, max).
export function getRandomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Shifts the text (lowercase only) on ASCII table by a given number.
// When it reaches "z" it wraps around to "a".
export function shifting(plainText: string, offset: number): string {
  let cipherText = "";
  for (let i = 0; i < plainText.length; i++) {
    let c = plainText.charCodeAt(i) + offset;
    if (c > "z".charCodeAt(0)) {
      c -= 26;
    }
    cipherText += String.fromCharCode(c);
  }
  return cipherText;
}
