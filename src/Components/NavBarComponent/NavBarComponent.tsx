import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavBarComponetProps {

}

const NavBarComponet: React.FunctionComponent<NavBarComponetProps> = () => {
    const navigate = useNavigate();

    return (
        <div> Smart
            {/* <Link to="/">Smart Cookers</Link> */}
            {/* <button onClick={() => navigate('/')}>Smart</button> */}
        </div>
    );
}

export default NavBarComponet;