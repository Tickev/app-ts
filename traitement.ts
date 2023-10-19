import {Adresse} from "./adresse";
import {Personne} from "./personne";
import {Enseignant} from "./enseignant";
import { EnseignantC } from "./enseignantc";


let adresse = new Adresse("rue de la paix", "75000", "Paris");
let adresse2 = new Adresse("36 rue des cordeliers", "77100", "Meaux");
let personne = new Personne("François", "Titouan", adresse);
let personne2 = new Personne("Dupont", "Jean", adresse2);

let personnetab : Personne[] = [personne, personne2];
let adressestab : Adresse[] = [adresse, adresse2];

for(let personne of personnetab){
    console.log(`Nom de la personne : ${personne.getNom()}`);
    console.log(`Prénom de la personne : ${personne.getPrenom()}`);
    console.log(`Adresse de la personne ${personne.getAdresse()}`);
    console.log(`Full infos : ${personne.getFullInfos()}`);
}

for(let adresse of adressestab){
    console.log("Adresse avant modif");
    console.log(`Rue : ${adresse.getRue()}`);
    console.log(`Code postale : ${adresse.getCp()}`);
    console.log(`Ville : ${adresse.getVille()}`);
    console.log(`Full adresse : ${adresse.getFullAdresse()}`);
}

personne.setAdresse(adresse2);
adresse2.setRue("rue des fleurs");
adresse2.setCp("60330");
adresse2.setVille("Le Plessis Belleville");


for(let adresse of adressestab){
    console.log("Adresse après modif");
    console.log(`Rue : ${adresse.getRue()}`);
    console.log(`Code postale : ${adresse.getCp()}`);
    console.log(`Ville : ${adresse.getVille()}`);
    console.log(`Full adresse : ${adresse.getFullAdresse()}`);
}

let enseignant1 = new Enseignant("Ducos", "Nathalie", adresse, "Maths", "Prof");
console.log(enseignant1.getFullInfos());

let EnseignantC1 = new EnseignantC("Ducos", "Frédérique", adresse2, "Français", "Prof", "Sorbonne");
console.log(EnseignantC1.getFullInfos());

EnseignantC1.setUniv("Sorbonne Nouvelle");
console.log(EnseignantC1.getFullInfos());



