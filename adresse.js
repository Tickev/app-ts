"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    function Adresse(rue, cp, ville) {
        this._rue = rue;
        this._cp = cp;
        this._ville = ville;
    }
    Adresse.prototype.getRue = function () {
        return this._rue;
    };
    Adresse.prototype.getCp = function () {
        return this._cp;
    };
    Adresse.prototype.getVille = function () {
        return this._ville;
    };
    Adresse.prototype.setRue = function (rue) {
        this._rue = rue;
    };
    Adresse.prototype.setCp = function (cp) {
        this._cp = cp;
    };
    Adresse.prototype.setVille = function (ville) {
        this._ville = ville;
    };
    Adresse.prototype.getFullAdresse = function () {
        return "rue : ".concat(this._rue, " code postale :  ").concat(this._cp, " ville : ").concat(this._ville);
    };
    return Adresse;
}());
exports.Adresse = Adresse;
