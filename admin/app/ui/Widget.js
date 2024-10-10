import React from 'react'
import WarehouseIcon from '@mui/icons-material/Warehouse';
const Widget = () => {
  return (
    <article className='widget'>
    <section className='widget-content'>
      <h1>Stock total</h1>
      <WarehouseIcon className='icon' />
      </section>
      <p>352 </p>
    </article>
  )
}

export default Widget
