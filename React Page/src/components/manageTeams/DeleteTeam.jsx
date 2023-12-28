import { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TeamService from '../../services/TeamService';
import { TeamContext } from '../../contexts/TeamContext';

const DeleteTeam = () => {
    const {deleteTeamFromService} = useContext(TeamContext);
    const [id, setId] = useState('');
    const [teamId, setTeamId] = useState('');
    const [feedback, setFeedback] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    const deleteTeam = async () => {
        try {
        const result = await deleteTeamFromService(teamId);
        if(result === true) {
            setFeedback(`Team with id ${teamId} was deleted successfully.`);
            setTeamId('');
        }
        else {
            console.log(`Failed to delete`);
            setFeedback(`Team with id ${teamId} was not deleted.`);
        }
    }
    catch (err) {
        console.log(`Error deleteing. ${err}`);
    }
    finally {
        handleClose();
    }
    }

    return (
        <section className='text-white'>
            <article className='border border-5 border-danger-subtle p-3 mt-3'>
            <h5>Delete Team By Id</h5>
            <div className='input-group'>
                <span className='input-group-text'>Delete team by id</span>
                <input type="text" value={teamId} onChange={(e) => setTeamId(e.target.value)} className='form-control' placeholder="Enter team Id..."/>
                <button onClick={handleShow} className='btn btn-outline-secondary text-white' type='button'>Delete Team</button>

                {/* Modal for showing a dialoge before handling delete. https://react-bootstrap.netlify.app/docs/components/modal/ */}
                <Modal show={show} onHide={handleClose} className=''>
                    <Modal.Header closeButton>
                        <Modal.Title className=''>Delete Team</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete team with id {teamId}?</Modal.Body>
                    <Modal.Footer className='justify-content-center'>
                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                        <Button variant="danger" onClick={deleteTeam}>Delete</Button>
                    </Modal.Footer>
                    </Modal>
                </div>
                {feedback && <p className='mt-1 text-primary'>{feedback}</p>}
            </article>
        </section>
    )
}

export default DeleteTeam;