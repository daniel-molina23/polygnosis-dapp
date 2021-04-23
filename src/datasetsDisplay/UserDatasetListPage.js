import React, { useState } from 'react';
import { UserDatasetListItem } from './UserDatasetListItem';
import {
    Button,
    Divider,
    Heading,
    HeadingSmall,
    Link,
    MaxWidthContentSection,
    SelectionList,
} from '../ui';

/*
    This page displays all of the user's current datasets in a list
*/
export const UserDatasetListPage = () => {
    const [datasets, setDatasets] = useState([]);

    return (
        <>
        <MaxWidthContentSection>
            <div style={{ height: '64px' }}>
            </div>
            <Heading>My Datasets</Heading>
            <Divider />
            {datasets.features.length > 0
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