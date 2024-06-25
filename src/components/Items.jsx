import React, {useState} from 'react';
import Item from "./Item";
import ShowFullItem from "./ShowFullItem";

const categories = ['all', 'table', 'chairs', 'sofa', 'light'];

const Items = ({items, showFullItem, setShowFullItem, setItemValue}) => {
    const [selectedCategory, setSelectedCategory] = useState('all')

    const filterItems = (item) => {
        if (selectedCategory === 'all') {
            return true
        }
        return item.category === selectedCategory
    }


    return (
        <div>
            <div className="flex w-full justify-between my-[50px]">
                {
                    categories.map(category => {
                        return (
                            <div
                                key={category}
                                className="py-[10px] px-[20px] border-2 bg-gray-100 border-gray-100 rounded-[50px] cursor-pointer hover:border-gray-500 duration-500 hover:scale-110 capitalize"
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </div>
                        )
                    })
                }
            </div>
            <main
                className="flex flex-wrap w-full justify-between"
            >
                {
                    items.filter(filterItems).map(item => {
                        return (
                                <Item key={item.id} setShowFullItem={setShowFullItem} showFullItem={showFullItem} item={item} setItemValue={setItemValue}/>
                        )
                    })
                }
            </main>
        </div>
    );
};

export default Items;