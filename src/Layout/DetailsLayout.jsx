import React from 'react';
import RightSide from '../Pages/RightSide/RightSide';
import NewsDetails from '../Pages/News/NewsDetails';

const DetailsLayout = () => {
    return (
        <div className='grid grid-cols-4'>
            <NewsDetails />
            <RightSide />
        </div>
    );
};

export default DetailsLayout;