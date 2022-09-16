import {Wrapper,ImageContainer,Image,DetailsContainer, Heading} from './Camper-card.styles';

function CamperCard({image, heading, price, type, currency}){

    return(
        <Wrapper>
            <ImageContainer>
                <Image src={image}/>
            </ImageContainer>
            <div>
                <Heading>{heading}</Heading>
            </div>
            <DetailsContainer>
                <p>Price: {price/100.00} {currency}</p>
                <p>Type: {type}</p>
            </DetailsContainer>
        </Wrapper>
    )
}

export default CamperCard;