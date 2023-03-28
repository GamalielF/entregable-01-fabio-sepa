import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

export const ContainerInfo = ({quote, handleNewQuote}) => {
    
  
    return (
    <div>
        <section className='containerInfo'>
        <h1 className='containerInfo_title'>Galletas de la Fortuna</h1>
        <Button handleNewQuote ={handleNewQuote} />
        <article className='container_Phrase'>
          <p>{quote.quote}</p>
          <br />
          <br />
          <img src="/images/Vector.png" alt="comillas" className='comillas'/>
        </article>

        <article className="containerInfo_autor">
          <h4>Fuente: {quote.author}</h4>
        </article>
      </section>
    </div>
  )
}
