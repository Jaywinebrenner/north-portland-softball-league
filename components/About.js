import React, { useState } from 'react';

const About = ({props}) => {

    return (
        <div className="about">
            <h2 className='content-title'>About the North Portland Softball League</h2>
            <div className="about__wrapper">
                    <div dangerouslySetInnerHTML={{ __html: props[0].acf.content}}/>
                    <div className='about__wrapper-teams'>
                        <h3>Current Teams</h3>
                            { props[0].acf.current_team.map((team, i) => {
                        return (
                            <p key={`about-key=${i}`}>{team.team}</p>
                        )
                    })}
                    </div>
            </div>
        </div>
    )
}

export default About