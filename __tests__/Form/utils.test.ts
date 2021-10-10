import { validateString } from "components/Form/utils";

describe("form utils", () => {
  // required validates in validateSchema
  describe("validateString", () => {
    it("min", () => {
      expect(validateString("1234", { min: 5 })).toBe("Минимум 5 символов");
    });
    it("max", () => {
      expect(validateString("1234567", { max: 5 })).toBe("Максимум 5 символов");
    });
    describe("pattern", () => {
      const pattern = "[\\d\\s]+"; // only spaces and digits
      it("invalid", () => {
        expect(validateString("1 two 3 4 5", { pattern })).toBe(
          "Значение не соответствует шаблону ввода"
        );
      });
      it("valid", () => {
        expect(validateString("1 2 3 4 5", { pattern })).toBe("");
      });
    });

    describe("multiple validation", () => {
      const schema = { min: 5, max: 10, pattern: "\\d+" };

      it("first validation failed", () => {
        expect(validateString("1234", schema)).toBe("Минимум 5 символов");
      });

      it("another validation failed", () => {
        expect(validateString("123456a", schema)).toBe(
          "Значение не соответствует шаблону ввода"
        );
      });
    });
  });
});
