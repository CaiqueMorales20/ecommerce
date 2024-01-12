import Order from "./IOrder"
import Product from "./IProduct"

interface OrderItem {
  itemId:       number
  orderId:      number
  productId:    number
  quantity:     number
  unitPrice:    number
  order:        Order
  product:      Product
}

export default OrderItem