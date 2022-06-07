import {
  generateSecret,
  getRandomNumberInRange,
  shifting,
} from "@/utils/secret";

describe("generateSecret", () => {
  it("should generate a random secret string", () => {
    const secret = generateSecret();
    expect(secret).toBeDefined();
    expect(secret.match(/^[a-z0-9]{6,12}$/i)).toBeTruthy();
  });
});

describe("getRandomNumberInRange", () => {
  it("should generate a random number in range [min, max)", () => {
    const number = getRandomNumberInRange(1, 100);
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThan(100);
  });
});

describe("shifting", () => {
  it("should shift the text on ASCII table by a given number", () => {
    const plainText = "abcdefghijklmnopqrstuvwxyz";
    const cipherText = shifting(plainText, 5);
    expect(cipherText).toBe("fghijklmnopqrstuvwxyzabcde");
  });
});
