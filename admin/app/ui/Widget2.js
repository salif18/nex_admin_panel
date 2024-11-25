import React from 'react'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
const Widget2 = ({totalRevenu}) => {
  return (
    <article className='widget2'>
      <section className='widget2-content'>
        <h1>Revenu total</h1>
        <PaidRoundedIcon className='icon' />
      </section>

      <p>{totalRevenu} FCFA</p>
    </article>
  )
}

export default Widget2
