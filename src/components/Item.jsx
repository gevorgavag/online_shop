import React from 'react';
import {useDispatch} from "react-redux";
import ShowFullItem from "./ShowFullItem";

const Item = ({item, setShowFullItem, showFullItem, setItemValue}) => {
    const dispatch = useDispatch();


    return (
        <div
            className="w-[30%] mb-[50px] bg-gray-100 overflow-hidden relative pb-[20px]"
        >
            <img
                className="w-full hover:scale-105 duration-500 h-[400px] cursor-pointer"
                src={"./img/" + item.img}
                onClick={() => {
                    setItemValue(item);
                    setShowFullItem(!showFullItem);
                }}
            />
            <div className="text-2xl font-semibold my-[10px] mx-[20px] text-[#333]">{item.title}</div>
            <p className="opacity-50 mx-[20px] text-[#333]">{item.desc}</p>
            <b className="mx-[20px] text-emerald-500">{item.price}$</b>
            <div
                className="absolute right-[20px] bottom-[20px] w-[35px] h-[35px] rounded-[50%] bg-orange-700 text-center leading-[35px] text-white poin cursor-pointer font-bold hover:scale-125 hover:translate-y-[-5px] duration-500"
                onClick={() => {
                    dispatch({
                        type: "addOrder",
                        payload: {
                            item: item
                        }
                    })
                }}
            >
                +
            </div>
        </div>
    );
};

export default Item;