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
                </div>
            </div>
        )
    }

}


export default ExplorePage;