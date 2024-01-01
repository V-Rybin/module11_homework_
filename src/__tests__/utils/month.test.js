import { getMonth } from "../../utils/month.js";

describe("Проверка месяца", () => {
  it("1 = январь", () => expect(getMonth(1)).toBe("январь"));
  it("2 = февраль", () => expect(getMonth(2)).toBe("февраль"));
  it("3 = март", () => expect(getMonth(3)).toBe("март"));
  it("4 = апрель", () => expect(getMonth(4)).toBe("апрель"));
  it("5 = май", () => expect(getMonth(5)).toBe("май"));
  it("6 = июнь", () => expect(getMonth(6)).toBe("июнь"));
  it("7 = июль", () => expect(getMonth(7)).toBe("июль"));
  it("8 = август", () => expect(getMonth(8)).toBe("август"));
  it("9 = сентябрь", () => expect(getMonth(9)).toBe("сентябрь"));
  it("10 = октябрь", () => expect(getMonth(10)).toBe("октябрь"));
  it("11 = ноябрь", () => expect(getMonth(11)).toBe("ноябрь"));
  it("12 = декабрь", () => expect(getMonth(12)).toBe("декабрь"));
  it("0 = error", () => expect(getMonth(0)).toBe("Число не должно быть меньше единицы"));
  it("1.1 = error", () => expect(getMonth(1.1)).toBe("Число должно быть целым"));
  
});