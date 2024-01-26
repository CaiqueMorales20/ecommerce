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

// src/services/UserServices.ts
var UserServices_exports = {};
__export(UserServices_exports, {
  default: () => UserServices_default
});
module.exports = __toCommonJS(UserServices_exports);

// src/db/script.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/services/UserServices.ts
var UserServices = class {
  async getAllUser() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch {
      throw new Error("No user found");
    }
  }
  async getUserById(id) {
    try {
      const user = await prisma.user.findUnique({
        where: { id }
      });
      if (!user)
        throw new Error("User not found");
      return user;
    } catch (err) {
      throw err;
    }
  }
  async createUser(name, email) {
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        }
      });
      return user;
    } catch (err) {
      throw err;
    }
  }
  async updateUser(id, name, email) {
    try {
      const user = prisma.user.update({
        where: { id },
        data: {
          name,
          email
        }
      });
      return user;
    } catch {
      throw new Error("User not found");
    }
  }
  async deleteUser(id) {
    try {
      const deletedUser = await prisma.user.delete({
        where: { id }
      });
      return deletedUser;
    } catch {
      throw new Error("User not found");
    }
  }
};
var UserServices_default = UserServices;
