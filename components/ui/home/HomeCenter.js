import React from 'react'
import Link from 'next/link';

const HomeCenter = () => {
    return (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 py-8 min-h-96">

            {/**Laptop */}
            <div className="
                group relative overflow-hidden bg-laptopbg bg-cover bg-center rounded-3xl
                transition-all duration-200 ease-linear
                flex justify-center items-center 
                h-96 sm:h-auto
                "
            >
                <h2 className="tracking-wide text-white text-3xl	">Your Next Laptop</h2>
                <div className="
                    flex justify-end items-center 
                    bg-transparent w-full absolute 
                    sm:bottom-0 sm:right-4 sm:-bottom-full  group-hover:bottom-4
                    transition-all duration-200	 ease-linear
                ">
                    <Link href="/">
                       <a className="
                        py-2 px-4 br-transparent sm:bg-cyan-500 sm:hover:bg-white shadow rounded-3xl border-0 sm:border-2 sm:border-cyan-500 hover:border-cyan-600
                        text-transparent sm:text-white sm:hover:text-cyan-600 font-bold capitalize text-base	tracking-wide	
                        absolute sm:relative h-screen w-screen sm:h-auto sm:w-auto 
                       "> 
                       view all
                       </a>
                    </Link>
                </div>
            </div>

            {/**Phone */}
            <div className="
                group relative overflow-hidden bg-phonebg bg-cover bg-center rounded-3xl
                transition-all duration-200 ease-linear

                flex justify-center items-center 
                h-96
                "
            >
                <h2 className="tracking-wide text-white text-3xl">
                    Phones of all brands
                </h2>
                <div className="
                    flex justify-end items-center 
                    bg-transparent w-full absolute 
                    sm:bottom-0 sm:right-4 sm:-bottom-full  group-hover:bottom-4
                    transition-all duration-200	 ease-linear
                ">
                    <Link href="/">
                       <a className="
                        py-2 px-4 br-transparent sm:bg-cyan-500 sm:hover:bg-white shadow rounded-3xl border-0 sm:border-2 sm:border-cyan-500 hover:border-cyan-600
                        text-transparent sm:text-white sm:hover:text-cyan-600 font-bold capitalize text-base	tracking-wide	
                        absolute sm:relative h-screen w-screen sm:h-auto sm:w-auto 
                       "> 
                       view all
                       </a>
                    </Link>
                </div>
            </div>

            {/**Sofa */}
            <div className="sm:col-start-1	sm:col-end-3	flex justify-center items-center h-96 bg-sofasbg bg-cover bg-center rounded-3xl">
             <h2 className="tracking-wide text-white text-3xl">A wide catalog of sofas</h2>
            </div>

        </div>

    )
}
export default HomeCenter;