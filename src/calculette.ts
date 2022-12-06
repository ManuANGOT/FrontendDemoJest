export default class Calculatrice {
  /**
   * effectue un calcul à l'aide la méthode eval
   * @param operation opération à effectuer
   * @return résultat de l'opération
   */
  public calculer(operation: string): number {
    return eval(operation);
  }
}
 