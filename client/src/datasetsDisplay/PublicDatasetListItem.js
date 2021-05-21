import React from 'react';
import styled from 'styled-components';
// import {
//     Button,
//     Thumbnail,
// } from '../ui';
import './DatasetListTable.css';
// import { TABLE, THEAD, TBODY, TR, TH, TD } from '../ui';
import { FontWeight, FontStyle } from "styled-typography";



const ListItemContainer = styled.div`
    align-items: center;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 16px;
    width: 100%;
`;

const ThumbnailWrap = styled.div`
    flex: 2;
`;

const DetailsSection = styled.div`
    flex: 8;
    color: black;
`;

const MainDetail = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

const ButtonWrap = styled.div`
    flex: 1;
`;

const Small = styled.small`
    color: #00d1b2;
`;




/*
    This component displays a single dataset's details
    on the dataset list page.
*/

export const PublicDatasetListItem = ({ item: dataInstance, onSelect }) => {
    try{
        // const numOfRows = dataset.numOfRows;
        // const rowList = [...Array(numOfRows).keys()];
        // const features = dataset.features;
        // const header = dataset.header;

        // const getBody = rowList.map(row => {
        //     return (
        //             <TR>
        //                 {
        //                     features.map(feature => {
        //                         return (
        //                             <TD key={feature + ' ' + row}>
        //                                 {header[feature][row]}
        //                             </TD>
        //                         );
        //                     })
        //                 }
        //             </TR>
        //         );
        //     }
        // );
        //end of getBody


        //rendering to be returned
        return (
            <ListItemContainer>
                <DetailsSection>
                    <MainDetail>{dataInstance.title}</MainDetail>
                    <div>Dataset description:</div>
                    <div>{dataInstance.description}</div>
                    <Small>Published by: <b>{dataInstance.displayName}</b></Small>
                </DetailsSection>
            </ListItemContainer>
        );
    } catch(e){
        console.error(e);
        return (
            <div>
                Undefined....
            </div>
        )
    }
}
