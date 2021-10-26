import React, { useState, useEffect } from 'react'
import RacerDetail from '../components/RacerDetail';

export default function Racers(props){
    const [racers, setRacers] = useState([]);

    useEffect(() => {
        fetch('http://ergast.com/api/f1/2021/1/driverStandings.json')
            .then(res => res.json())
            .then(data => setRacers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings))
    })

    return (
        <div>
            This is the Racers Page
            {racers.length ? 
                <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <td>Position</td>
                        <td>Points</td>
                        <td>Wins</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Nationality</td>
                        <td>Constructor</td>
                    </tr>
                </thead>
                <tbody>
                    {racers.map((r, i) => <RacerDetail key={i} racer={r} />)}
                </tbody>
            </table>
            : null}
            
        </div>
    )
}
