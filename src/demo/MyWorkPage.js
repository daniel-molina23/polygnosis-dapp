import React from 'react';
import styled from 'styled-components';
import { ExploreButton } from '../components';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { UserDatasetListPage } from '../datasetsDisplay';
import { Settings } from '@styled-icons/fluentui-system-filled';


const H1 = styled.h1`
    font-size: 50px;
`;

const Div = styled.div`
    color: white;
`;

const SpacedDiv = styled.div`
    margin-top: 15px;
    margin-bottom: 10px;
    float: right;
`;

const BlackFont = styled.div`
    color:black;
`;

const SettingsIcon = styled(Settings)`
    color: grey;
`;


class MyWorkPage extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    render() {
        return (
            <div>
                <Div>
                    <SpacedDiv>
                        <ExploreButton />
                        <Link to="/upload-data">
                            <Button>
                                Upload Datasets
                            </Button>
                        </Link>
                        <Link to="/edit-profile">
                            <SettingsIcon size="50" />
                        </Link>
                    </SpacedDiv>

                    <H1>My Work</H1>
                    <hr />
                </Div>
                <BlackFont>
                    <UserDatasetListPage />
                </BlackFont>
            </div>
        )
    }
}


// const ls = [1,2,3,4,5];
// var newContent = ls.map(function (number){
//         return (
//             <li key={number}>
//                 <br/>
//                 <p>{`Here is my work item # ${number}!`}</p>
//             </li>
//         )
//     }
// );


// function MyWorkResults() {
    
//     return (
//         <div>
//             <ul>
//                 {newContent}
//             </ul>
//         </div>
//     )
// }


export default MyWorkPage;