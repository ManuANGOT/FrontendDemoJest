import { calculerBenefice } from "./Exercice3";

describe("GIVEN : Je veux utiliser ma vérif de bénef/perte", () => {
  describe("WHEN : J'ai dépensé 10€ et j'en gagne 20", () => {
    it("THEN ; J'ai gagné 10€", () => {
      expect(calculerBenefice(20, 10)).toBe("gain de 10€, j'aime l'argent ! <3");
    });
  });
  describe("WHEN : J'ai dépensé 10€ et j'en gagne 20", () => {
    it("THEN ; J'ai gagné 10€", () => {
      expect(calculerBenefice(20, 10)).toBe("Perte de 10€, ALED");
    });
  });
  describe("WHEN : J'ai dépensé 10€ et j'en gagne 20", () => {
    it("THEN ; J'ai gagné 10€", () => {
      expect(calculerBenefice(20, 10)).toBe("Vive le bénévolat ! J'ai l'impression d'être un stagiaire.");
    });
  });
});
