import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import { getBanglaDate } from '../ContextAPI';

const date = getBanglaDate();

const Header = () => {

    return (
        <header className="sticky top-0 z-1 bg-white">
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
                                <h1 className="text-xl font-bold font-noto"> বাজার দর </h1>
                                <p className="font-noto text-sm text-gray-500">{date}</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Buttons */}
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <button className="btn border-transparent bg-white hover:border-gray-300 hover:bg-gray-200 font-semibold rounded-lg px-5">সাইন ইন</button>
                        <button className="btn button-primary hover:bg-button-primary text-white font-semibold px-5 rounded-lg">সাইন আপ</button>
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