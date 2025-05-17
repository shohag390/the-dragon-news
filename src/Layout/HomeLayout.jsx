import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import LeftSide from '../Pages/LeftSide/LeftSide';
import News from '../Pages/News/News';
import RightSide from '../Pages/RightSide/RightSide';

const HomeLayout = () => {
    return (
        <>
            <div className='grid grid-cols-6 gap-[20px] container mx-auto px-[80px]'>
                <LeftSide />
                <News />
                <RightSide />
            </div>
        </>
    );
};

export default HomeLayout;