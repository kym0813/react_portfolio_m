import React, { useState } from 'react';
import styled from 'styled-components';
import menu2 from 'react-useanimations/lib/menu2'
import UseAnimations from "react-useanimations";
import Backdrop from '@material-ui/core/Backdrop';
import { menus } from '../data';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const StyledBox = styled.div`
    .backdrop{
        background: #00338d;
        text-transform: uppercase;
    }
    #hamburger{
        /* margin-right: 2rem; */
    }
    .menu{
        display: flex;
        flex-direction: column;
        font-size: 46px;
        font-weight: 500;
    }
    .link{
        color: white;
        text-decoration: none;
        display: inline-block;
        margin-bottom: 20px;
    }
    .link::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background: #fff;
        transition: width .3s;
    }
    .link:hover::after {
        width: 100%;
        transition: width .3s;
    }
`;

const useStyles = makeStyles((theme) => ({
    menus: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '46px',
        fontWeight: '550'
    },
}));



const Hamburger = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false);


    const handleClose = (link) => {
        setClicked(!clicked);
        setOpen(false);
        window.location.replace(`${link}`);
    };

    const handleToggle = () => {
        setClicked(!clicked);
        setOpen(!open);
    };

    return (
        <StyledBox>
            <UseAnimations
                id='hamburger'
                animation={menu2} size={45} strokeColor={'#e2e5e9'} speed={2}
                onClick={handleToggle} reverse={clicked} />

            <Backdrop className='backdrop' open={open}>
                    {/* <img src={logo} alt='logo' width='115px' /> */}
                    <div className={classes.menus}>
                        {menus.map((m) =>
                            <div key={m.path}>
                                <Link
                                    to={m.path} className="link"
                                    onClick={() => handleClose(m.path)}>{m.name}</Link>
                            </div>
                        )}
                    </div>
            </Backdrop>
        </StyledBox>
    );
}

export default Hamburger;