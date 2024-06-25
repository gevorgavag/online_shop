import React from 'react';
import {combineReducers, createStore} from "redux";
import {initialItems, itemsReducer} from "./itemsSlice";
import {ordersReducer, initialOrders} from "./ordersSlice";

const store = createStore(combineReducers({
    orders: ordersReducer,
    items: itemsReducer,
}), {
    orders: initialOrders,
    items: initialItems,
})

export default store;