import React from 'react';
import Intro from './component/Intro';
import Vision from './component/Vision';
import Strategies from './component/Strategies';
import Solutions from './component/Solutions';

const Landing = () => {

    return (
        <div className='landing'>
            <Intro id='intro'/>
            <Vision id='vision' />
            <Strategies id='3'/>
            <Solutions id='4'/>

        </div>
    );
}

export default React.memo(Landing);