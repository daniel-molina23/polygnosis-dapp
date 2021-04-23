import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../ui';


export const ExploreButton = () => {

    return (
        <Link to="/explore">
            <Button>
                Explore Page
            </Button>
        </Link>
    );
};
