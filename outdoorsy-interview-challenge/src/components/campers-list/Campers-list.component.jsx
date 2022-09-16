import { useEffect, useContext, useState } from "react";
import { CamperContext } from "../../contexts/CamperContext";
import CamperCard from "../camper-card/Camper-card.component";
import {Wrapper, InputWrapper,Input, NoResults} from './Campers-list.styles';

function CampersList(){
    const {currentSearch: {camperList}} = useContext(CamperContext);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);
    const [campers, setCampers] = useState([]);

    useEffect(() => {
        setCampers(camperList);
    }, [camperList]);

    useEffect(() => {
        if(from < 0 || to < 0){
            alert('Filter numbers must be positive.')
        }
        if(from > 0 || to > 0){
            let filtered = camperList.filter((x) => {
                let price = x.pricePerDay/100.00;
                return (to === 0) ? (price >= from) : (price >= from && price <= to)
            });
            setCampers(filtered);
        }
    }, [from, to]);

    return(
        <Wrapper>
            <InputWrapper>
                <Input type='number' placeholder="From" onChange={(e) => setFrom(Number(e.target.value))}/>
                <Input type='number' placeholder="To" onChange={(e) => setTo(Number(e.target.value))}/>
            </InputWrapper>
            {
                campers.length > 0
                ? campers
                .map(x => <CamperCard key={x.id} image={x.image} heading={x.name} price={x.pricePerDay} type={x.vehicleType} currency={x.currency}/>)
                : <NoResults>Nothing to show...</NoResults>
            }
        </Wrapper>
    )
}

export default CampersList;