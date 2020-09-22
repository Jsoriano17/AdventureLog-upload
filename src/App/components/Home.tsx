import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import FaceGif from '../assets/savannah_and_jeff_gif.gif';
import FirstConversation from './adventure_log/FirstConversation';
import FirstDate from './adventure_log/FirstDate';
import SecondDate from './adventure_log/SecondDate';
import TheAquarium from './adventure_log/TheAquarium';
import Introduction from './adventure_log/Introduction';
import ThePlanetarium from './adventure_log/ThePlanetarium';
import HauntedHouse from './adventure_log/HauntedHouse';
import ButterflyBiosphere from './adventure_log/ButterflyBiosphere';
import SaltLake from './adventure_log/SaltLake';
import IceSkating from './adventure_log/IceSkating';
import ChristmasLights from './adventure_log/ChristmasLights';
import { BackTop } from 'antd';
import Memories from './Memories';
import Savannah from '../assets/savannah-name.gif';
import Jeffrey from '../assets/jeffrey-name.gif';
import Navbar from './Navbar';


const Home = () => {
    return (
        <>
            <Navbar />
            <StyledHeader>Our Adventure</StyledHeader>
            <Container>
                <Line />
                <StyledHeader2>Log</StyledHeader2>
                <Line />
            </Container>
            <Container>
                <img src={FaceGif} width='100%' alt='faces' />
            </Container>
            <Container>
                <StyledImg src={Savannah} width='100px' alt='name' />
                <StyledImg2 src={Jeffrey} width='100px' alt='name' />
            </Container>
            <Container>
                <Introduction />
            </Container>
            <Container id="start">
                <FirstConversation />
            </Container>
            <Container>
                <FirstDate />
            </Container>
            <Container>
                <SecondDate />
            </Container>
            <Container>
                <TheAquarium />
            </Container>
            <Container>
                <ThePlanetarium />
            </Container>
            <Container>
                <HauntedHouse />
            </Container>
            <Container>
                <ButterflyBiosphere />
            </Container>
            <Container>
                <SaltLake />
            </Container>
            <Container>
                <IceSkating />
            </Container>
            <Container>
                <ChristmasLights />
            </Container>
            <Container>
                <StyledHeader3>To Be Continued...</StyledHeader3>
            </Container>
            <Container id='memory'>
                <Memories />
            </Container>
            <BackTop />
        </>
    )
}

export default observer(Home);

const Container = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledHeader = styled.p`
    font-size: 70px;
    font-family: amatic-bold;
    text-align: center;
    margin: 0px;
    line-height: 1;
    margin-top: 15px;
`
const StyledHeader2 = styled.p`
    font-size: 70px;
    font-family: amatic-bold;
    text-align: center;
    margin: 0px;
    line-height: 1;
`
const StyledHeader3 = styled.p`
    font-size: 45px;
    font-family: amatic-bold;
    text-align: center;
    margin: 0px;
`

const Line = styled.div`
    background: black; 
    width: 70px; 
    height: 2px;
    margin: 0px 20px;
`
const StyledImg = styled.img`
    margin: 0px 11%;
`
const StyledImg2 = styled.img`
    margin: 0px 10%;
`