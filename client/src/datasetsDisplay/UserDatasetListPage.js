import React, { useState, useEffect } from 'react';
import { UserDatasetListItem } from './UserDatasetListItem';
import { subscribeToCurrentUserDatasets } from '../data-repo';
import {
    Button,
    Divider,
    Heading,
    HeadingSmall,
    MaxWidthContentSection,
    SelectionList,
} from '../ui';
import { Link } from 'react-router-dom';


/*
    This page displays all of the user's current datasets in a list
*/
export const UserDatasetListPage = () => {
    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        const unsubscribe = subscribeToCurrentUserDatasets(results => {
            setDatasets(results);
        }); //changes or updates dataset
        
        return unsubscribe;
    }, []);//empty paranthesis to ensure it only gets called once!

    return (
        <>
        <MaxWidthContentSection>
            <div style={{ height: '64px' }}>
            </div>
            <Heading>My Datasets</Heading>
            <Divider />
            {datasets.length > 0
                ? <SelectionList
                    items={datasets}
                    keyProperty='id'
                    itemComponent={UserDatasetListItem} />
                :   <div>
                        <HeadingSmall
                        style={{ textAlign: 'center' }}
                        >You have no personal Data Yet
                        </HeadingSmall>
                        <Link to="/upload-data">
                            <Button>
                                Upload Datasets
                            </Button>
                        </Link>
                    </div>
                    }
        </MaxWidthContentSection>
        </>
    );
}