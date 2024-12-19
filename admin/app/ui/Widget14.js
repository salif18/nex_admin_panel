import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Widget14 = ({count}) => {
  return (
    <article className='widget9'>
      <section className='widget9-content'>
        <h1>Commande total Annulées</h1>
        <ShoppingBasketIcon className='icon' />
      </section>
      <p>{count}</p>
    </article>
  )
}

export default Widget14