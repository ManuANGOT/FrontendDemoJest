import { plusGrandNombre } from "./Exercice4";

describe("GIVEN : Je veux comparer mes trois nombres", () => {
  describe("WHEN : plusGrandNombre = 1", () => {
    describe("WHEN : nombre2 > plusGrandNombre", () => {
      describe("WHEN : plusGrandNombre<3", () => {
        it("THEN : Le plus grand nombre est 90 <3", () => {
          expect(plusGrandNombre(3, 8, 90)).toBe(
            "Le plus grand nombre est 90 <3"
          );
        });
      });
    });
  });
});
