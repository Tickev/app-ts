export class Adresse{
    private _rue: string;
    private _cp: string;
    private _ville: string;

    constructor(rue: string, cp: string, ville: string){
        this._rue = rue;
        this._cp = cp;
        this._ville = ville;
    }

    public getRue(): string{
        return this._rue;
    }

    public getCp(): string{
        return this._cp;
    }

    public getVille(): string{
        return this._ville;
    }

    public setRue(rue: string): any{
        this._rue = rue;
    }

    public setCp(cp: string): any{
        this._cp = cp;
    }

    public setVille(ville: string): any{
        this._ville = ville;
    }

    public getFullAdresse(): string{
        return `rue : ${this._rue} code postale :  ${this._cp} ville : ${this._ville}`;
    }
}