import CreditCard from "./ICreditCard"
import Order from "./IOrder"

interface User {
  id:           number
  name:         string
  email:        string
  phone:        string | null
  zipCode:      string | null
  address:      string | null
  city:         string | null
  country:      string | null
  creditCards?:  CreditCard[]
  orders?:       Order[]
}

export default User