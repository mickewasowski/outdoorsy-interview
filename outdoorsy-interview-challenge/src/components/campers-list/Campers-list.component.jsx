import { useEffect, useContext } from "react";
import { CamperContext } from "../../contexts/CamperContext";

import CamperCard from "../camper-card/Camper-card.component";

function CampersList(){
    const {currentSearch: {camperList}} = useContext(CamperContext);

    useEffect(() => {

    }, [camperList]);
    
    return(
        <div>
            {
                camperList.length > 0
                ? camperList.map(x => <CamperCard key={x.id} image={x.image} heading={x.name}/>)
                : <p>Nothing to show yet..</p>
            }
        </div>
    )
}

export default CampersList;