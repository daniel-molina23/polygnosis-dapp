import React from 'react';
import IPFS_Logo from '../images/ipfs-logo-with-computer.png';
import styled from 'styled-components';
import DemoSidebar from '../components/DemoSidebar';
import { Link, Route, useRouteMatch, useParams } from 'react-router-dom';

// const ipfsClient = require('ipfs-http-client');
// const ipfs = ipfsClient('http://localhost:5001');//connect to daemon server through port 5001

// const addFile = async (fileName, filePath) => {
// 	const file = fs.readFileSync(filePath);
// 	const fileAdded = await ipfs.add({path: fileName, content: file});
// 	console.log("fileAdded: ",fileAdded);
// 	const fileHash = fileAdded.cid.toV0();

// 	return fileHash;
// }


const Image = styled.img`
    height: 50%;
    width: 50%;
`;

const Div = styled.div`
    color: white;
`;

const subdomains = [
    {
        name: 'Explore Page',
        id: 'explore',
        description: 'Page to visually see other datasets from other developers',
        resources: []
    },
    {
        name: 'My Work Page',
        id: 'my-work',
        description: 'Page to visually see your own uploaded datasets',
        resources: []
    }
];

function ExplorePage() {
    const { url, path } = useRouteMatch()

    return (
        <div>
            <h1>Explore Page</h1>
            <ul>
                {subdomains.map(({ name, id }) => (
                <li key={id}>
                    <Link to={`${url}/${id}`}>{name}</Link>
                </li>
                ))}
            </ul>

            <hr />

            <Route path={`${path}/:resultsId`}>
                <ExploreResults />
            </Route>
        </div>
    )
}

function ExploreResults() {
    const { resultsId } = useParams();

    const result = subdomains.find(({ id }) => id === resultsId);

    return (
        <div>
            <h2>{result.name}</h2>
            <p>{result.description}</p>

            <ul>
                {[1,2,3,4,5].forEach((number) => (
                <li key={number}>
                    <br/>
                    <p>{`Here is list item # ${number}!`}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}


function MyWorkPage() {
    const { url, path } = useRouteMatch()

    return (
        <div>
            <h1>My Work</h1>
            <ul>
                {subdomains.map(({ name, id }) => (
                <li key={id}>
                    <Link to={`${url}/${id}`}>{name}</Link>
                </li>
                ))}
            </ul>

            <hr />

            <Route path={`${path}/:resultsId`}>
                <MyWorkResults />
            </Route>
        </div>
    )
}

function MyWorkResults() {
    const { resultsId } = useParams();

    const result = subdomains.find(({ id }) => id === resultsId);

    return (
        <div>
            <h2>{result.name}</h2>
            <p>{result.description}</p>

            <ul>
                {[100,200,300,400,500].forEach((number) => (
                <li key={number}>
                    <br/>
                    <p>{`Here is list item # ${number}!`}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}




const Demo = () => (
    <Div>
        <Route>

        </Route>
        <DemoSidebar />
        <Image src={IPFS_Logo} alt="IPFS Logo With Computer Connection"></Image>
        <h1 className="title is-1">IPFS Demo</h1>

        <h1>Upload file to IPFS</h1>
        <form action='/upload' method="POST" enctype="multipart/form-data">
            <label>Filename</label>
            <input type="text" name="fileName"/>
            <br/><br/>
            <label>Upload file</label>
            <input type="file" name="file"/>
            <br/><br/>
            <input type="submit" name="Submit"/>
        </form>
    </Div>
);

export default Demo;