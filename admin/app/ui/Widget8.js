import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
const Widget8 = ({count}) => {
  return (
    <article className='widget8'>
      <section className='widget8-content'>
        <h1>Utilisateurs total</h1>
        <GroupIcon className='icon' />
      </section>

      <p>{count}</p>
    </article>
  )
}

export default Widget8
