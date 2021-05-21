import styled from 'styled-components';


export const Grid = styled.div`
    margin-top: 10px;
`;

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    font-weight: ${(props) => props.font_weight? props.font_weight : "bold"};
    flex: ${(props) => props.size};
    color: ${(props) => props.color? props.color : "white"};
`;

export const RightArrow = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    color: ${(props) => props.color? props.color : "white"};
`;