import axios from "axios";
import { IDriver } from "../interfaces/IDriver";

const DriverService = (() => {

    const driverController = "http://localhost:5261/api/drivers";
    // imageUrl henter ut bilde av fører
    const imageUrl = "http://localhost:5261/images/drivers/"
    // ntImageUrl henter ut bilde av nasjonalitet
    const ntImageUrl = "http://localhost:5261/images/nationality/"


    // Promise<IDriver[]> betyr at metoden returnerer en Promise som inneholder et array av IDriver-objekter, og om det ikke er noen IDriver-objekter, returneres et tomt array.
    const getAllDrivers = async (): Promise<IDriver[]> => {
        try {
            const result = await axios.get(driverController);
            
            console.log(result);
            return result.data;
        }
        catch (e) {
            console.log(e);
            return [];
        }
    }
    
    // Metode for å hente ut en driver basert på navn
    const getDriverByName = async (name: string) => {
    try {
        const result = await axios.get(`${driverController}/GetDriverByName/${name}`);
        console.log(`Driver by name "${name}": ${result.data}`);
        console.log(result.data[0]);
        return result.data[0];
    }
    catch (e) {
        console.log(e);
    }
} 


return {
        getAllDrivers,
        getDriverByName,
        imageUrl,
        ntImageUrl
    }

})();

export default DriverService;



/* // Metode for å hente ut en sjåfør basert på id
const getDriverById = async (id: number) => {
    try {
        const result = await axios.get(`${driverController}/${id}`);
        console.log(result);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
} */