import React from "react";
import Link from "next/link";
import { orderTotal } from "../../../../helpers/ordersData";

const OrderGrid = ({order}) => {

    return (
        
        <div
            className="flex flex-col sm:flex-row bg-gray-50 hover:bg-gray-100 px-4"
        >
            {/**acá va la decha de la orden */}
            <div className="flex items-center sm:items-start	 justify-between	sm:justify-start flex-row sm:flex-col w-full sm:w-1/6">
                <div className="flex flex-row items-center sm:items-start	  sm:flex-col mt-2 sm:mt-4">
                    <h5>Total: </h5>

                    <span className="my-4 text-xl  sm:text-3xl	 text-cyan-500">
                        ${ orderTotal(order) }
                    </span>
                </div>

                <span>{order.created_at.substring(0, 10)}</span>
            </div>

            {/**Acá van los orders items */}
            <div className="mb-8 w-full sm:w-5/6">
                {order.order_item.map((order_item) => {
                    return (
                        <div
                            key={order_item.id}
                            className="flex justify-between sm:flex-row items-center py-4"
                        >
                            <div className="flex w-3/6 sm:w-2/5">
                                <Link href={``}>
                                    <div className="w-full sm:w-20">
                                        <img
                                            className="h-16 sm:h-24 cursor-pointer"
                                            src={`${process.env.NEXT_PUBLIC_LARAVEL_IMG_LOCAL}${decodeURIComponent(
                                                order_item.product.img
                                            )}`}
                                            alt={`${order_item.product.name}`}
                                        />
                                    </div>
                                </Link>
                                <div className="flex flex-col justify-evenly ml-4 flex-grow">
                                    <Link href={``}>
                                        <a className="font-bold text-sm capitalize cursor-pointer">
                                            {order_item.product.name}
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-end sm:items-center justify-around w-3/6 sm:w-3/5">
                                <span className="text-right	 sm:text-center w-full sm:w-1/5 font-semibold text-sm">
                                    <div className="block sm:hidden">
                                        U: {order_item.quantity}{" "}
                                    </div>
                                    <div className="hidden sm:block">
                                        {order_item.quantity}
                                    </div>
                                </span>
                                <span className="text-right	 sm:text-center w-full sm:w-1/5 font-semibold text-sm">
                                    ${order_item.product.price}
                                </span>
                                <span className="text-right	 sm:text-center w-full sm:w-1/5  font-semibold text-sm">
                                    $
                                    {order_item.quantity *
                                        order_item.product.price}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    
    );
};

export default OrderGrid;
