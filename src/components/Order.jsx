import React from 'react';
import {useDispatch} from "react-redux";
import { FaTrash } from "react-icons/fa";

const Order = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div className="w-full float-left mb-[20px]">
                <img
                    className="w-[70px] float-left mr-[20px]"
                    src={"./img/" + item.img}
                />
                <div className="text-[20px] mb-[10px]">{item.title}</div>
                <b className="font-semibold text-emerald-600">{item.price}$</b>

            <FaTrash
                className="relative top-[-25px] float-right text-red-500 cursor-pointer hover:scale-150 hover:text-red-700 hover:translate-[-5px] duration-500"
                onClick={() => {
                    dispatch({
                        type: "deleteOrder",
                        payload: {
                            id: item.id
                        }
                    })
                }}
            />
        </div>
    );
};

export default Order;