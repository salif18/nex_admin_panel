import React from 'react'
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
const Widget3 = ({totalBenefice}) => {
  return (
    <article className='widget3'>
     <section className='widget3-content'>
      <h1>Benefice total</h1>
      <CurrencyExchangeRoundedIcon className='icon' />
      </section>
    
    <p>{totalBenefice} FCFA</p>
  </article>
  )
}

export default Widget3
