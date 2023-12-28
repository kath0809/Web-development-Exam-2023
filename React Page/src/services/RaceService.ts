import axios from "axios";
import { IRace } from "../interfaces/IRace";

const RaceService = (() => {
    const raceController = "http://localhost:5261/api/races";
    const imageUrl = "http://localhost:5261/images/drivers/";
    const gpImage = "http://localhost:5261/images/gp/"
    
    const getAllRaces = async (): Promise<IRace[]> => {
        try {
            const result = await axios.get(raceController);
            console.log(result);
            return result.data;
        }
        catch (e) {
            console.log(e);
            return [];
        }
    }

    const filterRaceByGP = async (grandPrix: string) => {
        try {
            const result = await axios.get(`${raceController}/GetGrandPrix/${grandPrix}`);
            console.log(`Grand Prix "${grandPrix}": ${result.data}`);
            return result.data[0];
        }
        catch (e) {
            console.log(e);
        }
    }



    return {
        getAllRaces,
        filterRaceByGP,
        imageUrl,
        gpImage
    }
})();

export default RaceService;