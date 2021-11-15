/**
 * This is used in the menu for show or hide orders
 */
import React from "react";
import Link from "next/link";
//Redux
import {  useSelector } from "react-redux";

const OrdersForMenu = () => {
    const { user } = useSelector((state) => state.auth);


    //if user.role.id == 1 es admin
    if(user == null){
        return null;
    }
    return (
        <>
            {user.role.id === 2? (
                <Link href="/orders/client">
                    <span
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                    >
                        <p className="cursor-pointer">Your orders</p>
                    </span>
                </Link>
            ) : (
                <>
                    <Link href="/orders/admin/pending">
                        <span
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-1"
                        >
                            <p className="cursor-pointer">New orders</p>
                        </span>
                    </Link>

                    <Link href="/orders/admin/sended">
                        <span
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-1"
                        >
                            <p className="cursor-pointer">Sended orders</p>
                        </span>
                    </Link>
                </>
            )}
        </>
    );
};
export default OrdersForMenu;
