import { createContext,  useState, useEffect } from "react";
import TeamService from "../services/TeamService";
import axios from "axios";


export const TeamContext = createContext(null);

export const TeamProvider = ({ children }) => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeamsFromService();
    }, []);


    const getTeamsFromService = async () => {
        try {
            const teamsFromService = await TeamService.getAllTeams();
            setTeams(teamsFromService);
        }
        catch (error) {
            console.error(error);
        }
    }


    const getById = async (id) => {
        const result = await TeamService.getTeamById(id)
        return result;
    }


    const deleteTeamFromService = async (id) => {
        try {
            const result = await axios.delete(`${TeamService.teamController}/${id}`);
            console.log(result);
            return true
        }
        catch (error) {
            console.error(`error: ${error}`);
            return false
        }
    }


    const postTeamFromService = async (newTeams, image) => {
        const result = await axios.post(`${TeamService.teamController}`, newTeams);

        const formData = new FormData();
        formData.append("formFile", image);

        const uploadResult = await axios({
            url: imageUploadController,
            method: "POST",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"}
        });

        formData.delete("formFile");
    }

    const updateTeam = async (teamToUpdate) => {
        try {
            await TeamService.putTeam(teamToUpdate);
            getTeamsFromService();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <TeamContext.Provider value={{teams, updateTeam, getById, getTeamsFromService, deleteTeamFromService}}>
            {children}
        </TeamContext.Provider>
    )
}


