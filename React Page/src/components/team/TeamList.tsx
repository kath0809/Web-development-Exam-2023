import TeamService from '../../services/TeamService';
import TeamItem from './TeamItem';
import { useState, useEffect } from 'react';

const TeamList = () => {
        const [teams, setTeams] = useState([]);
        
        const teamHost = 'http://localhost:5261/images/teams/';

        useEffect(() => {
            getTeamsFromService();
        }, []);

        const getTeamsFromService = async () => {
            const teamsFromService = await TeamService.getAllTeams();
            setTeams(teamsFromService);
        }

        const getTeamsJSX = () => {
            const teamsJSX = teams.map((team: any, i: number) => (
                <TeamItem
                    key={i}
                    id={team.id}
                    teamName={team.teamName}
                    manufacturer={team.manufacturer}
                    driver1={team.driver1}
                    driver2={team.driver2}
                    teamImg = {teamHost + team.teamImg}
                />
            ));
            return teamsJSX;
        }

        return (
            <section>
                <h1 className='text-center text-danger'>Formula 1 Teams</h1>
                <article className='row g-3'>
                    {getTeamsJSX()}
                </article>
            </section>
        )
    }


export default TeamList;
