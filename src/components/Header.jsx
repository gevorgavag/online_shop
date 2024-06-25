import React, {useRef, useState} from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {useSelector} from "react-redux";
import Order from "./Order";
import {useOutsideClick} from "../hooks/useOutsideClick";



const Header = () => {

    const {orders} = useSelector(state => state);

    let result = 0;
    orders.map(order => {
        return result += Number.parseFloat(order.price);
    })

    const {isActive, setIsActive, ref} = useOutsideClick(false);

    return (
        <header className="font-semibold text-xl relative">
            <div className="flex justify-between">
                <div className="items-center justify-center">House Staff</div>
                <div className="flex">
                    <div ref={ref}>
                        <FaShoppingCart
                            onClick={(e) => {
                                setIsActive(!isActive);
                            }}
                            className={`${isActive ? "text-red-600 scale-150 duration-500" : "text-black"} hover:scale-150 float-right cursor-pointer duration-500 hover:text-red-600`}
                        />
                        {
                            isActive && (
                                <div
                                    className="absolute top-[30px] right-0 w-[450px] text bg-gray-100 shadow-xl shadow-gray-300 z-10 px-[20px] pt-[20px]">
                                    {
                                        orders.length > 0
                                            ?
                                            orders.map(item => {
                                                return (
                                                    <Order key={item.id} item={item}/>
                                                )
                                            })
                                            :
                                            <p className="pb-[20px]">No thing</p>
                                    }
                                    <p className="float-left mb-2 w-full text-gray-800 font-serif">Summa: {new Intl.NumberFormat().format(result)}$</p>
                                </div>
                            )
                        }
                    </div>
                    <ul className="float-right font-normal">
                        <li className="inline ml-[25px] cursor-pointer opacity-80 hover:opacity-30 duration-500">About
                            us
                        </li>
                        <li className="inline ml-[25px] cursor-pointer opacity-80 hover:opacity-30 duration-500">Contacts</li>
                        <li className="inline ml-[25px] cursor-pointer opacity-80 hover:opacity-30 duration-500">Office</li>
                    </ul>
                </div>
            </div>
            <div
                className="w-full my-[50px] relative"
            >
                <div className="absolute bottom-16 left-16 text-3xl w-[300px]">
                    Лучшие товары для вашего дома
                    <p className="font-normal text-sm ">По низким ценам</p>
                </div>
                <img
                    className="w-full h-[500px]"
                    src="https://media.architecturaldigest.com/photos/64f71af50a84399fbdce2f6a/16:9/w_2560%2Cc_limit/Living%2520with%2520Lolo%2520Photo%2520Credit_%2520Life%2520Created%25204.jpg"
                />
            </div>
        </header>
    );
};

export default Header;