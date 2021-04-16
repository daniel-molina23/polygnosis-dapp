import React from 'react';
import IPFS_Logo from '../images/ipfs-logo-with-computer.png';
import styled from 'styled-components';

const Image = styled.img`
    height: 50%;
    width: 50%;
`;


const Demo = () => (
    <div>
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
    </div>
);

export default Demo;