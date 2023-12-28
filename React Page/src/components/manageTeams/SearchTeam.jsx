import { useEffect, useState } from 'react';
import TeamService from '../../services/TeamService';
import TeamItem from '../team/TeamItem';
import { TeamContext } from '../../contexts/TeamContext';

const SearchTeam = () => {
    const teamHost = 'http://localhost:5261/images/teams/';
    const [teamId, setTeamId] = useState('');
    const [team, setTeam] = useState(null);

    const getTeamFromService = async () => {
        const teamFromService = await TeamService.getTeamById(teamId);
        setTeam(teamFromService);
    }

    const getTeamJSX = () => {
        return (
            <TeamItem
            id = {team.id}
            teamName = {team.teamName}
            manufacturer = {team.manufacturer}
            driver1 = {team.driver1}
            driver2 = {team.driver2}
            teamImg = {teamHost + team.teamImg}
            >
            </TeamItem>
        )
    }

    const handleIdChange = (e) => {
        const idInput = e.currentTarget.value;
        setTeamId(idInput);
    }

    return (
    <section className='text-white'>
        <article className='border border-5 border-danger-subtle p-3 mt-3'>
        <h5>Search Team By Id</h5>
        <div className='input-group'>
            <span className='input-group-text'>Search team by id</span>
            <input type='text' onChange={handleIdChange} className='form-control' placeholder='Enter team Id...'/>
            <button onClick={getTeamFromService} className='btn btn-outline-secondary text-white' type='button'>Search</button>
        </div>
        <div className='mt-2'>
        {team != null ? getTeamJSX() : ''}
        </div>
        </article>
    </section>
    )
};

export default SearchTeam;