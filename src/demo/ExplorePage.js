import React from 'react';
import { Link } from 'react-router-dom';
// import subdomains from './subdomains';
import demoRootPath from './subdomains';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 50px;
`


class ExplorePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <H1>Explore Page</H1>
                    <ul>
                        <li key={demoRootPath}>
                            <Link to={demoRootPath }>Main Demo Page</Link>
                        </li>
                        <li key={'my-work'}>
                            <Link to={ '/my-work' }>My Work Page</Link>
                        </li>
                        
                    </ul>
                    <hr />
                    <div>
                        <ul>
                            {newContent}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

};

const ls = [100,200,300,400,500];
var newContent = ls.map(function (number){
        return (<li key={number}>
            <br/>
            <p>{`Engineer-${number}'s work!`}</p>
        </li>)
    }
);


export default ExplorePage;