import Order from "./IOrder"

interface ShippingInfo {
  shippingId:   number    
  orderId:      number
  address:      string
  city:         string
  zipCode:      string
  country:      string
  order:        Order  
}

export default ShippingInfo