import React from 'react';
import Card from '../card/card-component';
import './card-list-style.css'
const CardList = (props) => {
    return ( <div className="card-list">
    
    {props.Monsters.map(Monster => <Card key={Monster.id} Monster={Monster}/>)}
    
    </div> );
}
 
export default CardList;