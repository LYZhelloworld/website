import { charToBin, convertToQuadrants } from "@/utils/bin";

describe("charToBin", () => {
  it("should convert a character to a binary string", () => {
    const bin = charToBin("a");
    expect(bin).toBe("01100001");
  });
  it("should convert a number to a binary string", () => {
    const bin = charToBin(97);
    expect(bin).toBe("01100001");
  });
});

describe("convertToQuadrants", () => {
  it("should convert a binary string to quadrant symbols", () => {
    const bin = convertToQuadrants("01100001");
    expect(bin).toBe("&#9626;&#9630;&#9630;&#9626;&#9626;&#9626;&#9626;&#9630;");
  });
});