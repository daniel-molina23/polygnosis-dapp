import React from 'react';
import IPFS_Logo from '../images/ipfs-logo-with-computer.png';
import styled from 'styled-components';
import { ExploreButton, MyWorkButton } from '../components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import uploadDatasetForCurrentUser from './uploadDatasetForCurrentUser';
import { TextArea,
    ToggleSwitchButton,
    ErrorMessage,
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
    font-weight: ${() => props.fontWeight || 400}
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



// const addFile = async (fileName, filePath) => {
// 	const file = fs.readFileSync(filePath);
// 	const fileAdded = await ipfs.add({path: fileName, content: file});
// 	console.log("fileAdded: ",fileAdded);
// 	const fileHash = fileAdded.cid.toV0();

// 	return fileHash;
// }


export const UploadData = () => {
    // const [datasets, setDatasets] = useState([]);
    // const [filePath, setFilePath] = useState(null); //set in React
    const [body, setBody ] = useState({}); //received from Express API
    const [buffer, setBuffer ] = useState(null); //file buffer for IPFS
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError ] = useState('');
    const [title, setTitle ] = useState('');
    const [description, setDescription ] = useState('');
    const [public, setPublic ] = useState(false);
    const [errorMessage, setErrorMessage ] = useState('');

    const history = useHistory();//re-route page
    const dfd = require("danfojs-node");//data processing like pandas for python

    const readData = (file) => {
        
    } 
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
        setPublic(checked);
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
            console.log('buffer:', buffer);
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

    const onSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        setIsLoading(true); //render to show user the request is processing
        console.log("Submitting file to ipfs...");

        dfd.read_csv("file:///home/Desktop/bigdata.csv", chunk=10000)
            .then(df => {
                df.tail().print()
            }).catch(err=>{
                console.log(err);
            })

        //sending the file to the proxy server
        const sendBody = { buffer,  };
        //ipfsHash, features (array), header (map+array)
        //userId, public(boolean), title
        //description
        //number of rows in header (max=10)
        //

        fetch('https://httpbin.org/post', {
                method: 'post',
                body:    JSON.stringify(sendBody),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json()) //the json I get back!
            .then(json => console.log(json));

        //do feature data processing! {feature1: [1,2,3], header: {...}, etc}

        setBody({
            ipfsHash: fileAdded.cid.toV0(),
        })

        console.log('fileAdded.cid.toV0():',fileAdded.cid.toV0())


        //validate form before going into Firebase
        const validationError = validateForm();
        if(validationError !== null){
            setError(true);
            setIsLoading(false);
            setErrorMessage(validationError);
            return
        }

        //firebase code goes here
        try{
            await uploadDatasetForCurrentUser(body);
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
                                    <form onSubmit={onSubmit} >
                                        <div>
                                            <br/>
                                            <label>Upload file</label>
                                            <input type="file" name="filePath" onChange={captureFile}/>
                                            <br/><br/>
                                            <input type="submit"/>
                                        </div>
                                    </form>
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
                                    {public?
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
                        onClick={onSubmitChanges}
                    >Submit Dataset</FullWidthButton>
                </Form>
            </Div>
        </div>
    );
}