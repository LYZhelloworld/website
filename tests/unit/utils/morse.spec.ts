import { convertToMorseCode } from "@/utils/morse";

describe("convertToMorseCode", () => {
  it("should return correct morse code", () => {
    expect(convertToMorseCode("CQ CQ CQ")).toBe(
      "-.-./--.- -.-./--.- -.-./--.-"
    );
    expect(convertToMorseCode("CQ CQ CQ\nDE ABCDEF\nK")).toBe(
      "-.-./--.- -.-./--.- -.-./--.-\n-../. .-/-.../-.-./-.././..-.\n-.-"
    );
  });
});
