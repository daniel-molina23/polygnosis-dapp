import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { isValidBio, isValidDisplayName } from '../auth';
import {
    Button,
    CenteredContentBox,
    HeadingSmall,
    TextInput,
    TextArea,
    UploadSingleFileButton,
    ErrorMessage
} from '../ui';
import { getCurrentUserInfo } from './getCurrentUserInfo';
import { updateCurrentUserInfo } from './updateCurrentUserInfo';


const Form = styled.div`
    width: 600px;
    margin: 32px;
`;

const FieldsTable = styled.table`
    td {
        padding: 8px;
        width: 50%;
    }
`;

const FullWidthInput = styled(TextInput)`
    width: 100%;
`;

const FullWidthButton = styled(Button)`
    width: 100%;
`;

/*
    This page loads a user's current profile data (name, bio, etc.)
    and allows them to edit it. When the user clicks "save", the changes
    will be persisted to Firebase.
*/
export const EditProfilePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [displayName, setDisplayName] = useState('');
    // const [profilePictureFile, setProfilePictureFile] = useState('');
    const [bio, setBio] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    useEffect(() => {
        const loadUserInfo = async () => {
            const userInfo = await getCurrentUserInfo();
            setFirstName(userInfo.firstName);
            setLastName(userInfo.lastName);
            setBio(userInfo.bio);
            setDisplayName(userInfo.displayName);
            setIsLoading(false);
        }

        loadUserInfo();
    }, []);

    // A helper function that makes sure all the fields
    // are filled out correctly
    const validateForm = () => {
        if (!firstName || !lastName || !displayName) return 'Please fill out all fields';
        if (!isValidBio(bio)) return 'Please enter a biography with less than 300 characters';
        if (!isValidDisplayName(displayName)) return 'Please enter a nick name with less than 20 characters';
        return null;
    }
    
    // const handleFileSelect = file => {
    //     setProfilePictureFile(file);
    // }

    const onSubmitChanges = async () => {
        setErrorMessage('');

        // If there are any validation errors, show an error
        // and do not proceed.
        const validationError = validateForm();
        if (validationError !== null) {
            setErrorMessage(validationError);
            return;
        }

        // Firebase code for saving user's changes
        const changes = {
            firstName,
            lastName,
            displayName,
            bio,
        }

        await updateCurrentUserInfo(changes);

        alert('You\'ve successfully updated your profile.\nThank you!');
        history.push('/explore');
    }

    return (
        <CenteredContentBox>
            <Form>
                <HeadingSmall>Edit Profile</HeadingSmall>
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
                            <td>First Name:</td>
                            <td>
                                <FullWidthInput
                                    disabled={isLoading}
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>
                                <FullWidthInput
                                    disabled={isLoading}
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Nick Name or Display Name:</td>
                            <td>
                                <FullWidthInput
                                    disabled={isLoading}
                                    value={displayName}
                                    onChange={e => setDisplayName(e.target.value)} />
                            </td>
                        </tr>
                        {/* <tr>
                            <td>Upload a Profile Picture:</td>
                            <td>
                                <UploadSingleFileButton
                                    disabled={isLoading}
                                    onFileUploaded={handleFileSelect}/>
                            </td>
                        </tr> */}
                        <tr>
                            <td>Bio:</td>
                            <td>
                                <TextArea
                                    disabled={isLoading}
                                    rows='5'
                                    value={bio}
                                    style={{ width: '100%' }}
                                    onChange={e => setBio(e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </FieldsTable>
                <FullWidthButton
                    disabled={isLoading}
                    onClick={onSubmitChanges}
                >Save Changes</FullWidthButton>
            </Form>
        </CenteredContentBox>
    )
}