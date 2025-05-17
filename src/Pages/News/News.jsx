import React, { useEffect, useState } from 'react';
import SingleNews from './SingleNews';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then((res) => res.json())
            .then((data) => setNews(data))
    }, [])

    console.log(news);


    return (
        <div className='col-span-4'>
            <h4 className="pb-[18px] text-[18px] font-bold">
                Dragon News Home
            </h4>

            <div className='grid grid-cols-1 gap-[20px]'>
                {
                    news?.map((item) => <SingleNews key={item?.id} item={item} />)
                }
            </div>
        </div >
    );
};

export default News;