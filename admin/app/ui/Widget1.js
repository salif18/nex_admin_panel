import React from 'react'
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
const Widget1 = ({totalcost}) => {
  return (
    <article className='widget1'>
     <section className='widget1-content'>
      <h1>Coût total</h1>
      <PriceChangeRoundedIcon className='icon' />
      </section>
      <p>{totalcost} FCFA</p>
    </article>
  )
}

export default Widget1
