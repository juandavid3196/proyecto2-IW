import React from 'react'
import {PayingBox} from '@components/PayingBox';

const Paying = () => {
  return (
    <section className="paying-section">
      <div className="section-container">
        <div className="paying-list w-full">
          <PayingBox 
            text={"Hasta 48 cuotas"}
            img={"./img/paying-img/credit-card.svg"}
            link={"ver más"}
          />
          <PayingBox 
            text={"Transferencia desde tu banco"}
            img={"./img/paying-img/transfer.svg"}
            link={"ver más"}
          />
          <PayingBox 
            text={"Paga en efectivo"}
            img={"./img/paying-img/payment-agreement.svg"}
            link={"ver más"}
          />
          <PayingBox 
            text={"Más medios de pago"}
            img={"./img/paying-img/view-more.svg"}
            link={"ver todos"}
          />
        </div>
      </div>
    </section>
  )
}

export { Paying }