import React from 'react';
import styled from 'styled-components';
import convo from '../../assets/conversation.jpg';
import Line from '../../assets/conversation-first.png';

const FirstConversation = () => {
    return (
        <Container>
            <StyledHeader>First Conversation</StyledHeader>
            <StyledImg src={convo} width="100%" alt='convo'/>
            <StyledLine src={Line} width='100%' alt='line'/>
        </Container>
    )
}

export default FirstConversation;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    position: relative;
    margin-bottom: 30px;
`
const StyledHeader = styled.p`
    font-family: amatic-bold;
    text-align: center;
    font-size: 45px;
    margin-bottom: 30px;
`

const StyledImg = styled.img`
    margin-bottom: 60px;
`
const StyledLine = styled.img`
    position: absolute;
    top: 96%;
    z-index: 1;
`
