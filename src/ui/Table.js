import styled from 'styled-components';


export const TABLE = styled.table`
border-collapse: collapse;
border-spacing: 0;
background-color: transparent;
border-color: grey;
display: table;
`;


export const THEAD = styled.thead`
display: table-header-group;
vertical-align: middle;
border-color: inherit;
`;

export const TBODY = styled.tbody`
display: table-row-group;
vertical-align: middle;
border-color: inherit;
`;

export const TR = styled.tr`
display: table-row;
vertical-align: inherit;
border-color: inherit;
`;

export const TH = styled.th`
vertical-align: bottom;
border-bottom: 2px solid #ddd;
padding: 8px;
line-height: 1.42857143;
text-align: left;
display: table-cell;
border-top: 0;
`;
