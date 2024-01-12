import express, {Request, Response} from "express";
import CreditCardServices from "../services/CreditCardServices";

const creditCardRouter = express.Router()
const creditCardService = new CreditCardServices()

creditCardRouter.get('/', async (req: Request, res: Response) => {
  try {
    const creditCards = await creditCardService.getAllCreditCards()
    res.send(creditCards).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

creditCardRouter.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const creditCard = await creditCardService.getCreditCardById(id)
    res.send(creditCard).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

creditCardRouter.post('/', async (req: Request, res: Response) => {
  const {userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress} = req.body

  try {
    const creditCard = await creditCardService.createCreditCard(userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress)
    res.send(creditCard).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

creditCardRouter.patch('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const {userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress} = req.body

  try {
    const creditCard = await creditCardService.updateCreditCard(id, userId, name, cardNumber, cardHolder, expirationDate, cvv, billingAddress)
    res.send(creditCard).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})

creditCardRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  try {
    const creditCard = await creditCardService.deleteCreditCard(id)
    res.send(creditCard).status(200)
  } catch(err) {
    res.send(err).status(400)
  }
})


export default creditCardRouter