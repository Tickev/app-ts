"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, adresse) {
        this._nom = nom;
        this._prenom = prenom;
        this._adresse = adresse;
    }
    Personne.prototype.getNom = function () {
        return this._nom;
    };
    Personne.prototype.getPrenom = function () {
        return this._prenom;
    };
    Personne.prototype.getAdresse = function () {
        return this._adresse.getFullAdresse();
    };
    Personne.prototype.setAdresse = function (adresse) {
        this._adresse = adresse;
    };
    Personne.prototype.getFullInfos = function () {
        return "nom : ".concat(this._nom, " + pr\u00E9nom : ").concat(this._prenom, " adresse : ").concat(this._adresse.getFullAdresse());
    };
    return Personne;
}());
exports.Personne = Personne;
