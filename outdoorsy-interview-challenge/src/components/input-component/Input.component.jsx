import {useState, useContext, useEffect} from 'react';
import {CamperContext} from '../../contexts/CamperContext';

import {Wrapper,InputFieldWrapper,InputField,ClearIcon, CampersCount} from './Input.styles';

function Input(){   
    const [inputString, setInputString] = useState('');
    const [count, setCount] = useState(0);
    const {updateCamperList} = useContext(CamperContext);

    useEffect(() => {
        fetch(`https://search.outdoorsy.com/rentals?filter[keywords]=${inputString}&page[limit]=&page[offset]=`)
        .then(res => res.json())
        .then((result) => handleResponseData(result))
        .catch(err => console.log(err))
    }, [inputString]);

    const handleInputChange = (e) => {
        let text = e.target.value;
        setInputString(text);
    }

    const handleClearInput = () => {
        let input = document.getElementById('input-field');
        input.value = '';

        setInputString('');
    }

    const handleResponseData = (result) => {
        let {data} = result;
        let campers = [];

        if (data.length !== 0) {
            for (const camperData of data) {
                let {id, attributes: {name,
                    display_vehicle_type,price_per_day,
                    presentment_currency, primary_image_url: image}} = camperData;

                let camper = {
                    id,
                    name,
                    image,
                    vehicleType: display_vehicle_type,
                    pricePerDay: price_per_day,
                    currency: presentment_currency,
                };
                
                campers.push(camper);
            }
        }

        setCount(campers.length);
        updateCamperList(campers);
    }

    return(
        <Wrapper>
            <InputFieldWrapper>
                <InputField id='input-field' onChange={handleInputChange}/>
                <ClearIcon onClick={() => handleClearInput()}/>
            </InputFieldWrapper>
            <CampersCount>Campers: {count}</CampersCount>
        </Wrapper>
    )
}

export default Input;