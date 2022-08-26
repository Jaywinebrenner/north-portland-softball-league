


const Standings = ({props}) => {

	console.log("Props on Standings", props[0].acf.team);
    return (
		
        <div className="standings">
            <h2>Standings 2022</h2>
            <div className="standings__wrapper">
            <div className="table">
		<div className="table-header">
			<div className="header__item"><a id="name" className="filter__link" href="#">Team</a></div>
			<div className="header__item"><a id="wins" className="filter__link filter__link--number" href="#">Wins</a></div>
			<div className="header__item"><a id="losses" className="filter__link filter__link--number" href="#">Losses</a></div>
			<div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">RS</a></div>
			<div className="header__item"><a id="total" className="filter__link filter__link--number" href="#">RA</a></div>
		</div>
		<div className="table-content">	
			{props[0].acf.team.map((team) => {
				return (
					<div className="table-row">		
						<div className="table-data">{team.name}</div>
						<div className="table-data">{team.wins}</div>
						<div className="table-data">{team.losses}</div>
						<div className="table-data">{team.runs_allowed}</div>
						<div className="table-data">{team.runs_scored}</div>
					</div>
				)
			})}

		</div>	
	</div>

            </div>
        </div>
    )
}

export default Standings