"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adresse_1 = require("./adresse");
var personne_1 = require("./personne");
var enseignant_1 = require("./enseignant");
var enseignantc_1 = require("./enseignantc");
var adresse = new adresse_1.Adresse("rue de la paix", "75000", "Paris");
var adresse2 = new adresse_1.Adresse("36 rue des cordeliers", "77100", "Meaux");
var personne = new personne_1.Personne("François", "Titouan", adresse);
var personne2 = new personne_1.Personne("Dupont", "Jean", adresse2);
var personnetab = [personne, personne2];
var adressestab = [adresse, adresse2];
// for(let personne of personnetab){
//     console.log(`Nom de la personne : ${personne.getNom()}`);
//     console.log(`Prénom de la personne : ${personne.getPrenom()}`);
//     console.log(`Adresse de la personne ${personne.getAdresse()}`);
//     console.log(`Full infos : ${personne.getFullInfos()}`);
// }
// for(let adresse of adressestab){
//     console.log("Adresse avant modif");
//     console.log(`Rue : ${adresse.getRue()}`);
//     console.log(`Code postale : ${adresse.getCp()}`);
//     console.log(`Ville : ${adresse.getVille()}`);
//     console.log(`Full adresse : ${adresse.getFullAdresse()}`);
// }
// personne.setAdresse(adresse2);
// adresse2.setRue("rue des fleurs");
// adresse2.setCp("60330");
// adresse2.setVille("Le Plessis Belleville");
// for(let adresse of adressestab){
//     console.log("Adresse après modif");
//     console.log(`Rue : ${adresse.getRue()}`);
//     console.log(`Code postale : ${adresse.getCp()}`);
//     console.log(`Ville : ${adresse.getVille()}`);
//     console.log(`Full adresse : ${adresse.getFullAdresse()}`);
// }
var enseignant1 = new enseignant_1.Enseignant("Ducos", "Nathalie", adresse, "Maths", "Prof");
console.log(enseignant1.getFullInfos());
var EnseignantC1 = new enseignantc_1.EnseignantC("Ducos", "Frédérique", adresse2, "Français", "Prof", "Sorbonne");
console.log(EnseignantC1.getFullInfos());
EnseignantC1.setUniv("Sorbonne Nouvelle");
console.log(EnseignantC1.getFullInfos());
