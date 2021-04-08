import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

const StyledBox = styled.div`
    /* margin: 3rem; */
    overflow: auto;
    width: 2625px;
    border: solid red;
    display: block;
    display: flex;
    flex-direction:row;
    white-space:nowrap;
    scroll-snap-type: x mandatory;
    
    .inner {
        width: 800px;
        border: solid;
        height: 82vh;
        scroll-snap-points-x: start;
    }
`;


const ItemDetail = ({ item }) => {
    const { name, link, desc, arch, mp4 } = item;

    return (
        <StyledBox>
            
            <div className='inner'>1</div>
            <div className='inner'>2</div>
            <div className='inner'>3</div>

            {/* {name}
            {desc.map((p, i) =>
                <div key={i}>
                    <div>{p.title}</div>
                    <div>{p.content}</div>
                </div>
            )} */}
            {/* <img src={require("../../../static/data/architecture/tax-ocr.png")} alt='s'/> */}
            {/* <img src={require(`${arch}`)} alt='architecture'/> */}
        </StyledBox>
    );
}

export default React.memo(ItemDetail);