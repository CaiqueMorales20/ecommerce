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

// src/routes/orderRoutes.ts
var orderRoutes_exports = {};
__export(orderRoutes_exports, {
  default: () => orderRoutes_default
});
module.exports = __toCommonJS(orderRoutes_exports);
var import_express = __toESM(require("express"));

// src/db/script.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

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
var orderRouter = import_express.default.Router();
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
