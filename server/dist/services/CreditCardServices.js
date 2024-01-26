"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/services/CreditCardServices.ts
var CreditCardServices_exports = {};
__export(CreditCardServices_exports, {
  default: () => CreditCardServices_default
});
module.exports = __toCommonJS(CreditCardServices_exports);

// src/db/script.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/services/CreditCardServices.ts
var CreditCardServices = class {
  async getAllCreditCards() {
    try {
      const CreditCards = await prisma.creditCard.findMany();
      return CreditCards;
    } catch {
      throw new Error("No CreditCard found");
    }
  }
  async getCreditCardById(id) {
    try {
      const CreditCard = await prisma.creditCard.findUnique({
        where: { cardId: id }
      });
      if (!CreditCard)
        throw new Error("CreditCard not found");
      return CreditCard;
    } catch (err) {
      throw err;
    }
  }
  async createCreditCard(userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress) {
    try {
      const CreditCard = await prisma.creditCard.create({
        data: {
          userId,
          name,
          cardNumber,
          cardHolder,
          expirationDate,
          cvv,
          billingAddress
        }
      });
      return CreditCard;
    } catch (err) {
      throw err;
    }
  }
  async updateCreditCard(id, userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress) {
    try {
      const CreditCard = prisma.creditCard.update({
        where: { cardId: id },
        data: {
          userId,
          name,
          cardNumber,
          cardHolder,
          expirationDate,
          cvv,
          billingAddress
        }
      });
      return CreditCard;
    } catch {
      throw new Error("CreditCard not found");
    }
  }
  async deleteCreditCard(id) {
    try {
      const deletedCreditCard = await prisma.creditCard.delete({
        where: { cardId: id }
      });
      return deletedCreditCard;
    } catch {
      throw new Error("CreditCard not found");
    }
  }
};
var CreditCardServices_default = CreditCardServices;
