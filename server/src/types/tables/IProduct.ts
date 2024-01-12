import OrderItem from "./IOrderItem"

interface Product {
  productId:        number
  name:             string
  description:      string
  price:            number
  slug:             string
  stockQuantity:    number
  orderItems?:      OrderItem[]
}

export default Product