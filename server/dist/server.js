"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/routes/userRoutes.ts
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

// src/routes/productRoutes.ts
var import_express2 = __toESM(require("express"));

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
var productRouter = import_express2.default.Router();
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

// src/routes/categoryRoutes.ts
var import_express3 = __toESM(require("express"));

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
var categoryRouter = import_express3.default.Router();
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

// src/routes/creditCardRoutes.ts
var import_express4 = __toESM(require("express"));

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
var creditCardRouter = import_express4.default.Router();
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

// src/routes/orderRoutes.ts
var import_express5 = __toESM(require("express"));

// src/services/OrderServices.ts
var OrderServices = class {
  async getAllOrders() {
    try {
      const orders = await prisma.order.findMany({
        include: {
          creditCard: true,
          orderItems: true,
          shippingInfo: true
        }
      });
      return orders;
    } catch {
      throw new Error("No Order found");
    }
  }
  async getOrderById(id) {
    try {
      const order = await prisma.order.findUnique({
        where: { orderId: id },
        include: {
          orderItems: true,
          creditCard: true
        }
      });
      if (!order)
        throw new Error("Order not found");
      return order;
    } catch (err) {
      throw err;
    }
  }
  async createOrder(userId, status, creditCardCardId, orderItems, shippingInfo) {
    const totalAmount = orderItems.map((item) => item.unitPrice * item.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    try {
      const order = await prisma.order.create({
        data: {
          userId,
          orderDate: /* @__PURE__ */ new Date(),
          totalAmount,
          status,
          creditCardCardId
        }
      });
      await Promise.all(
        orderItems.map(async (orderItem) => {
          await prisma.orderItem.create({
            data: {
              orderId: order.orderId,
              productId: orderItem.productId,
              quantity: orderItem.quantity,
              unitPrice: orderItem.unitPrice
            }
          });
        })
      );
      try {
        await prisma.shippingInfo.create({
          data: {
            orderId: order.orderId,
            address: shippingInfo.address,
            city: shippingInfo.city,
            country: shippingInfo.country,
            zipCode: shippingInfo.zipCode
          }
        });
      } catch (err) {
        console.log("err on shipping", err);
      }
      return order;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
var OrderServices_default = OrderServices;

// src/routes/orderRoutes.ts
var orderRouter = import_express5.default.Router();
var orderService = new OrderServices_default();
orderRouter.get("/", async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.send(orders).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
orderRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const order = await orderService.getOrderById(id);
    res.send(order).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
orderRouter.post("/", async (req, res) => {
  const { userId, status, creditCardCardId, orderItems, shippingInfo } = req.body;
  try {
    const order = await orderService.createOrder(userId, status, creditCardCardId, orderItems, shippingInfo);
    res.send(order).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});
var orderRoutes_default = orderRouter;

// src/server.ts
var cors = require("cors");
var express6 = require("express");
var app = express6();
var port = process.env.PORT || 8080;
app.use(express6.json());
app.use(cors());
app.use("/users", userRoutes_default);
app.use("/products", productRoutes_default);
app.use("/categories", categoryRoutes_default);
app.use("/credit-card", creditCardRoutes_default);
app.use("/orders", orderRoutes_default);
app.listen({
  host: "0.0.0.0",
  port
});
