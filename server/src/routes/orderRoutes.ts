import express, {Request, Response} from "express";
import OrderServices from "../services/OrderServices";

const orderRouter = express.Router()
const orderService = new OrderServices()

orderRouter.get('/', async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders()
    res.send(orders).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

orderRouter.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const order = await orderService.getOrderById(id)
    res.send(order).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})


orderRouter.post('/', async (req: Request, res: Response) => {
  const {userId, status, creditCardCardId, orderItems, shippingInfo} = req.body

  try {
    const order = await orderService.createOrder(userId, status, creditCardCardId, orderItems, shippingInfo)
    res.send(order).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})


export default orderRouter