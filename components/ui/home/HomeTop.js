import React from 'react';
import SearchHome from '../search/SearchHome';

const HomeTop = () => {
    return (
        <div style={{height: '60vh'}} className="flex flex-col justify-center items-center my-10 p-8 bg-homebg bg-cover bg-center rounded-3xl">
            <h1 className="pb-4 text-white font-bold text-5xl max-w-full sm:max-w-2xl text-center">
                Everything you are looking for in one place
            </h1>
            <SearchHome  />
        </div>
    )
}
export default HomeTop;