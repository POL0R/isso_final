import React from "react";

const Leaderboard = () => {
    const groups = [
        {
            name: "Group 1",
            data: [
                { key: 1, team: 'JPIS', played: 5, wins: 2, draws: 2, losses: 1 },
                { key: 2, team: 'DAIS', played: 5, wins: 1, draws: 3, losses: 1 },
                { key: 3, team: 'JBCN', played: 5, wins: 0, draws: 4, losses: 1 },
                { key: 4, team: 'JNIS', played: 5, wins: 0, draws: 5, losses: 0 },
            ]
        },
        {
            name: "Group 2",
            data: [
                { key: 1, team: 'MIT', played: 5, wins: 2, draws: 2, losses: 1 },
                { key: 2, team: 'DAIS', played: 5, wins: 1, draws: 3, losses: 1 },
                { key: 3, team: 'JBCN', played: 5, wins: 3, draws: 1, losses: 1 },
                { key: 4, team: 'JNIS', played: 5, wins: 0, draws: 2, losses: 3 },
            ]
        },
        {
            name: "Group 3",
            data: [
                { key: 1, team: 'JPIS', played: 5, wins: 2, draws: 2, losses: 1 },
                { key: 2, team: 'DAIS', played: 5, wins: 1, draws: 3, losses: 1 },
                { key: 3, team: 'JBCN', played: 5, wins: 0, draws: 4, losses: 1 },
                { key: 4, team: 'JNIS', played: 5, wins: 0, draws: 2, losses: 3 },
            ]
        },
        {
            name: "Group 4",
            data: [
                { key: 1, team: 'JPIS', played: 5, wins: 2, draws: 2, losses: 1 },
                { key: 2, team: 'DAIS', played: 5, wins: 1, draws: 3, losses: 1 },
                { key: 3, team: 'JBCN', played: 5, wins: 0, draws: 4, losses: 1 },
                { key: 4, team: 'JNIS', played: 5, wins: 0, draws: 2, losses: 3 },
            ]
        },
        {
            name: "Group 5",
            data: [
                { key: 1, team: 'JPIS', played: 5, wins: 2, draws: 2, losses: 1 },
                { key: 2, team: 'DAIS', played: 5, wins: 1, draws: 3, losses: 1 },
                { key: 3, team: 'JBCN', played: 5, wins: 0, draws: 4, losses: 1 },
                { key: 4, team: 'JNIS', played: 5, wins: 0, draws: 2, losses: 3 },
            ]
        },
    ];

    const teamImgs = {
        JPIS: 'jpis.png',
        MIT: 'mit.png',
        DAIS: 'jpis.png',
        JBCN: 'jbcn.png',
        JNIS: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/JNS_Logo.png/460px-JNS_Logo.png',
    };

    const calculatePoints = (wins, draws) => wins * 2 + draws * 1;

    const sortLeaderboard = (data) => {
        return data
            .map(team => ({
                ...team,
                points: calculatePoints(team.wins, team.draws),
            }))
            .sort((a, b) => b.points - a.points);
    };

    const LeaderboardTable = ({ groupName, leaderboard }) => (
        <div className="topMakerSpace">
            <h1 className="grouperName">{groupName}</h1>
            <div className="leaderboard">
                <div className="topHolder">
                    <h1 className="tableLeader">#</h1>
                    <div className="spacerLeaderboard"></div>
                    <h1 className="tableLeader">PL</h1>
                    <h1 className="tableLeader">W</h1>
                    <h1 className="tableLeader">D</h1>
                    <h1 className="tableLeader">L</h1>
                    <h1 className="tableLeader">GD</h1>
                    <h1 className="tableLeader">Total</h1>
                </div>
                <div className="leaderboardTeams">
                    {leaderboard.map((teamL, index) => {
                        const teamImg = teamImgs[teamL.team.toUpperCase()];
                        return (
                            <div key={teamL.key} className="leaderboardTeam">
                                <h1 className="tableNumber">{index + 1}</h1>
                                <div className="spacerLeaderboard">
                                    <img className="leaderBoardImgP" src={teamImg} alt={teamL.team} />
                                    <h1>{teamL.team}</h1>
                                </div>
                                <h1 className="tableNumber">{teamL.played}</h1>
                                <h1 className="tableNumber">{teamL.wins}</h1>
                                <h1 className="tableNumber">{teamL.draws}</h1>
                                <h1 className="tableNumber">{teamL.losses}</h1>
                                <h1 className="tableNumber">{teamL.wins - teamL.losses}</h1>
                                <h1 className="tableNumber">{teamL.points}</h1>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <div className="leaderboardHolder">
            {groups.map((group) => (
                <LeaderboardTable
                    key={group.name}
                    groupName={group.name}
                    leaderboard={sortLeaderboard(group.data)}
                />
            ))}
        </div>
    );
};

export default Leaderboard;
