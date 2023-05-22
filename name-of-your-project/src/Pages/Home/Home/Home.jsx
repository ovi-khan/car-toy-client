import React from 'react';
import Banner from '../Banner/Banner';
import CategoryTab from '../CategoryTab/CategoryTab';
import Status from '../../Status/Status';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryTab></CategoryTab>
            <Status></Status>
        </div>
    );
};

export default Home;