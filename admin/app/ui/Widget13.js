import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { GrValidate } from "react-icons/gr";

const Widget13 = ({count}) => {
    
  return (
    <article className='widget9'>
      <section className='widget9-content'>
        <h1>Commande total Livrées</h1>
        <GrValidate  className='icon' style={{color:"green"}} />
      </section>
      <p>{count?.livrees}</p>
    </article>
  )
}

export default Widget13