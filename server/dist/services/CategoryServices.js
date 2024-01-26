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

// src/services/CategoryServices.ts
var CategoryServices_exports = {};
__export(CategoryServices_exports, {
  default: () => CategoryServices_default
});
module.exports = __toCommonJS(CategoryServices_exports);

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
