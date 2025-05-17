import { useEffect, useState } from "react";


const LeftSide = () => {
    const [catagori, setCatagori] = useState([]);
    const [btn, setBtn] = useState(1);



    useEffect(() => {
        fetch('/categories.json')
            .then((res) => res.json())
            .then((data) => setCatagori(data))
    }, [])

    const handleBtn = (id) => {
        const filteredCategori = catagori?.filter((item) => item?.id === id)
        setBtn(filteredCategori[0].id);
    }


    return (
        <div>
            <div>
                <h4 className="pb-[18px] text-[18px] font-bold">All Caterogy</h4>
                <div className="flex flex-col items-center">
                    {
                        catagori?.map((cate) => (
                            <button className={`${btn === cate?.id ? "bg-[#e1e1e1] text-[#000]" : " text-[gray]"} w-full py-[10px] rounded-md`} onClick={() => handleBtn(cate?.id)} key={cate?.id}>
                                {cate?.name}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSide;