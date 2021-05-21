import React from 'react';
import IPFS_Logo from '../images/ipfs-logo-with-computer.png';
import styled from 'styled-components';
import { ExploreButton, MyWorkButton } from '../components';
import { useState, useEffect } from 'react';


const Image = styled.img`
height: 50%;
width: 50%;
`;

const Div = styled.div`
color: white;
`;

const Alert = styled.p`
    font-size: 60px;
`;

export const UploadData = () => {
    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        const unsubscribe = subscribeToCurrentUserDatasets(results => {
            setDatasets(results);
        }); //changes or updates dataset
        
        return unsubscribe;
    }, []);//empty paranthesis to ensure it only gets called once!


    return (
        <div>
            <div>
                <ExploreButton />
                <MyWorkButton />
            </div>
            <Div>
                <Image src={IPFS_Logo} alt="IPFS Logo With Computer Connection"></Image>
                <h1 className="title is-1">IPFS Demo</h1>

                <h1>Upload file to IPFS</h1>
                <form action='/upload' method="POST" enctype="multipart/form-data">
                    <label>Filename</label>
                    <input type="text" name="fileName"/>
                    <br/><br/>
                    <label>Upload file</label>
                    <input type="file" name="file" onChange={this.eventCaptured}/>
                    {/* capture the file on change */}
                    <br/><br/>
                    <input type="submit" name="Submit"/>
                </form>
                <Alert>MAKE SURE TO CREATE FUNCTIONALITY!!!</Alert>
            </Div>
        </div>
    );
}