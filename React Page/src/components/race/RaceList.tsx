import RaceService from "../../services/RaceService";
import { useState, useEffect } from "react";
import RaceItem from "./RaceItem";
import { IRace } from "../../interfaces/IRace";

const RaceList = () => {
    const [races, setRaces] = useState<IRace[]>([]);
    const [grandPrix, setGrandPrix] = useState<string>('');

    const hostWinnerImg = 'http://localhost:5261/images/drivers/';
    const hostGpImg = 'http://localhost:5261/images/gp/';

    useEffect(() => {
        getRacesFromService();
    }, []);

    const getRacesFromService = async () => {
        const racesFromService = await RaceService.getAllRaces();
        setRaces(racesFromService);
    }

    const filterRaceByGP = async() => {
        if (grandPrix != null) {
            const raceFromService = await RaceService.filterRaceByGP(grandPrix);
            setRaces([raceFromService!]);
        } else {
            getRacesFromService();
        }
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGrandPrix(event.target.value);
    }

    const getRacesJSX = () => {
        return races.map((race, i) => {
                return (
                    <RaceItem
                        key={i}
                        id={race.id}
                        winnerName={race.winnerName}
                        winnerTime={race.winnerTime}
                        grandPrix={race.grandPrix}
                        numberOfLaps={race.numberOfLaps}
                        driverImg ={hostWinnerImg + race.driverImg}
                        grandPrixImg={hostGpImg + race.grandPrixImg} 
                    />
                );
        });
    }

    return (
        <section>
            <p>See winner by Grand Prix</p>
            <select className='form-select mb-3' aria-label='Default select example' value={grandPrix} onChange={handleSelectChange}>
                <option value=''disabled>Select grand prix to see winner</option>
                <option value='Bahrain'>Bahrain</option>
                <option value='Saudi Arabia'>Saudi Arabia</option>
                <option value='Singapore'>Singapore</option>
                <option value='Azerbaijan'>Azerbaijan</option>
                <option value='Qatar'>Qatar</option>
                <option value='Belgium'>Belgium</option>
            </select>
            <button className='btn btn-outline-info mb-3' onClick={filterRaceByGP}>Search</button>
            <h1 className="text-center text-danger">2023 Race Winners</h1>
            <article className="row g-3">
                {getRacesJSX()}
            </article>
        </section>
    )
}

export default RaceList;