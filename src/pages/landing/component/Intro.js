import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import bg from '../../../static/image/intro.png';
import { landingData } from '../../../static/data';
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown'

const StyledBox = styled.div`
    @keyframes FadeInText {
        0% { opacity: 0.2; margin-top: 18rem;}
        100% { opacity: 1; margin-top: 10rem;}
    }
    .main-text{
        animation: FadeInText 2s linear forwards;
        width: 1000px;
        margin-left: 10rem;
        p:nth-child(1){
            font-size: 64px;
            margin: 0;
        }
        p:nth-child(2){
            font-size: 36px;
            opacity: 0.8;
        }
        p:nth-child(3){
            font-size: 20px;
            opacity: 0.8;
        }
    }
    .motionDown {
        align-self: center;
        color: white;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 3rem;
        span{
            align-self: center;
            margin: 1rem;
        }
    }
`;

const Intro = () => {
    const WrapperStyle = {
        display: 'inline-flex',
        border: '1.5px solid',
        borderRadius: '30px',
        height: '50px'
    }
    return (
        <StyledBox>
            <FullScreen bg={bg} x='40%' y='20%' size={200}>
                <div className='main-text'>
                    {landingData.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className='motionDown'>
                    <UseAnimations animation={arrowDown} size={24} strokeColor='white' wrapperStyle={WrapperStyle} />
                    <span>Scroll down</span>
                </div>

            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Intro);