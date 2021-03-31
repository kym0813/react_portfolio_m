import React from 'react';
import styled from 'styled-components';
import FullScreen from '../../../static/component/FullScreen';
import bg from '../../../static/image/solutions.jpg';
import { solutionsData } from '../../../static/data';
import { Link } from 'react-router-dom';

const StyledBox = styled.div`
    .item{
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        text-transform: uppercase;
        text-decoration: none;
        border: 1px solid;
        min-width: 300px;
        min-height: 300px;
        border-radius: 300px;
        margin: 2rem;
        transition: 1s;

        &:hover{
            background: white;
            color: #333;
            transition: 1s;
        }
    }
`;

const Solutions = () => {

    return (
        <StyledBox>
            <FullScreen bg={bg} direction='row' justify='center' overlay='rgba(0,0,0,0.7)' padding='12rem 0 0 0 '>
            {solutionsData.map((s, i) => 
            <Link to={s.contents.link} className='item' style={{marginTop: `${(3-i)*4}%`}}>
                {s.key}
                </Link>
            )}
            </FullScreen>
        </StyledBox>
    );
}

export default React.memo(Solutions);