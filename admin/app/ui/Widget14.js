import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { TbShoppingCartCancel } from "react-icons/tb";

const Widget14 = ({count}) => {
    
  return (
    <article className='widget9'>
      <section className='widget9-content'>
        <h1>Commande total Annulées</h1>
        <TbShoppingCartCancel  className='icon' />
      </section>
      <p>{count?.annulees}</p>
    </article>
  )
}

export default Widget14