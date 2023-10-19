import {Adresse} from "./adresse";
export class Personne{
    private _nom: string;
    private _prenom: string;
    private _adresse: Adresse;

    constructor(nom: string, prenom: string, adresse: Adresse){
        this._nom = nom;
        this._prenom = prenom;
        this._adresse = adresse;
    }

    public getNom(): string{
        return this._nom;
    }

    public getPrenom(): string{
        return this._prenom;
    }

    public getAdresse(): string{
        return this._adresse.getFullAdresse();
    }

    public setAdresse(adresse: Adresse): any{
        this._adresse = adresse;
    }

    public getFullInfos(): string{
        return `nom : ${this._nom} + prénom : ${this._prenom} adresse : ${this._adresse.getFullAdresse()}`;
    }
}