import { CreditCard } from "@prisma/client"

interface ICreditCardService {
  getAllCreditCards(): Promise<CreditCard[]>
  getCreditCardById(id: number): Promise<CreditCard>
  createCreditCard(userId: number, name: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string, billingAddress: string): Promise<CreditCard>
  updateCreditCard(id: number, userId: number, name: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string, billingAddress: string): Promise<CreditCard>
  deleteCreditCard(id: number): Promise<CreditCard>
}

export default ICreditCardService