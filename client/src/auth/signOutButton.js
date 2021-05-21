import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';
import {signOut} from './signOut';

const StyledButton = styled(Button)`
    background-color: #ed0d25;
    height: 75%;
    text-align: center;
    padding: 3px;
    padding-left: 5px;
    padding-right: 5px;
`;


//button allows user to signout once they've been signed in
//with firebase Auth


export const SignOutButton = () => {

    const onClickSignOut = async () => {
        try{
            await signOut();
            alert("You have successfully signed out!");
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <StyledButton
        onClick={onClickSignOut}
        style={{ float: 'right'}}>
            Sign Out
        </StyledButton>
    );
}