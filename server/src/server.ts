import userRouter from "./routes/userRoutes"
import productRouter from "./routes/productRoutes"
import categoryRouter from "./routes/categoryRoutes"
import creditCardRouter from "./routes/creditCardRoutes"
import orderRouter from "./routes/orderRoutes"

const express = require('express')
const app = express()
const PORT = 3333

app.use(express.json())

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/categories', categoryRouter)
app.use('/credit-card', creditCardRouter)
app.use('/orders', orderRouter)

app.listen({
  host: '0.0.0.0',
  port: PORT
})