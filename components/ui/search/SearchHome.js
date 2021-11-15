/**
 * This is the form in the home
 */

import React from 'react'
import Router from 'next/router'
import useForm from '../../../hooks/useForm';
import SearchIcon from '../svg/SearchIcon';




const SearchHome = () => {
    const [formValues, handleInputChange] = useForm({
        search: "",
    });
    const { search } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        Router.push({
            pathname: '/search',
            query: { product: search },
        })
    }

    return (
        <form onSubmit={handleSubmit} className="w-full md:w-6/12	md:mx-auto"> 
            <div className="w-full px-4 py-2 flex items-center bg-white relative block border border-gray-300 placeholder-gray-500 text-gray-900 rounded-3xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                <button type="submit">
                    <SearchIcon height={15} width={15} svgStyle={'cursor-pointer'}/>
                </button>
                <input
                    type="text"
                    autoComplete="off"
                    required
                    className="appearance-none relative block w-full px-4 py-2 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="search"
                    name="search"
                    value={search}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    )
}
export default SearchHome;