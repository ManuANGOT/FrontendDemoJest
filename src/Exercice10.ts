/**
 * Retourne la température la plus proche de zéro !
 * @param temperatures liste de températures
 * @returns température
 */
function temperaturePlusProcheDeZero(...temperatures: number[]): number {
    let plusProcheDeZero = temperatures[0];
    for (let temperature of temperatures) {
        if (Math.abs(temperature) < Math.abs(plusProcheDeZero)) {
            plusProcheDeZero = temperature
        }
    }
    return plusProcheDeZero;
}