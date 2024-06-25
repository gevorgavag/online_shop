
export const ordersReducer = (state = [], action) => {
    if (action.type === "addOrder") {
        let isInArr = false;
        state.forEach(item => {
            if(item.id === action.payload.item.id) {
                isInArr = true;
            }
        })
        if(!isInArr) {
            return [
                ...state,
                action.payload.item
            ]
        }
    } else if(action.type === "deleteOrder") {
        return state.filter(order => order.id !== action.payload.id)
    }

    return state;
}

export const initialOrders = []