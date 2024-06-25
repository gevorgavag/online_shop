

export const itemsReducer = (state=[], action) => {

    return state;
}


export const initialItems = [
    {
        id: 0,
        title: "Gray chair",
        img: "grayChair.webp",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        category: "chairs",
        price: "49.99"
    },
    {
        id: 1,
        title: "Table",
        img: "table.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        category: "table",
        price: "149.00"
    },
    {
        id: 2,
        title: "Sofa",
        img: "safa.jpeg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        category: "sofa",
        price: "549.99"
    },
    {
        id: 3,
        title: "Lamp",
        img: "lamp.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        category: "light",
        price: "25.00"
    },
    {
        id: 4,
        title: "White chair",
        img: "whiteChair.jpg",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        category: "chairs",
        price: "49.99"
    }
]

let filterCategory = initialItems;