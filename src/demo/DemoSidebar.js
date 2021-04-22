import React from 'react';
import { Link } from 'react-router-dom';


const DemoSidebar = () => {

    return (
        <div>
            <Link class="dropdown-item" to="/explore">
                <button>
                    Explore
                </button>
            </Link>

            <Link class="dropdown-item" to="/my-work">
                <button>
                    My Work
                </button>
            </Link>
        </div>
    );
};

export default DemoSidebar;