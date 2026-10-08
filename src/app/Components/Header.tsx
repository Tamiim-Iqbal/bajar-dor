import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';

const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    });

const Header = () => {

    return (
        <header>
            <div className="w-10/12 mx-auto justify-center items-center flex pt-4 pb-2">
                {/* Logo & Brand Name */}
                <div className="navbar-start">
                    <Link href="/">
                    <div className="flex gap-3 items-center">
                        <div>
                            <Image className="button-primary p-2 rounded-xl"
                            src='/resources/cart.png'
                            alt='Logo'
                            width={45}
                            height={45}
                        /> 
                        </div> 
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold"> বাজার দর </h1>
                            <p className="text-sm text-gray-700">{date}</p>
                        </div>
                    </div>
                    </Link>
                </div>
            
                {/* Buttons */}
                <div className="navbar-end">
                    <div className="flex gap-6">
                        <button className="cursor-pointer font-semibold">সাইন ইন</button>
                        <button className="btn button-primary text-white font-semibold px-4">সাইন আপ</button>
                    </div>
                </div>
            </div>
        <hr className="border-t border-gray-200"></hr>
        <NavLinks />
        <hr className="border-t border-gray-200"></hr>
        </header>
    );
};

export default Header;