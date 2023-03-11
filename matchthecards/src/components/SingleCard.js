import React from 'react'
import './SingleCard.css'



export default function SingleCard( {card, handleChoice, flipped}) {

    // when user click on card, it will call this function handleChoice, that is defined in App.JS
    const handleClick = () => {
        handleChoice(card)
    }


  return (
    <div className="card"> 
            <div className = {flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="card front" />
              <img 
              className="back" 
              src="/img/cover.png" 
              onClick={handleClick} 
              alt="card back" />
            </div>
    </div>
  )
}
