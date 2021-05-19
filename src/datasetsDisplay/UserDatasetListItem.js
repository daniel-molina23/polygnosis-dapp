import React from 'react';
import styled from 'styled-components';
import {
    Button,
    Thumbnail,
} from '../ui';
import './DatasetListTable.css';



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



const getFormattedData = async (dataset) => {
    if(!dataset) return null;
    const { features, header, numOfRows } = dataset;
    var table = document.createElement('table');

    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    for (const feature in features){
        var th = document.createElement('th');
        th.textContent = feature;
        tr.appendChild(th);
    }
    thead.appendChild(tr);

    var tbody = document.createElement('tbody');
    for(var i = 0; i < numOfRows; i++){
        var tr = document.createElement('tr');
        for(const feature in features){
            var td = document.createElement('td');
            td.textContent = header[feature][i];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}


/*
    This component displays a single dataset's details
    on the dataset list page.
*/
export const UserDatasetListItem = ({ item: dataInstance }) => {
    //instance from the entire dataset
    // const formattedData = await getFormattedData(dataset);
    
    return (
        <ListItemContainer>
            <DetailsSection>
                <br />
                <MainDetail>{dataInstance.title}</MainDetail>
                <small>{dataInstance.description}</small>
                <br />
            </DetailsSection>
        </ListItemContainer>
    );
}
