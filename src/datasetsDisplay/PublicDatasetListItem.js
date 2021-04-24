import React from 'react';
import styled from 'styled-components';
// import {
//     Button,
//     Thumbnail,
// } from '../ui';
import './DatasetListTable.css';
import { TABLE, THEAD, TBODY, TR, TH, TD } from '../ui';



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
`;

const MainDetail = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

const ButtonWrap = styled.div`
    flex: 1;
`;




// const getFormattedData = ({features, header, numOfRows}) => {

    
// }






/*
    This component displays a single dataset's details
    on the dataset list page.
*/

export const PublicDatasetListItem = async ({ item: dataset, onSelect }) => {
    try{
        const numOfRows = dataset.numOfRows;
        const rowList = [...Array(numOfRows).keys()];
        const features = dataset.features;
        const header = dataset.header;

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
                    <MainDetail>{dataset.title}</MainDetail>
                    <small>{dataset.description}</small>
                    <br />
                    <div>
                        {'features include: ' + dataset.features.join(' ')}
                    {/* <TABLE key={dataset.id} className="table-group-items">
                        <THEAD>
                            <TR>
                                {features.map(feature => {
                                    return (<TH key={feature}>{feature}</TH>)
                                })}
                            </TR>
                        </THEAD>
                        <TBODY>
                        </TBODY>
                    </TABLE> */}
                    </div>
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
