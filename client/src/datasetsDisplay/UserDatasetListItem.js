import React from 'react';
import styled from 'styled-components';
// import {
//     Button,
//     Thumbnail,
// } from '../ui';
import './DatasetListTable.css';
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

// const ThumbnailWrap = styled.div`
//     flex: 2;
// `;

const DetailsSection = styled.div`
    flex: 8;
`;

const MainDetail = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

// const ButtonWrap = styled.div`
//     flex: 1;
// `;

const Public = styled.small`
    color: ${(props) => props.color};
`;


/*
    This component displays a single dataset's details
    on the dataset list page.
*/
export const UserDatasetListItem = ({ item: dataInstance }) => {
    
    return (
        <ListItemContainer>
            <DetailsSection>
                <MainDetail>{dataInstance.title}</MainDetail>
                <div>{dataInstance.description}</div>
                <br/>
                {dataInstance.public ? 
                    <Public color={'#B5651D'}> Public: <b>True</b></Public> 
                    :
                    <Public color={'red'}> Public: <b>False</b></Public>
                }
            </DetailsSection>
        </ListItemContainer>
    );
}
