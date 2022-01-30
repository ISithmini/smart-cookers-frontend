import React from 'react';
import HomeComponent from '../Components/HomeComponent/HomeComponent';


interface HomeProps { }

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div className="home">
            <HomeComponent />
        </div>
    );
}

export default Home;