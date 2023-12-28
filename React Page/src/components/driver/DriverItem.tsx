import { FC } from 'react';
import { IDriver } from '../../interfaces/IDriver';


// FC = Functional Component, betyr at dette er en funksjonell komponent.
// Lar oss definere hva slags props komponenten skal ta inn.
// I dette tilfelle er det en IDriver som er en interface som definerer hva slags data som skal være i objektet.
const DriverItem : FC<IDriver> = ({id, name, age, nationality, nationalityImg, image}) => {
    return (
        <article className='col-12 col-md-6 col-lg-4'>
            <div className='card card-body text-dark'>
                <p className='text-end'>id: {id}</p>
                <h3 className='text-center'>{name}</h3>
                <p>Age: {age}</p>
                <img alt={`Driver: ${name}. Photo`} src={image} className='card-img border border-2 border-primary mx-auto d-block h-100'/>
                <p>Nationality: <img alt={` ${nationality} flag. Photo`} src={nationalityImg} id='ntImg' className='rounded rounded-pill border border-1 border-black m-1'/> {nationality}</p>
            </div>
        </article>
    )
}

export default DriverItem;