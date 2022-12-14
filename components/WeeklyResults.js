import Navbar from './Navbar'
import React, { useState } from 'react';

const WeeklyResults = ({props}) => {
    console.log("Props on RESULTS", props[0].acf.weekly_result);

    return (
        <div className="weekly-results">
            <h2>Weekly Results Page</h2>
            <div className="weekly-results-wrapper">
            {[...props[0].acf.weekly_results_content].reverse().map((week, i) => {
              
                return (
                    <div key={`weekly-key=${i}`} className="weekly-results-wrapper__week">
                    <h4 className='date'>{`Week of ${week.date}`}</h4>
                    {week.scores.map((x, i)=> {
                          console.log("x", x)
                        return (
                            <div key={`score-key=${i}`} className='game'>
                                <p>{x.team_one} - <strong>{x.team_one_score} </strong></p>
                                <p>{x.team_two} - <strong>{x.team_two_score}</strong></p>
                            </div>
                        )
                    })}
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default WeeklyResults