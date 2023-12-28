import { ITeam } from '../../interfaces/ITeam';
import { FC } from 'react';


const TeamItem: FC<ITeam> = ({id, teamName, manufacturer, driver1, driver2, teamImg}) => {
    return (
        <article className='col-6 col-md-6 col-lg-6'>
            <div className='card card-body text-black'>
                <p className='text-end'>id: {id}</p>
                <h3 className='text-center'>{teamName}</h3>
                <p className=' text'>Manufacturer: {manufacturer}</p>
                <p>Driver 1: {driver1}</p>
                <p>Driver 2: {driver2}</p>
                <img alt={`Team ${teamName}'s car. Photo`} src={teamImg} className='card-img mx-auto d-block'/>
            </div>
        </article>
    )
}

export default TeamItem;