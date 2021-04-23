import React, { useState } from 'react';
import { PublicDatasetListItem } from './PublicDatasetListItem';
import {
    Button,
    Divider,
    Heading,
    HeadingSmall,
    SelectionList,
    MaxWidthContentSection,
} from '../ui';

/*
    This page displays all of the user's current datasets in a list
*/
export const PublicDatasetsListPage = () => {
    const [datasets, setSetDatasets] = useState([]);


    return (
        <>
        <MaxWidthContentSection>
            <div style={{ height: '64px' }}>
            </div>
            <Heading>Public Datasets</Heading>
            <Divider />
            {datasets.features.length > 0
                ? <SelectionList
                    items={datasets}
                    keyProperty='id'
                    itemComponent={PublicDatasetListItem} />
                : <HeadingSmall
                    style={{ textAlign: 'center' }}
                    >You have no reservations yet!</HeadingSmall>}
        </MaxWidthContentSection>
        </>
    );
}