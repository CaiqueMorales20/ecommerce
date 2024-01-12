import productRouter from "./routes/productRoutes"
import userRouter from "./routes/userRoutes"

const express = require('express')
const app = express()

app.use(express.json())

app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen({
  host: '0.0.0.0',
  port: 3333
})