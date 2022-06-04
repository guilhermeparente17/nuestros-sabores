import React from 'react'
import SystemFilter from '../../components/SystemFilter/SystemFilter';

import {
    SystemContainer,
} from './System.Elements';
import Panel from '../Panel/Panel';

const System = () => {

    return (
        <SystemContainer>
            <SystemFilter />
            <Panel />
        </SystemContainer>
    )
}

export default System