import { countDown } from "../../utils/count.js";

describe("Проверка счета на убывание", () => {
  it("3 = 321", () => expect(countDown(3)).toBe("321"));
  it("7 = 7654321", () => expect(countDown(7)).toBe("7654321"));
  it("0 = error", () => expect(countDown(0)).toBe("Число не может быть меньше единицы"));
  it("60 = error", () => expect(countDown(60)).toBe("Число не может быть больше пятидесяти"));
  it("10.2 = error", () => expect(countDown(10.2)).toBe("Число должно быть целым"));
});
