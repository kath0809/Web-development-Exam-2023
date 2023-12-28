import { useContext, useState } from 'react';
import { TeamContext } from '../../contexts/TeamContext';


const UpdateTeam = () => {
// Hente inn funksjoner fra TeamContext
    const {getById, updateTeam} = useContext(TeamContext);
    const [id, setId] = useState('');
    const [teamToUpdate, setTeamToUpdate] = useState('');
    const [feedback, setFeedback] = useState(''); 
    const [errFeedback, setErrFeedback] = useState('');

    const [teamName, setTeamName] = useState('');
    const [driver1, setDriver1] = useState('');
    const [driver2, setDriver2] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [image, setImage] = useState('');

    const handleChange = (e) => {
        switch (e.currentTarget.name) {
            case 'id':
                setId(e.currentTarget.value);
                break;
                case 'teamName':
                setTeamToUpdate({...teamToUpdate, teamName: e.currentTarget.value});
                break;
                case 'driver1':
                setTeamToUpdate({...teamToUpdate, driver1: e.currentTarget.value});
                break;
                case 'driver2':
                setTeamToUpdate({...teamToUpdate, driver2: e.currentTarget.value});
                break;
                case 'manufacturer':
                setTeamToUpdate({...teamToUpdate, manufacturer: e.currentTarget.value});
                break;
        }
    }

    const getByIdFromContext = async () => {
        try {
            const teamfromContext = await getById(id);
            if (!teamfromContext) {
                feedback('Team with the provided id was not found');
            } else {
                setTeamToUpdate(teamfromContext);
                console.log(teamfromContext);
                errFeedback('Error getting team');
            }
        } catch (error) {
            console.error(error);
            
        }
    }

    const saveChanges = () => {
        try {
            updateTeam(teamToUpdate);
            setFeedback(`Team with id: ${id} was updated`);
        }
        catch (error) {
            console.error(error);
            setErrFeedback('Error updating team');
        }
    }


    return (
    <section className='text-white'>
        <article className='border border-5 border-danger-subtle p-3 mt-3'>
            <h5 className=' text-start '>Update Team</h5>
            <div className='input-group m-1 '>
                <span className='input-group-text'> Team Id</span>
                <input type='text' name='id' value={id} onChange={handleChange} className='form-control' placeholder='Update team with Id...'/>
                <button onClick={getByIdFromContext} type='button' value='Hent etter id' className='btn btn-outline-secondary text-white'>Get team</button>
            </div>
            <div className='input-group m-1'>
                <span className='input-group-text'> Team name</span>
                <input type='text' name='teamName' onChange={handleChange} value={teamToUpdate.teamName}      className='form-control' placeholder='Chose a name for your team'/>
            </div>

            <div className='input-group m-1'>
                <span className='input-group-text'>Driver 1</span>
                <input type='text' name='driver1' onChange={handleChange} value={teamToUpdate.driver1} className='form-control' placeholder='First and last name'/>
            </div>

            <div className='input-group m-1'>
                <span className='input-group-text'>Driver 2</span>
                <input type='text' name='driver2' onChange={handleChange} value={teamToUpdate.driver2} className='form-control' placeholder='First and last name'/>
            </div>

            <div className='input-group m-1'>
                <span className='input-group-text'>Manufacturer</span>
                <input type='text' name='manufacturer' onChange={handleChange} value={teamToUpdate.manufacturer} className='form-control' placeholder='Whats yor dream car...'/>
            </div>

            <div className=' text-center'>
            <button onClick={saveChanges} className='btn btn-outline-secondary text-white m-2' type='button' id='file-button'>Update team</button>
            </div>
            {feedback && <p className='mt-1 text-success'>{feedback}</p>}
            {errFeedback && <p className='mt-1 text-danger'>{feedback}</p>}
        </article>
        
    </section>
    )
};

export default UpdateTeam;