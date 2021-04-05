import React from 'react';
import List from './component/list';
import Solutions from '../landing/component/Solutions';

const SolutionsLanding = () => {

    return (
        <div className='solutions'>
         {/* <List id='1'/> */}
         <Solutions />
        </div>
    );
}

export default React.memo(SolutionsLanding);