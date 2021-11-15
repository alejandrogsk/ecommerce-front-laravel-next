import axios from 'axios';

export async function getOrders(token, path) {
    try {
        let req = await axios.get(path, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return req.data;
    } catch (e) {
        return false;
    }
}

export function orderTotal( order ) {
    let total = 0;
    for (let i = 0; i < order.order_item.length; i++) {
        let price = order.order_item[i].product.price;
        let quantity = order.order_item[i].quantity;

        total += price * quantity;
    }
    return total;
};