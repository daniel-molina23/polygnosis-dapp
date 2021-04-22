import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import subdomains from '../demo/subdomains';
import demoRootPath from '../demo/subdomains';
import styled from 'styled-components';




const H1 = styled.h1`
    font-size: 50px;
`

const buddyPage = '/explore';


class MyWorkPage extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        return (
            <div>
                <H1>My Work</H1>
                <ul>
                    <li key={ demoRootPath }>
                        <Link to={ demoRootPath }>Main Demo Page</Link>
                    </li>
                    <li key={buddyPage}>
                        <Link to={ buddyPage }>Explore Page</Link>
                    </li>
                </ul>

                <hr />

                <MyWorkResults />
            </div>
        )
    }
}

const ls = [100,200,300,400,500];
var newContent = ls.map(function (number){
        return (<li key={number}>
            <br/>
            <p>{`Here is list item # ${number}!`}</p>
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