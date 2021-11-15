import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }){
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                { children }
            </div>
            <Footer />
        </>
    )
}