import { parseArguments } from "@/utils/argument";

describe("parseArgument", () => {
  it("should parse normal commands", () => {
    const result = parseArguments("test a b c");
    expect(result.length).toBe(4);
    expect(result[0]).toBe("test");
    expect(result[1]).toBe("a");
    expect(result[2]).toBe("b");
    expect(result[3]).toBe("c");
  });

  it("should ignore leading/trailing spaces and multiple spaces", () => {
    const result = parseArguments("  test   a   b    c  ");
    expect(result.length).toBe(4);
    expect(result[0]).toBe("test");
    expect(result[1]).toBe("a");
    expect(result[2]).toBe("b");
    expect(result[3]).toBe("c");
  });

  it("should parse escaped characters", () => {
    const result = parseArguments('test a\\ b\\\\c\\nd\\r\\t\\"\\ef');
    expect(result.length).toBe(2);
    expect(result[0]).toBe("test");
    expect(result[1]).toBe('a b\\c\nd\t"\\ef');
  });

  it("should throw exception if there is a trailing backslash", () => {
    expect(() => parseArguments("test \\")).toThrowError(
      "The backslash must be followed by a character."
    );
  });

  it("should parse quotes", () => {
    const result = parseArguments('test "aaa   bbb"');
    expect(result.length).toBe(2);
    expect(result[0]).toBe("test");
    expect(result[1]).toBe("aaa   bbb");
  });

  it("should throw exception if the quote is not closed properly", () => {
    expect(() => parseArguments('test "')).toThrowError(
      "The double quote is not closed."
    );
  });

  it("should parse quotes and escaped characters together", () => {
    const result = parseArguments('test "aaa \\  bbb\\""');
    expect(result.length).toBe(2);
    expect(result[0]).toBe("test");
    expect(result[1]).toBe('aaa   bbb"');
  });
});
