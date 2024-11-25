
import React from 'react'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
const Widget6 = ({stockEpuise}) => {

  return (
    <article className='widget6'>
      <section className='title-row'>
         <h1>Les produits en finition</h1>
      <TrendingDownIcon className='icon' />
      </section>
     
      <section className='widget6-article'>
       <ul>
        {
          stockEpuise.map((element)=>
            
              <li key={element.id}>
                <article>
                  <figure>
                    <img className='img' src={element.image} style={{width:50, height:50}} alt="" />
                  </figure>
                  <section className='row'>
                    <section className='column'>
                    <h2>{element.name} </h2>
                    <p>{element.category}</p>
                    </section>
                    <section className='stock'>
                    <p>restant</p>
                    <p className='rest'>{element.stockGlobal}</p>
                    </section>
                 </section>
                </article>
              </li>
          )
        }
        </ul>
      </section>
    </article>
  )
}

export default Widget6
