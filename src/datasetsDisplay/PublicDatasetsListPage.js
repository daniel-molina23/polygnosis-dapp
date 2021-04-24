import React, { useState, useEffect } from 'react';
import { PublicDatasetListItem } from './PublicDatasetListItem';
import {subscribeToPublicDatasets} from '../data-repo';
import {
    Divider,
    Heading,
    HeadingSmall,
    SelectionList,
    MaxWidthContentSection,
} from '../ui';
import styled from 'styled-components';
import { MyWorkButton } from '../components';

const Div = styled.div`
    margin-bottom: 10px;
`;

/*
    This page displays all of the user's current datasets in a list
*/
export const PublicDatasetsListPage = () => {
    const [datasets, setDatasets] = useState([]);

    console.log(datasets, datasets.length);

    useEffect(() => {
        const unsubscribe = subscribeToPublicDatasets(results => {
            setDatasets(results);
        })
        return unsubscribe;
    }, []);//empty paranthesis to ensure it only gets called once!

    return (
        <div>
            <Div>
                <MyWorkButton />
            </Div>
            <br/>
            <>
            
            <MaxWidthContentSection>
                <div style={{ height: '64px' }}>
                </div>
                <Heading>Public Datasets</Heading>
                <Divider />
                {datasets.length > 0
                    ? <SelectionList
                        items={datasets}
                        keyProperty='id'
                        itemComponent={PublicDatasetListItem} />
                    : <HeadingSmall
                        style={{ textAlign: 'center' }}
                        >Become the first person to upload data to the community!</HeadingSmall>}
            </MaxWidthContentSection>
            </>
        </div>
    );
}