import { Order, OrderItem, ShippingInfo } from "@prisma/client"

interface IOrderService {
  getAllOrders(): Promise<Order[]>
  getOrderById(id: number): Promise<Order>
  createOrder(userId: number, totalAmount: number, status: string, creditCardCardId: number, orderItems: OrderItem[], shippingInfo: ShippingInfo): Promise<Order>
}

export default IOrderService