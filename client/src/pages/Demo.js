import React from 'react';
import styled from 'styled-components';
import DemoSidebar from '../demo/DemoSidebar';
import { PublicDatasetsListPage } from '../datasetsDisplay';


const Demo = () => (
    <div>
        <DemoSidebar />
        <PublicDatasetsListPage />
    </div>
);

export default Demo;