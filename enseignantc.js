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
exports.EnseignantC = void 0;
var enseignant_1 = require("./enseignant");
var EnseignantC = /** @class */ (function (_super) {
    __extends(EnseignantC, _super);
    function EnseignantC(nom, prenom, adresse, specialite, statut, universite) {
        var _this = _super.call(this, nom, prenom, adresse, specialite, statut) || this;
        _this._universite = universite;
        return _this;
    }
    EnseignantC.prototype.getUniv = function () {
        return this._universite;
    };
    EnseignantC.prototype.setUniv = function (universite) {
        this._universite = universite;
    };
    EnseignantC.prototype.getFullInfos = function () {
        return "".concat(_super.prototype.getFullInfos.call(this), " universit\u00E9 : ").concat(this._universite);
    };
    return EnseignantC;
}(enseignant_1.Enseignant));
exports.EnseignantC = EnseignantC;
