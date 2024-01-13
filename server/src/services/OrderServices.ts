import IOrderService from "../types/services/IOrderServices";
import { Order, OrderItem, ShippingInfo } from "@prisma/client";
import { prisma } from "../db/script";

class OrderServices implements IOrderService {
  async getAllOrders(): Promise<Order[]> {
    try {
      const orders = await prisma.order.findMany({
        include: {
          creditCard: true,
          orderItems: true,
          shippingInfo: true
        }
      })
      return orders
    } catch {
      throw new Error('No Order found')
    } 
  }

  async getOrderById(id: number): Promise<Order> {
    try {
      const order = await prisma.order.findUnique({
        where: {orderId: id},
        include: {
          orderItems: true,
          creditCard: true
        }
      })

      if (!order) throw new Error('Order not found')
      return order
    } catch(err) {
      throw err
    }
  }

  async createOrder(userId: number, status: string, creditCardCardId: number, orderItems: OrderItem[], shippingInfo: ShippingInfo): Promise<Order> {
    const totalAmount = orderItems.map(item => item.unitPrice * item.quantity).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    try {
      const order = await prisma.order.create({
        data: {
          userId,
          orderDate: new Date(),
          totalAmount,
          status,
          creditCardCardId
        }
      })

      await Promise.all(
        orderItems.map(async (orderItem) =>  {
          await prisma.orderItem.create({
            data: {
              orderId: order.orderId,
              productId: orderItem.productId,
              quantity: orderItem.quantity,
              unitPrice: orderItem.unitPrice
            }
          })
        } )
      )

      try {
        await prisma.shippingInfo.create({
          data: {
            orderId: order.orderId,
            address: shippingInfo.address,
            city: shippingInfo.city,
            country: shippingInfo.country,
            zipCode: shippingInfo.zipCode
          }
        })
      }catch (err) {
        console.log('err on shipping', err)
      }

      return order
    } catch (err) {
      console.log(err)
      throw err
    }
  }

}

export default OrderServices