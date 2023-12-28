import { useState, useEffect } from 'react';
import TeamService from '../../services/TeamService';
import { TeamContext } from '../../contexts/TeamContext';

const CreateTeam = () => {
    // State variabler.
    // teamName er der variablen lagres, setTeamName er der verdien settes.
    // Samme gjøres for å oppdatere eksisterende team.
    const [teamName, setTeamName] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [driver1, setDriver1] = useState('');
    const [driver2, setDriver2] = useState('');
    const [teamImg, setImage] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [newTeam, setNewTeam] = useState(null);

// Switch case brukes for å sjekke case, eksempel 'teamName' og tar i bruk useState for å sette verdien som skrives i inputfeltet til teamName.
    const handleChange = (e) => {
        switch (e.currentTarget.name) {
            case 'teamName':
                setTeamName(e.currentTarget.value);
                break;
            case 'manufacturer':
                setManufacturer(e.currentTarget.value);
                break;
            case 'driver1':
                setDriver1(e.currentTarget.value);
                break;
            case 'driver2':
                setDriver2(e.currentTarget.value);
                break;
            case 'image':
                setImage(e.currentTarget.files[0]);
                break;
            default:
                break;
        }
    }

    const saveTeams = async (e) => {
        try {
        const newTeams = {
            teamName : teamName,
            manufacturer : manufacturer,
            driver1 : driver1,
            driver2 : driver2,
            teamImg : teamImg.name
        };
        await TeamService.postTeam(newTeams, teamImg);
        setFeedback(`Team "${teamName}" created, you can now see it under Teams.`);
    }
    catch (error) {
        console.error(`Failed to create team: ${error}`);    }
    }


    return (
    <section className='text-white text-center'>
        <h1 className=''> Manage teams </h1>

        <article className='border border-5 border-danger-subtle p-3 mt-3'>
            <h5 className=' text-start '>Create a new team</h5>
            <div className='input-group m-1'>
                <span className='input-group-text'> Team name</span>
                <input type='text' name='teamName' onChange={handleChange}      className='form-control' placeholder='Chose a name for your team'/>
            </div>

            <div className='input-group m-1'>
                <span className='input-group-text'>Driver 1</span>
                <input type='text' name='driver1' onChange={handleChange} className='form-control' placeholder='First and last name'/>
            </div>

            <div className='input-group m-1'>
                <span className='input-group-text'>Driver 2</span>
                <input type='text' name='driver2' onChange={handleChange} className='form-control' placeholder='First and last name'/>
            </div>

            <div className='input-group m-1'>
                <span className='input-group-text'>Manufacturer</span>
                <input type='text' name='manufacturer' onChange={handleChange} className='form-control' placeholder='Whats yor dream car...'/>
            </div>

            <div className='input-group m-1'>
                <input type='file' name='image' onChange={handleChange} className='form-control'>
                </input>
            </div>
            <div className='text-center'>
            <button onClick={saveTeams} className='btn btn-outline-secondary text-white m-2' type='button' id='file-button'>Save team</button>
            {feedback && <p className='mt-1 text-primary'>{feedback}</p>}
            </div>
        </article>
    </section>
    )
}

export default CreateTeam;