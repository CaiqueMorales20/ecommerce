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

// src/routes/categoryRoutes.ts
var categoryRoutes_exports = {};
__export(categoryRoutes_exports, {
  default: () => categoryRoutes_default
});
module.exports = __toCommonJS(categoryRoutes_exports);
var import_express = __toESM(require("express"));

// src/db/script.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/services/CategoryServices.ts
var CategoryServices = class {
  async getAllCategories() {
    try {
      const Categorys = await prisma.category.findMany();
      return Categorys;
    } catch {
      throw new Error("No Category found");
    }
  }
  async getCategoryById(id) {
    try {
      const Category = await prisma.category.findUnique({
        where: { categoryId: id }
      });
      if (!Category)
        throw new Error("Category not found");
      return Category;
    } catch (err) {
      throw err;
    }
  }
  async createCategory(name, slug, icon) {
    try {
      const Category = await prisma.category.create({
        data: {
          name,
          slug,
          icon,
          createdAt: /* @__PURE__ */ new Date()
        }
      });
      return Category;
    } catch (err) {
      throw err;
    }
  }
  async updateCategory(id, name, slug, icon) {
    try {
      const Category = prisma.category.update({
        where: { categoryId: id },
        data: {
          name,
          slug,
          icon,
          createdAt: /* @__PURE__ */ new Date()
        }
      });
      return Category;
    } catch {
      throw new Error("Category not found");
    }
  }
  async deleteCategory(id) {
    try {
      const deletedCategory = await prisma.category.delete({
        where: { categoryId: id }
      });
      return deletedCategory;
    } catch {
      throw new Error("Category not found");
    }
  }
};
var CategoryServices_default = CategoryServices;

// src/routes/categoryRoutes.ts
var categoryRouter = import_express.default.Router();
var categoryService = new CategoryServices_default();
categoryRouter.get("/", async (req, res) => {
  try {
    const categorys = await categoryService.getAllCategories();
    res.send(categorys).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
categoryRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const category = await categoryService.getCategoryById(id);
    res.send(category).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
categoryRouter.post("/", async (req, res) => {
  const { name, slug, icon } = req.body;
  try {
    const category = await categoryService.createCategory(name, slug, icon);
    res.send(category).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
categoryRouter.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, slug, icon } = req.body;
  try {
    const category = await categoryService.updateCategory(id, name, slug, icon);
    res.send(category).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
categoryRouter.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const category = await categoryService.deleteCategory(id);
    res.send(category).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
var categoryRoutes_default = categoryRouter;
