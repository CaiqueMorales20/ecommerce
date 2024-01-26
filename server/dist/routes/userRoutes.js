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

// src/routes/userRoutes.ts
var userRoutes_exports = {};
__export(userRoutes_exports, {
  default: () => userRoutes_default
});
module.exports = __toCommonJS(userRoutes_exports);
var import_express = __toESM(require("express"));

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

// src/routes/userRoutes.ts
var userRouter = import_express.default.Router();
var userService = new UserServices_default();
userRouter.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUser();
    res.send(users).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
userRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await userService.getUserById(id);
    res.send(user).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
userRouter.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await userService.createUser(name, email);
    res.send(user).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
userRouter.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  try {
    const user = await userService.updateUser(id, name, email);
    res.send(user).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
userRouter.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await userService.deleteUser(id);
    res.send(user).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
var userRoutes_default = userRouter;
