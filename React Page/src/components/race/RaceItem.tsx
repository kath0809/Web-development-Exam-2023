import { FC } from 'react';
import { IRace } from '../../interfaces/IRace';
import { TrophyFill } from 'react-bootstrap-icons';

const RaceItem : FC<IRace> = ({ winnerName, winnerTime, grandPrix, numberOfLaps, driverImg, grandPrixImg }) => {
    return (
        <article className='col-12 col-md-6 col-lg-4'>
            <div className='card card-body'>
                <h3 className='text-center'>{winnerName} <TrophyFill color='gold' size={35}/></h3>
                <p>Time: {winnerTime} h.</p>
                <p>Number of laps: {numberOfLaps}</p>
                <img  alt={`Driver: ${winnerName}. Photo`} src={driverImg} className='card-img mx-auto d-block shadow border border-2 border-primary'/>
                <p>Grand Prix: {grandPrix}</p>
                <img alt={`${grandPrix} flag. Photo`} src={grandPrixImg} id='gpImg' className='border border-1 border-black align-self-center'/>
            </div>
        </article>
    )
}

export default RaceItem;