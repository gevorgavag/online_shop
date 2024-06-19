import React from 'react';
import Item from "./Item";

const Items = ({items}) => {
    return (
        <main
            className="flex flex-wrap w-full justify-between"
        >
            {
                items.map(item => {
                    return(
                        <Item key={item.id} item={item}/>
                    )
                })
            }
        </main>
    );
};

export default Items;