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

const Div = styled.div`
    margin-bottom: 10px;
`;

/*
    This page displays all of the user's current datasets in a list
*/
export const PublicDatasetsListPage = () => {
    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        const unsubscribe = subscribeToPublicDatasets(results => {
            console.log("Length of Data received:", results.length, "\nThe actual data:\n", results);
            setDatasets(results);
            console.log('finished setting dataset')
        }); //changes or updates dataset
        
        
        return unsubscribe;
    }, []);//empty paranthesis to ensure it only gets called once!


    return (
        <div>
            <MaxWidthContentSection>
                <div style={{ height: '300px' }}>
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
                </div>
            </MaxWidthContentSection>
        </div>
    );
}





//this is the old one

// export const PublicDatasetsListPage = () => {
//     const [datasets, setDatasets] = useState([]);

//     useEffect(() => {
//         const unsubscribe = subscribeToPublicDatasets(results => {
//             setDatasets(results);
//         }); //changes or updates dataset
//         console.log("Length of Data received:", datasets.length, "\nThe actual data:\n", datasets);
        
//         return unsubscribe;
//     }, []);//empty paranthesis to ensure it only gets called once!


//     return (
//         <div>
//             <MaxWidthContentSection>
//                 <div style={{ height: '64px' }}>
//                 </div>
//                 <Heading>Public Datasets</Heading>
//                 <Divider />
//                 {datasets.length > 0
//                     ? <SelectionList
//                         items={datasets}
//                         keyProperty='id'
//                         itemComponent={PublicDatasetListItem} />
//                     : <HeadingSmall
//                         style={{ textAlign: 'center' }}
//                         >Become the first person to upload data to the community!</HeadingSmall>}
//             </MaxWidthContentSection>
//         </div>
//     );
// }