import React, { useState } from 'react';

const About = ({props}) => {

    return (
        <div className="about">
            <h2 className='content-title'>About the North Portland Softball League</h2>
            <div className="about__wrapper">
                {/* <p>A a chill league of North Portland businesses and softball enthusiasts. </p>
                <p>If you are a North Portland business and want to join our very relaxed and fun league, contact the commissioner or co-commissioner.</p>
                <p>Jason Urick: urickorama@gmail.com </p>
                <p>Maryam Troncelliti: maryamtroncelliti@gmail.com </p> */}
                    <div dangerouslySetInnerHTML={{ __html: props[0].acf.content}}/>
                    <div className='about__wrapper-teams'>
                        <h3>Current Teams</h3>
                            { props[0].acf.current_team.map((team) => {
                        return (
                            <p>{team.team}</p>
                        )
                    })}
                    </div>
            </div>
        </div>
    )
}

export default About