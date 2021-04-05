import React from 'react';
import styled from 'styled-components';
import Intro from './component/Intro';
import Contents from './component/Contents';
import Locations from './component/Locations';

const StyledBox = styled.div`

`;

const GlobalInsight = () => {
    return(
        <StyledBox>
           <Intro id='1'/>
           <Contents id='2' />
           <Locations id='3' />
        </StyledBox>
    );
}

export default React.memo(GlobalInsight);