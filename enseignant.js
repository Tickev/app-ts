"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enseignant = void 0;
var personne_1 = require("./personne");
var Enseignant = /** @class */ (function (_super) {
    __extends(Enseignant, _super);
    function Enseignant(nom, prenom, adresse, specialite, statut) {
        var _this = _super.call(this, nom, prenom, adresse) || this;
        _this._specialite = specialite;
        _this._statut = statut;
        return _this;
    }
    Enseignant.prototype.getSpecialite = function () {
        return this._specialite;
    };
    Enseignant.prototype.getStatut = function () {
        return this._statut;
    };
    Enseignant.prototype.setSpecialite = function (specialite) {
        this._specialite = specialite;
    };
    Enseignant.prototype.setStatut = function (statut) {
        this._statut = statut;
    };
    Enseignant.prototype.getFullInfos = function () {
        return "".concat(_super.prototype.getFullInfos.call(this), " sp\u00E9cialit\u00E9 : ").concat(this._specialite, " statut : ").concat(this._statut);
    };
    return Enseignant;
}(personne_1.Personne));
exports.Enseignant = Enseignant;
