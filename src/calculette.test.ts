import Calculatrice from "./calculette";

describe("La méthode eval()", () => {
  test("1 + 1 = 2", () => {
    expect(eval("1 + 1")).toBe(2);
  });
  test("3 * 6", () => {
    expect(eval("3 * 6")).toBe(18);
  });
});

//-----------------------------//

let calculatrice: Calculatrice;

beforeAll(() => {
  console.log("Avant tous les tests");
  calculatrice = new Calculatrice();
});

describe("Calculatrice", () => {
  describe("addition", () => {
    it("1+1", () => {
      expect(calculatrice.calculer("1 + 1")).toBe(2);
    });
  });

  //-----------------------------//
  describe("Division", () => {
    it("10 / 2", () => {
      expect(calculatrice.calculer("10 / 2")).toBe(5);
    });
    it("10 / 0", () => {
      expect(calculatrice.calculer(" 10 / 0")).toBe(Infinity);
    });
  });

  //-----------------------------//









});
