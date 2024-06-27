import React from 'react'
import './Card.css'

let cardlist = [
    { id: 1, name: 'Card 1', description: "This is card 1 description", image: './img1.png' },
    { id: 2, name: 'Card 2', description: "This is card 2 description", image: './img2.png' },
    { id: 3, name: 'Card 3', description: "This is card 3 description", image: './img3.png' },
    { id: 4, name: 'Card 4', description: "This is card 4 description", image: './img4.png' },
    { id: 5, name: 'Card 5', description: "This is card 5 description", image: './img5.png' },
    { id: 6, name: 'Card 6', description: "This is card 6 description", image: './img6.png' },
    { id: 7, name: 'Card 7', description: "This is card 7 description", image: './img7.png' },
    { id: 8, name: 'Card 8', description: "This is card 8 description", image: './img8.png' },
    { id: 9, name: 'Card 9', description: "This is card 9 description", image: './img9.png' },
]

function Card(props) {
 
    return (
        <div className="card-container">
            {cardlist.map(cardlist => (
                <div className="card" key={cardlist.id}>
                <div className="card-content">
                    <img src={cardlist.image}/>
                    <div>
                        <h1>{cardlist.name}</h1>
                        <p>{cardlist.description}</p>
                    </div>
                </div>
            </div>
            ))}
            
       </div>
  )
}

export default Card
