import {Personne} from "./personne";
import {Adresse} from "./adresse";
import { Enseignant } from "./enseignant";

export class EnseignantC extends Enseignant {
    private _universite: string;

    constructor(nom: string, prenom: string, adresse: Adresse, specialite: string, statut: string, universite: string){
        super(nom, prenom, adresse, specialite, statut);
        this._universite = universite;
    }

    public getUniv(): string{
        return this._universite;
    }

    public setUniv(universite: string): any{
        this._universite = universite;
    }

    public getFullInfos(): string{
        return `${super.getFullInfos()} université : ${this._universite}`;
    }
}
