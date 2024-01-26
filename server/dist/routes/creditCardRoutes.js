"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/creditCardRoutes.ts
var creditCardRoutes_exports = {};
__export(creditCardRoutes_exports, {
  default: () => creditCardRoutes_default
});
module.exports = __toCommonJS(creditCardRoutes_exports);
var import_express = __toESM(require("express"));

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

// src/routes/creditCardRoutes.ts
var creditCardRouter = import_express.default.Router();
var creditCardService = new CreditCardServices_default();
creditCardRouter.get("/", async (req, res) => {
  try {
    const creditCards = await creditCardService.getAllCreditCards();
    res.send(creditCards).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
creditCardRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const creditCard = await creditCardService.getCreditCardById(id);
    res.send(creditCard).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
creditCardRouter.post("/", async (req, res) => {
  const { userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress } = req.body;
  try {
    const creditCard = await creditCardService.createCreditCard(userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress);
    res.send(creditCard).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
creditCardRouter.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress } = req.body;
  try {
    const creditCard = await creditCardService.updateCreditCard(id, userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress);
    res.send(creditCard).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
creditCardRouter.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const creditCard = await creditCardService.deleteCreditCard(id);
    res.send(creditCard).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
var creditCardRoutes_default = creditCardRouter;
