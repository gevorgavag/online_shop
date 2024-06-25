import React from 'react';
import {useDispatch} from "react-redux";

const ShowFullItem = ({showFullItem, setShowFullItem, itemValue}) => {
    const dispatch = useDispatch();

    return (
        <div
            className={`${!showFullItem ? "hidden" : "flex"} justify-center items-center fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.8)]`}
            onClick={() => setShowFullItem(!showFullItem)}
        >
            <div
                className="relative min-h-[200px] max-h-full w-[500px] bg-gray-100 border-2 rounded-[20px]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute right-3 top-1 w-[25px] h-[25px] rounded-[50%] text-black flex justify-center items-center duration-500 hover:bg-red-700 hover:text-white"
                    onClick={() => setShowFullItem(!showFullItem)}
                >
                    x
                </button>
                <div
                    className="my-[30px] justify-center items-center bg-gray-100 overflow-hidden relative pb-[20px]"
                >
                    <img
                        className="w-full hover:scale-105 duration-500 h-[500px] cursor-pointer rounded-[10px]"
                        src={"./img/" + itemValue.img}
                    />
                    <div className="text-2xl font-semibold my-[10px] mx-[20px] text-[#333]">{itemValue.title}</div>
                    <p className="opacity-50 mx-[20px] text-[#333]">{itemValue.desc}</p>
                    <b className="mx-[20px] text-emerald-500">{itemValue.price}$</b>
                    <div
                        className="absolute right-[20px] bottom-[20px] w-[35px] h-[35px] rounded-[50%] bg-orange-700 text-center leading-[35px] text-white poin cursor-pointer font-bold hover:scale-125 hover:translate-y-[-5px] duration-500"
                        onClick={() => {
                            dispatch({
                                type: "addOrder",
                                payload: {
                                    item: itemValue
                                }
                            })
                        }}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowFullItem;