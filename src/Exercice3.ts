/**
 * Calcul le bénéfice ou la perte d'une transaction en fonction de son cout et de on prix de vente
 * @param prixVente prix d'achat du produit
 * @param coutFabrication prix de vente du produit
 * @returns Une phrase qui indique le bénéfice/perte
 */
export function calculerBenefice(prixVente: number, coutFabrication: number): string {
  
    const benefice: number = prixVente - coutFabrication;
  
    if (benefice < 0) {
    return `Perte de ${-benefice}€, ALED`;
  } else if (benefice > 0) {
    return `Gain de ${benefice}€, j'aime l'argent ! <3`;
  } else {
    return `Vive le bénévolat ! J'ai l'impression d'être un stagiaire.`;
  }
}

console.log(calculerBenefice(10, 20));
console.log(calculerBenefice(20, 10));
console.log(calculerBenefice(10, 10));
