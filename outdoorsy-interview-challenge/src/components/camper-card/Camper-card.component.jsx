

function CamperCard({image, heading}){

    return(
        <div style={{display: 'flex'}}>
            <div>
                <img style={{width: '150px', height: '150px'}} src={image}/>
            </div>
            <div>
                <h3>{heading}</h3>
            </div>
        </div>
    )
}

export default CamperCard;