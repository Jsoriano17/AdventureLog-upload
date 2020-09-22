import React from 'react'
import styled from 'styled-components';
import background from '../../assets/salt-lake.jpg';
import Line from '../../assets/sixth-seventh.png';

const SaltLake = () => {
    return (
        <Container>
            <img src={background} width="100%" alt='salt lake' />
            <StyledParagraph>
                On a random occasion, Savannah and Jeff
                decided <br/> to head to the great lake. It
                was really cold and the drive was messy
                but it was worth 
            </StyledParagraph>
            <StyledParagraph2>
                it. They came on perfect weather and had it all to themselves.
                It smelled really bad but the two loved the
                scenery. Not much else to say other than
                it was a nice trip.
            </StyledParagraph2>
            <StyledLine src={Line} width='100%' alt='line'/>
        </Container>
    )
}

export default SaltLake;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-top: 45px;
    margin-bottom: 155px;
`

const StyledParagraph = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 62%;
    top: 35%;
`
const StyledParagraph2 = styled.p`
    font-family: amatic;
    font-size: 25px;
    position: absolute; 
    left: 4%;
    top: 92%;
    right: 2%;
`
const StyledLine = styled.img`
    position: absolute;
    top: 117%;
    z-index: 1;
`