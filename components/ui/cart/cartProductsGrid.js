/**
 * This component shows the products in cart page
 */
import React from "react";
//Next
import Link from "next/link";
//Redux
import { useDispatch } from "react-redux";
import {
    addQuantity,
    removeQuantity,
    removeProduct,
} from "../../../redux/cart/cartActions";

const CartProductsGrid = ({ productsArr }) => {
    const dispatch = useDispatch();

    const noOfProducts = productsArr.length;

    const addUnit = (product) => {
        dispatch(addQuantity(product));
    };

    const removeUnit = (product, units) => {
        if (units === 1) {
            dispatch( removeProduct(product) );
        } else {
            dispatch( removeQuantity(product) );
        }
    };

    const removeOneProduct = (product) => {
        dispatch(removeProduct(product));
    };

    return (
        <div className="w-full lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{noOfProducts} Items</h2>
            </div>

            <div className="hidden sm:flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Total
                </h3>
            </div>

            {!productsArr || productsArr.length === 0 ? (
                <p className="mb-8">You dont choose any product yet.</p>
            ) : (
                productsArr.map((items) => {
                    const { product, units } = items;
                    return (
                        <div
                            key={product.id}
                            className="flex flex-col sm:flex-row items-center hover:bg-gray-100 -mx-8 px-6 py-5 "
                        >
                            <div className="flex w-full sm:w-2/5">
                                <Link
                                    href={`/category/${product.category.title}/${product.name}`}
                                >
                                    <div className="w-full sm:w-20 ">
                                        <img
                                            className="h-24 rounded-3xl cursor-pointer"
                                            src={`http://localhost${decodeURIComponent(
                                                product.img
                                            )}`}
                                            alt={product.name}
                                        />
                                    </div>
                                </Link>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <Link
                                        href={`/category/${product.category.title}/${product.name}`}
                                    >
                                        <a className="font-bold text-sm capitalize cursor-pointer">
                                            {product.name}
                                        </a>
                                    </Link>
                                    <Link
                                        href={`/category/${product.category.title}`}
                                    >
                                        <a className="text-cyan-500 text-xs capitalize cursor-pointer">
                                            {product.category.title}
                                        </a>
                                    </Link>
                                    <button
                                        onClick={() =>
                                            removeOneProduct(product)
                                        }
                                        className="font-semibold hover:text-cyan-500 text-gray-500 text-xs mr-auto"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-around w-full sm:w-3/5">
                                <div className="flex justify-center w-1/5 mt-4 md:mt-0">
                                    <button
                                        onClick={() =>
                                            removeUnit(product, units)
                                        }
                                    >
                                        <svg
                                            className="fill-current text-gray-600 w-3"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </button>

                                    <span className="mx-2 border text-center w-8 rounded-3xl">
                                        {units}
                                    </span>

                                    <button onClick={() => addUnit(product)}>
                                        <svg
                                            className="fill-current text-gray-600 w-3"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </button>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    ${product.price}
                                </span>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    ${product.price * units}
                                </span>
                            </div>
                        </div>
                    );
                })
            )}

            <div className="rounded-3xl w-60 bg-cyan-500 hover:bg-cyan-600 flex justify-center items-center py-2">
            <Link href="/">
                <a className="text-white">
                    Continue Shopping
                </a>
            </Link>
            </div>
        </div>
    );
};

export default CartProductsGrid;