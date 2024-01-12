import Order from "./IOrder"
import User from "./IUser"

interface CreditCard {
  cardId:           number
  userId:           number
  cardNumber:       string
  cardHolder:       string
  expirationDate:   string
  cvv:              string
  billingAddress:   string
  user:             User     
  orde:             Order[]
}

export default CreditCard 