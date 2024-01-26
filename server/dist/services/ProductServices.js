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

// src/services/ProductServices.ts
var ProductServices_exports = {};
__export(ProductServices_exports, {
  default: () => ProductServices_default
});
module.exports = __toCommonJS(ProductServices_exports);

// src/db/script.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/services/ProductServices.ts
var ProductServices = class {
  async getAllProducts() {
    try {
      const Products = await prisma.product.findMany();
      return Products;
    } catch {
      throw new Error("No Product found");
    }
  }
  async getProductById(id) {
    try {
      const product = await prisma.product.findUnique({
        where: { productId: id }
      });
      if (!product)
        throw new Error("Product not found");
      return product;
    } catch (err) {
      throw err;
    }
  }
  async getProductBySlug(slug) {
    const allProducts = await prisma.product.findMany();
    const currentProduct = allProducts.filter((product) => product.slug === slug);
    try {
      const product = await prisma.product.findUnique({
        where: { productId: currentProduct[0].productId }
      });
      if (!product)
        throw new Error("Product not found");
      return product;
    } catch (err) {
      throw err;
    }
  }
  async getProductByCategory(name) {
    const allCategories = await prisma.category.findMany();
    const category = allCategories.filter((category2) => category2.slug === name);
    const currentCategory = category[0].categoryId;
    try {
      const product = await prisma.product.findMany({
        where: { categoryId: currentCategory }
      });
      if (!product)
        throw new Error("Product not found");
      return product;
    } catch (err) {
      throw err;
    }
  }
  async createProduct(categoryId, name, description, image, price, slug, stockQuantity) {
    try {
      const Product = await prisma.product.create({
        data: {
          categoryId,
          name,
          description,
          image,
          price,
          slug,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          stockQuantity
        }
      });
      return Product;
    } catch (err) {
      throw err;
    }
  }
  async updateProduct(id, categoryId, name, description, image, price, slug, stockQuantity) {
    try {
      const Product = prisma.product.update({
        where: { productId: id },
        data: {
          categoryId,
          name,
          description,
          image,
          slug,
          price,
          updatedAt: /* @__PURE__ */ new Date(),
          stockQuantity
        }
      });
      return Product;
    } catch {
      throw new Error("Product not found");
    }
  }
  async deleteProduct(id) {
    try {
      const deletedProduct = await prisma.product.delete({
        where: { productId: id }
      });
      return deletedProduct;
    } catch {
      throw new Error("Product not found");
    }
  }
};
var ProductServices_default = ProductServices;
