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

// src/routes/productRoutes.ts
var productRoutes_exports = {};
__export(productRoutes_exports, {
  default: () => productRoutes_default
});
module.exports = __toCommonJS(productRoutes_exports);
var import_express = __toESM(require("express"));

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

// src/routes/productRoutes.ts
var productRouter = import_express.default.Router();
var productService = new ProductServices_default();
productRouter.get("/", async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.send(products).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
productRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const product = await productService.getProductById(id);
    res.send(product).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
productRouter.get("/slug/:slug", async (req, res) => {
  const slug = req.params.slug;
  try {
    const product = await productService.getProductBySlug(slug);
    res.send(product).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
productRouter.get("/category/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const product = await productService.getProductByCategory(name);
    res.send(product).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
productRouter.post("/", async (req, res) => {
  const { name, categoryId, description, image, price, slug, stockQuantity } = req.body;
  try {
    const product = await productService.createProduct(categoryId, name, description, image, price, slug, stockQuantity);
    res.send(product).status(200);
  } catch (err) {
    console.log(err);
    res.send(err).status(400);
  }
});
productRouter.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { categoryId, name, description, image, price, slug, stockQuantity } = req.body;
  try {
    const product = await productService.updateProduct(id, name, categoryId, description, image, price, slug, stockQuantity);
    res.send(product).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
productRouter.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const product = await productService.deleteProduct(id);
    res.send(product).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
var productRoutes_default = productRouter;
