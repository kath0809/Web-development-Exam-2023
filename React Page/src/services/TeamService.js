import axios from "axios";

const TeamService = (() => {

    const teamController = "http://localhost:5261/api/teams";
    const imageUploadController = 'http://localhost:5261/api/imageUpload';
    const teamImgUrl = 'http://localhost:5261/images/teams/';


    const getAllTeams = async () => {
        try {
            const result = await axios.get(teamController);
            console.log(result);
            return result.data;
        }
        catch (err) {
            console.log(err);
        }
}

const getTeamById = async (id) => {
    try {
        const result = await axios.get(`${teamController}/${id}`);
        console.log(result);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}

const postTeam = async (newTeams, image) => {
    const result = await axios.post(teamController, newTeams);

    // Wraps the image in a form data object
    const formData = new FormData();
    formData.append("formFile", image);
    // Send image to web api
    const uploadResult = await axios({
        url: imageUploadController,
        method: 'POST',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'} // headers allows us to send form data
    });
    formData.delete('formFile');
}


const deleteTeamById = async (id) => {
    try
    {
        const result = await axios.delete(`${teamController}/${id}`);
        console.log(result);
        return result.data; // 
    }
    catch (err)
    {
        console.log(err);
    }
}


const putTeam = async (teamToUpdate) => {
    try {
        const result = await axios.put(teamController, teamToUpdate);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}

return {
        getAllTeams,
        postTeam,
        deleteTeamById,
        getTeamById,
        putTeam,
        teamImgUrl,
        teamController
    }

})();

export default TeamService;