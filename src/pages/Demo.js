import React from 'react';
import styled from 'styled-components';
import DemoSidebar from '../demo/DemoSidebar';
import { PublicDatasetsListPage } from '../datasetsDisplay';


const Div = styled.div`
    color: white;
`;


const Demo = () => (
    <Div>
        <DemoSidebar />
        <PublicDatasetsListPage />
    </Div>
);

export default Demo;