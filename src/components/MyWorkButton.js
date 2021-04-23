import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../ui';


export const MyWorkButton = () => {

    return (
            <Link to="/my-work">
                <Button>
                    My Work
                </Button>
            </Link>
    );
};
