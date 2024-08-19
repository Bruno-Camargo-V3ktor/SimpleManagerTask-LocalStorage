import React from 'react';
import '../styles/Card.css'

const Card = (props) => {

    //Render
    return (
        <div className='CardContainer'>

            <div className='CardBodyContainer'>
               {props.children}
            </div>

        </div>
    )

}

export default Card;