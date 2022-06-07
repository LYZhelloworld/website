import { generateSecret } from "@/utils/secret";

describe("secret.ts", () => {
  it("should generate a random secret string", () => {
    const secret = generateSecret();
    expect(secret).toBeDefined();
    expect(secret.match(/^[a-z0-9]{6,12}$/i)).toBeTruthy();
  });
});
