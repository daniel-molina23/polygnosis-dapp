import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui';
import signOut from './signOut';

export const StyledButton = styled(Button)`
    background-color: #ed0d25;
`;



//button allows user to signout once they've been signed in
//with firebase Auth

export const signOutButton = () => {
    const onClickSignOut = async () => {
        try{
            await signOut();
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