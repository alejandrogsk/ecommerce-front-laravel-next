import React from "react";

const OrderMenu = () => {
    return (
        <div className="bg-gray-50 hidden sm:flex mt-10 mb-5 p-4 rounded-3xl">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6">
                Order
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6">
                Product
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 text-center">
                Quantity
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 text-center">
                Price
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 text-center">
                Total
            </h3>
        </div>
    );
};

export default OrderMenu;
