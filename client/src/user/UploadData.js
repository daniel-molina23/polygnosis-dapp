import React from 'react';
import IPFS_Logo from '../images/ipfs-logo-with-computer.png';
import styled from 'styled-components';
import { ExploreButton, MyWorkButton } from '../components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {uploadDatasetForCurrentUser} from './uploadDatasetForCurrentUser';
import { TextArea,
    ToggleSwitchButton,
    ErrorMessage,
    Button,
} from '../ui';


const fetch = require('node-fetch');

//TODO: for CORS error and proxy safety: https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
//TODO: for proxy for greater security: https://rapidapi.com/blog/create-react-app-express/#:~:text=But%20if%20you%20just%20remember,that%20contain%20your%20React%20app.


const Image = styled.img`
    height: 50%;
    width: 50%;
`;

const Div = styled.div`
    color: ${(props) => props.color || 'white'};
    font-weight: ${(props) => props.fontWeight || 400}
`;

const State = styled.p`
    font-size: 30px;
`;

const FieldsTable = styled.table`
    td {
        padding: 8px;
        width: 50%;
    }
`;

const PublicToggs = styled.small`
    color: ${(props => props.color || 'green')}
    margin-left: 10px;
`;

const Form = styled.div`
    width: 600px;
    margin: 32px;
`;

const FullWidthButton = styled(Button)`
    width: 100%;
`;


export const UploadData = () => {
    const [body, setBody ] = useState({}); //received from Express API
    const [buffer, setBuffer ] = useState(null); //file buffer for IPFS
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError ] = useState('');
    const [title, setTitle ] = useState('');
    const [description, setDescription ] = useState('');
    const [isPublic, setIsPublic ] = useState(false);
    const [errorMessage, setErrorMessage ] = useState('');

    const history = useHistory();//re-route page


    // useEffect(() => {
    //     const unsubscribe = subscribeToCurrentUserDatasets(results => {
    //         setDatasets(results);
    //     }); //changes or updates dataset
        
    //     return unsubscribe;
    // }, []);//empty paranthesis to ensure it only gets called once!


    //this one was meant for the express JS server with the proxy from this package.json!
    // const tempSeverCom = async (filePath) => {
    //     console.log('filePath: ', filePath);
    //     fetch('/ipfs-api/ipfsFileAdd/' + filePath)
    //         .then(result => result.json())
    //         .then(body => setBody(body));
    // }

    const togglePublic = () => {
        const checked = document.getElementById('checkbox').checked
        setIsPublic(checked);
    }

    const captureFile = async (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        console.log(file);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = async () => {
            const temp = Buffer(reader.result);
            console.log('In temp: ', temp);
            setBuffer(temp);
        }
        setError(false);
    }

    const validateForm = () => {
        if(title === '' || title.length > 60) return 'Make sure title is less than 60 characters';
        if(description === '' || description.length > 300) return 'Make sure description is less than 300 characters';
        if(buffer === null) return 'Try re-uploading the file one more time. Error occured';
        if(body.ipfsHash == null || body.features == null || body.header == null || body.numOfRows == null){
            //double equality operator can not tell difference between null and undefined (a good thing!)
            return 'JSON was not returned correctly!';
            //numOfRows (MAX=10 rows)
        }
        //userId
        return null;
    }

    const onSubmitAll = async (event) => {
        await onSubmit(event);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        setIsLoading(true); //render to show user the request is processing
        console.log("Submitting file from UploadData..., buffer is:\n", buffer);

        const body = JSON.stringify(buffer.toJSON());
        console.log('body:', body)

        let tempData = null;
        //GET request
        await fetch('/ipfs-api/ipfsFileAdd/', {
                method: 'POST',
                body,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => {
                //RESPONSE BACK:
                // {ipfsHash (str), features (array), header ({featureName:values}), numOfRows (int)}
                const json = res.json();
                console.log('JSON received from PROXY SERVER: ',json);
                tempData = json;
            }) //the json I get back!
            .catch(e => {
                //in case of error
                setError(true);
                setIsLoading(false);
                setErrorMessage('Something went wrong while sending file to Express Server');
                console.error(e);
                return
            });
        


        //validate form before going into Firebase
        const validationError = validateForm();
        if(validationError !== null && tempData !== null){
            setError(true);
            setIsLoading(false);
            setErrorMessage(validationError);
            return
        }

        
        //combine fields
        const newBody = {
            ...tempData,
            isPublic,
            title,
            description,
        }

        console.log('The final body before going to the DB:\n', body);

        //firebase code goes here
        try{
            //userId(extracted from DB back-end) and added to doc
            await uploadDatasetForCurrentUser(newBody);
        } catch(e){
            setErrorMessage(e.message);
            return
        }

        setErrorMessage('');
        setIsLoading(false);
        alert('Submission succesful!');
        history.push('/my-work');
    }

    return (
        <div>
            <div>
                <ExploreButton />
                <MyWorkButton />
            </div>
            <Div>
                <Image src={IPFS_Logo} alt="IPFS Logo With Computer Connection"></Image>
                <h1 className="title is-1">Upload file to IPFS</h1>
                {error?
                    <Div color={'red'} fontWeight={600}>Sorry Error has occured, try again</Div>
                    :
                    <></>
                }
                
                <Form>
                    {errorMessage
                        ? <ErrorMessage style={{
                            marginBottom: '16px',
                        }}>
                            {errorMessage}
                        </ErrorMessage>
                        : null}
                    <FieldsTable>
                        <tbody>
                            <tr>
                                <td>
                                        <div>
                                            <br/>
                                            <label>Upload file</label>
                                            <input type="file" name="filePath" onChange={captureFile}/>
                                            <br/>
                                        </div>
                                </td>
                                <td>
                                    {isLoading?
                                        <State> Loading ...</State>
                                        :
                                        <></>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Title of the dataset:</td>
                                <td>
                                    <TextArea
                                        disabled={isLoading}
                                        value={title}
                                        style={{ width: '100%' }}
                                        onChange={e => setTitle(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Dataset description:</td>
                                <td>
                                    <TextArea
                                        disabled={isLoading}
                                        value={description}
                                        rows='5'
                                        style={{ width: '100%' }}
                                        onChange={e => setDescription(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Make dataset public:</td>
                                <td>
                                    <ToggleSwitchButton onChange={togglePublic}/>
                                </td>
                                <td>
                                    {isPublic?
                                        <PublicToggs color={'blue'}>
                                            public
                                        </PublicToggs>
                                        :
                                        <PublicToggs>
                                            not public
                                        </PublicToggs>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </FieldsTable>
                    <FullWidthButton
                        disabled={isLoading}
                        onClick={onSubmitAll}
                    >Submit Dataset</FullWidthButton>
                </Form>
            </Div>
        </div>
    );
}