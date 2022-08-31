import React, { useState } from 'react';

const PastWinners = ({props}) => {

    console.log("props on Past", props)

    return (
        <div className="past-winners">
            <h2 className='content-title'>Champs</h2>
            <div className='past-winners__wrapper'>
                <div className='winner'>
                { [...props[0].acf.past_winner].reverse().map((item, i) => {
                    return (
                    <p key={`past-key=${i}`}><strong>{item.year}</strong> {item.team}</p> 
                    )
                })}
                </div>
            </div>  

        </div>
    )
}

export default PastWinners