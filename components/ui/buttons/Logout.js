/**
 * This is used in the menu for logout/login
 */
import React from "react";
//Next
import { useRouter } from "next/router";
import Link from "next/link";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Actions
import { startLogout } from "../../../redux/auth/authActions";
//Component
import Spinner from "../loaders/Spinner";

const Logout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token, checking } = useSelector((state) => state.auth);

    const handleLogout = async () => {
        dispatch(startLogout(token));
        router.replace("/auth/login");
    };

    return token ? (
        <span
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-1"
        >
            <p className="cursor-pointer" onClick={() => handleLogout()}>
                {checking ? <Spinner /> : "Logout"}
            </p>
        </span>
    ) : (
        <Link href="/auth/login">
            <span
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-1"
            >
                <p className="cursor-pointer">Login</p>
            </span>
        </Link>
    );
};
export default Logout;
