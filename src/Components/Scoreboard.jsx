import React, { useState } from "react";
import TopDates from "./TopDates";

const Scoreboard = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const matchesGroup1 = [
        {
            homeTeam: 'JPIS',
            homeScore: 2,
            awayTeam: 'DAIS',
            awayScore: 5,
            onStaus: 'Completed',
            date: '24 September'
        },
        {
            homeTeam: 'JPIS',
            homeScore: 2,
            awayTeam: 'MIT',
            awayScore: 5,
            onStaus: 'Completed',
            date: '24 September'
        },
        {
            homeTeam: 'JPIS',
            homeScore: 4,
            awayTeam: 'MIT',
            awayScore: 0,
            onStaus: 'Halftime',
            date: '27 September'
        },
        {
            homeTeam: 'JNIS',
            homeScore: 0,
            awayTeam: 'JBCN',
            awayScore: 0,
            onStaus: 'Pending',
            date: '26 September'
        },
        {
            homeTeam: 'JPIS',
            homeScore: 4,
            awayTeam: 'JBCN',
            awayScore: 0,
            onStaus: 'Rollover',
            date: '25 September'
        },
        {
            homeTeam: 'MIT',
            homeScore: 1,
            awayTeam: 'DAIS',
            awayScore: 0,
            onStaus: 'Started',
            date: '28 September'
        },
    ];
    const matchesGroup2 = [
        {
            homeTeam: 'JPIS',
            homeScore: 2,
            awayTeam: 'DAIS',
            awayScore: 5,
            onStaus: 'Completed',
            date: '24 September'
        },
        {
            homeTeam: 'JPIS',
            homeScore: 4,
            awayTeam: 'MIT',
            awayScore: 0,
            onStaus: 'Halftime',
            date: '27 September'
        },
        {
            homeTeam: 'JNIS',
            homeScore: 0,
            awayTeam: 'JBCN',
            awayScore: 0,
            onStaus: 'Pending',
            date: '26 September'
        },
        {
            homeTeam: 'JPIS',
            homeScore: 4,
            awayTeam: 'JBCN',
            awayScore: 0,
            onStaus: 'Rollover',
            date: '25 September'
        },
        {
            homeTeam: 'MIT',
            homeScore: 1,
            awayTeam: 'DAIS',
            awayScore: 0,
            onStaus: 'Started',
            date: '28 September'
        },
    ];

    const statusStyles = {
        completed: { color: '#066908', opacity: 0.9 },
        halftime: { color: '#e87d25', opacity: 0.7 },
        started: { color: 'green', opacity: 0.8 },
        pending: { color: 'gray', opacity: 0.2 },
        rollover: { color: 'gray', opacity: 0.6 },
    };
    const teamImgs = {
        JPIS: 'jpis.png',
        MIT: 'mit.png',
        DAIS: 'https://www.nesacenter.org/uploaded/membership/Affiliate_Schools/DAISLogo.png',
        JBCN: 'jbcn.png',
        JNIS: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/JNS_Logo.png/460px-JNS_Logo.png',
    };

    const sortMatches = (matchesGroup1) => {
        const order = ['Halftime', 'Started', 'Completed', 'Rollover', 'Pending'];
        return matchesGroup1.sort(
            (a, b) => order.indexOf(a.onStaus) - order.indexOf(b.onStaus)
        );
    };

    const sortedMatches = sortMatches(matchesGroup1);

    const filteredMatches = selectedDate
        ? sortedMatches.filter((match) => match.date === `${selectedDate} September`)
        : sortedMatches;

    return (
        <>
        <div className="scoreboardHolder">
            <TopDates 
                onDateSelect={setSelectedDate} 
                selectedDate={selectedDate}
            />
            {filteredMatches.map((match, index) => {
                const statusStyle = statusStyles[match.onStaus.toLowerCase()];
                const homeImg = teamImgs[match.homeTeam.toUpperCase()];
                const awayImg = teamImgs[match.awayTeam.toUpperCase()];
                return (
                    <>
                    <div className="scoreboardDisplay" key={index}>
                        <div className="flexer">
                        <div className="status">
                            <h4>{match.date}</h4>
                            <h1 className="statusText" style={statusStyle}>-{match.onStaus}</h1>
                        </div>
                        <div className="teamAndScore">
                            <div className="homeTeam circle">
                                
                            </div>
                            <h1 className="homeScore scoreText">{match.homeScore}</h1>
                            <h1 className="scoreText">:</h1>
                            <h1 className="awayScore scoreText">{match.awayScore}</h1>
                            <div className="awayTeam circle">
                                
                            </div>
                        </div>
                        <div className="name">
                            <h1>{match.homeTeam}</h1>
                            <h1>{match.awayTeam}</h1>
                        </div>
                        </div>
                    <img className="imgTeamCircle imgTeamCircle1" src={homeImg} alt={match.homeTeam} />
                    <img className="imgTeamCircle imgTeamCircle2" src={awayImg} alt={match.awayTeam} />
                    </div>
                    
                    </>
                );
            })}
        </div>
        </>
    );
};

export default Scoreboard;
