import Button from '@/app/(components)/Button'
import Item from './Item'

// Functional Component
export default function Summary() {
  // Rendering
  return (
    <div>
      <h3 className="mb-[31px] text-h6 uppercase">Summary</h3>
      <div className="mb-[32px] flex flex-col gap-[24px]">
        <Item />
        <Item />
        <Item />
      </div>
      <div className="mb-[24px] flex flex-col gap-[8px]">
        {/* Total */}
        <div className="flex justify-between">
          <h6 className="text-body uppercase opacity-50">Total</h6>
          <span className="text-h6">$ 5,396</span>
        </div>
        {/* Shipping */}
        <div className="flex justify-between">
          <h6 className="text-body uppercase opacity-50">Shipping</h6>
          <span className="text-h6">$ 50</span>
        </div>
        {/* VAT (INCLUDED) */}
        <div className="flex justify-between">
          <h6 className="text-body uppercase opacity-50">Vat (included)</h6>
          <span className="text-h6">$ 1,079</span>
        </div>
      </div>
      {/* Grand Total */}
      <div className="mb-[32px] flex justify-between">
        <h6 className="text-body uppercase opacity-50">Grand Total</h6>
        <span className="text-h6 text-primary">$ 5,446</span>
      </div>
      {/* Finish */}
      <Button className="w-full" text="Continue & Pay" type="primary" />
    </div>
  )
}
