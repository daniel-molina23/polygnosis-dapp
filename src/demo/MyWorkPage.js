import React from 'react';
import styled from 'styled-components';
import { ExploreButton } from '../components';
import { UploadData } from '../user';


const H1 = styled.h1`
    font-size: 50px;
`


class MyWorkPage extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        return (
            <div>
                <H1>My Work</H1>
                <br />
                <UploadData />
                <hr />

                <MyWorkResults />
            </div>
        )
    }
}

const ls = [1,2,3,4,5];
var newContent = ls.map(function (number){
        return (<li key={number}>
            <br/>
            <p>{`Here is my work item # ${number}!`}</p>
        </li>)
    }
);


function MyWorkResults() {
    
    return (
        <div>
            <ul>
                {newContent}
            </ul>
        </div>
    )
}


export default MyWorkPage;