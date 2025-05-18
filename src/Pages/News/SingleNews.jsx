import React, { useState } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { Link } from 'react-router';

const SingleNews = ({ item }) => {

    return (
        <div className='border-[1px] rounded-md border-[#e1e1e1]'>
            <div className='py-[10px] bg-[#e1e1e1] px-[20px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <img className='h-[40px] w-[40px] rounded-full border-[1px]' src={item?.author?.img} alt="image" />
                    <div>
                        <h4 className='font-semibold capitalize'>{item?.author?.name}</h4>
                        <p className='text-[#808080] text-[14px]'>{item?.author?.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <div>
                        <CiBookmark className='text-[22px]' />
                    </div>
                    <div>
                        <IoMdShare className='text-[22px]' />
                    </div>
                </div>
            </div>

            <div className='px-[20px] w-full'>
                <h2 className='text-[20px] font-bold py-[14px]'>{item?.title}</h2>
                <img className='w-full rounded-md' src={item?.thumbnail_url} alt="" />
                <p className='text-justify line-clamp-4 pt-[30px]'>{item?.details}</p>
                <Link className='text-[#ff9900] font-bold' to={`/news/${item?.id}`}>Read More</Link>
                <div className='h-[1px] w-full bg-[#e1e1e1] mt-[20px]'>

                </div>
            </div>

            <div className='flex items-center justify-between px-[20px] pb-[20px] pt-[20px] border-b-[]'>
                <div className='flex items-center gap-[8px]'>
                    <FaStar className='text-[#ff9900]' />
                    <p>{item?.rating?.number}</p>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <FaEye />
                    <p>
                        {item?.total_view}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;