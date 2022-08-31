import React, { useState } from 'react';

const CurrentTeams = ({props}) => {
    // console.log("props on Current", props)

    return (
        <div className="current-teams">
            <h2 className='content-title'>Teams</h2>
            <div className='current-teams__wrapper'>
               { props[0].acf.current_team.map((team, i) => {
                return (
                    <p key={`current-key=${i}`}>{team.team}</p>
                )
               })}
            </div>

        </div>
    )
}

export default CurrentTeams