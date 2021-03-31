import React from 'react';
import styled from 'styled-components';
import logo from '../image/logo.svg';
import Hamburger from './Hamburger';


const StyledBox = styled.div`
    position: fixed;
    display: flex;
    height: 60px;
    width: 96%;
    padding: 1rem 2rem 0rem 2rem;
    flex-direction: row;
    justify-content: space-between;
    color: #e2e5e9;
    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        div{
            display: inline-flex;
            text-transform: capitalize;
            font-size: 24px;
            margin-left: 0.5rem;
            align-self: center;
        }
    }

`;

const Header = () => {
    return (
        <StyledBox>
            <a href='/'><img src={logo} alt='logo' width='115px' /><div>lighthouse</div></a>
            <Hamburger />
        </StyledBox>
    );
}

export default React.memo(Header);