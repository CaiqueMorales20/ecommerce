import { CreditCard } from "@prisma/client";
import { prisma } from "../db/script";
import ICreditCardService from "../types/services/ICreditCardServices";

class CreditCardServices implements ICreditCardService {
  async getAllCreditCards(): Promise<CreditCard[]> {
    try {
      const CreditCards = await prisma.creditCard.findMany()
      return CreditCards
    } catch {
      throw new Error('No CreditCard found')
    } 
  }

  async getCreditCardById(id: number): Promise<CreditCard> {
    try {
      const CreditCard = await prisma.creditCard.findUnique({
        where: {cardId: id}
      })

      if (!CreditCard) throw new Error('CreditCard not found')
      return CreditCard
    } catch(err) {
      throw err
    }
  }

  async createCreditCard(userId: number, name: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string, billingAddress: string): Promise<CreditCard> {
    try {
      const CreditCard = await prisma.creditCard.create({
        data: {
          userId,
          name,
          cardNumber,
          cardHolder,
          expirationDate,
          cvv,
          billingAddress
        }
      })
      return CreditCard
    } catch (err) {
      throw err
    }
  }

  async updateCreditCard(id: number, userId: number, name: string, cardNumber: string, cardHolder: string, expirationDate: string, cvv: string, billingAddress: string): Promise<CreditCard> {
    try {
      const CreditCard = prisma.creditCard.update({
        where: {cardId: id},
        data: {
          userId,
          name,
          cardNumber,
          cardHolder,
          expirationDate,
          cvv,
          billingAddress
        }
      })
      return CreditCard
    } catch {
      throw new Error('CreditCard not found')
    }
  }

  async deleteCreditCard(id: number): Promise<CreditCard> {
    try {
      const deletedCreditCard = await prisma.creditCard.delete({
        where: {cardId: id}
      })
      return deletedCreditCard
    } catch {
      throw new Error('CreditCard not found')
    }
  } 
}

export default CreditCardServices