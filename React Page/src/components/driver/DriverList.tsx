import { useState, useEffect, ChangeEvent } from 'react';
import DriverItem from './DriverItem';
import DriverService from '../../services/DriverService';
import { IDriver } from '../../interfaces/IDriver';

const DriverList = () => {
    const [drivers, setDrivers] = useState<IDriver[]>([]);
    const [name, setName] = useState<string>('');

    // host(drivers) og host2(nationality) er for å hente bilder fra backend og vise de i frontend. 
    const host = 'http://localhost:5261/images/drivers/';
    const host2 = 'http://localhost:5261/images/nationality/'


    useEffect(() => {
        getDriversFromService();
    }, []);

    // Henter funksjonen getAllDrivers fra DriverService, som returnerer alle sjåfører.
    const getDriversFromService = async () => {
        const driversFromService = await DriverService.getAllDrivers();
        setDrivers(driversFromService);
    }

    // Henter funksjonen getDriverByName fra DriverService, og lar oss søke på navn.
    const getDriverByName = async () => {
        if (name != null) {
        const driverFromService = await DriverService.getDriverByName(name);
        setDrivers([driverFromService!]);
    }
    else {
        getDriversFromService();
    }
}

    // Håndterer endringer i innputfeltet.
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        setName(nameInput => nameInput.toUpperCase());
    }

    // Henter funksjonen getDriversJSX fra DriverItem, og lar oss vise alle sjåfører.
    const getDriversJSX = () => {
        return drivers.map((driver, i) => (
            <DriverItem
                key={i}
                id={driver.id}
                name={driver.name}
                age={driver.age}
                nationality={driver.nationality}
                image ={host + driver.image}
                nationalityImg ={host2 + driver.nationalityImg}
            />
        ));
    }

    // Returnerer først søkefeltet, deretter alle sjåførene i {getDriversJSX()}.
    return (
        <section>
            <p className='text-danger mb-1'>Search Driver</p>
            <div className='input-group mb-3'>
                <input type='text' className='form-control' placeholder='Enter drivers name...' onChange={handleNameChange} />
                <button className='btn btn-outline-danger' onClick={getDriverByName}>Search</button>
            </div>
            <div className='row g-3'>
                {getDriversJSX()}
            </div>
        </section>
    )
}


export default DriverList;