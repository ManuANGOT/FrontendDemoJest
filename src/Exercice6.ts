// Bulletin : Nom du gars, notes
// calculer la moyenne
// Vérifier note
// Si note inférieur à 0 et supérieure à 20 : PAS PRISE EN COMPTE
// Additionner toutes les valeurs et diviser par le nombre de valeurs
// Retourner la moyenne
// Définir la mention
// Si c'est inférieur à 4 : catastrophe
// Inférieur à 10 : insuffisant
// Inférieur à 14 : Passable
// inférieur à 18 : bien
// inférieur à 20 : TB

/**
 * Vérifie que la note est bien comprise entre 0 et 20
 * @param note note à vérifier
 * @returns true si ok, false si ko
 */
function verifierNote(note: number): boolean {
  if (note < 0 || note > 20) {
    return false;
  } else {
    return true;
  }
}

/**
 * Calcule la moyenne d'un élève à partir de la liste de ses notes
 * @param notes liste de notes
 * @returns la moyenne sur 20
 */
function calculerMoyenne(...notes: number[]): number {
  let moyenne = 0;
  for (let note of notes) {
    if (verifierNote(note)) {
      moyenne += note;
    } else {
      console.log(
        `La note ${note} a été ignorée car non valide ! DSL GROS, DES BISOUS <3`
      );
    }
  }
  return moyenne / notes.length;
}

/**
 * Attribue une mention en fonction de la moyenne :)
 * @param moyenne la moyenne à vérifier
 * @returns une mention
 */
function definirMention(moyenne: number): string {
  if (moyenne < 4) {
    return "catastrophique :'(";
  } else if (moyenne < 10) {
    return "insuffisant :/";
  } else if (moyenne < 14) {
    return "Bien mais pas top :|";
  } else if (moyenne < 18) {
    return "Pas mal, gj ! :) <3";
  } else {
    return "Tu déchires gros ! :D <3 <3 <3";
  }
}

/**
 * Retourne le bulltin d'un elève
 * @param nomEleve nom de l'élève
 * @param notes notes de l'élève
 * @returns bulletin et appréciation
 */
function bulletin(nomEleve: string, ...notes: number[]): string {
  let moyenne: number = calculerMoyenne(...notes);
  let mention: string = definirMention(moyenne);
  return `${nomEleve} a une moyenne de ${moyenne}, son travail est donc ${mention} !`;
}

const bulletinTheodule: string = bulletin(
  "Théodule",
  5,
  8,
  20,
  6,
  9,
  15,
  12,
  11,
  5,
  7
);

console.log(bulletinTheodule);
