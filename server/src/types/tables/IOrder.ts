import CreditCard from "./ICreditCard"
import OrderItem from "./IOrderItem"
import ShippingInfo from "./IShippingInfo"
import User from "./IUser"

interface Order {
  orderId:            number           
  userId:             number
  orderDate:          string
  totalAmount:        number
  status:             String
  user:               User           
  orderItems:         OrderItem[]
  shippingInfo:       ShippingInfo[]
  CreditCard:         CreditCard
  creditCardCardId:   number
}

export default Order