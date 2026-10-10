import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';
import Marquee from './Marquee';
import { Suspense } from "react";
import BanglaDate from './BanglaDate';

interface Category {
    id: number;
    nameBn: string;
    icon: string;
    slug: string;
}

const Header = async () => {
    const response = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/categories', {
        cache: "force-cache"
    });

    const categories: Category[] = await response.json();

    return (
        <>
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-white">

                {/* Top Header */}
                <div className="w-11/12 lg:w-10/12 mx-auto flex justify-between items-center pt-3 pb-2 sm:pt-4">

                    {/* Logo */}
                    <Link href="/">
                        <div className="flex gap-2 sm:gap-3 items-center">
                            <Image
                                className="button-primary p-1.5 sm:p-2 rounded-lg sm:rounded-xl shrink-0"
                                src="/resources/cart.png"
                                alt="Logo"
                                width={45}
                                height={45}
                            />

                            <div className="flex flex-col min-w-0">
                                <h1 className="text-lg sm:text-xl font-bold font-noto">
                                    বাজার দর
                                </h1>

                                <h3 className="font-noto text-[10px] sm:text-sm text-gray-500 whitespace-nowrap">
                                    <Suspense fallback={<p className="text-xs text-gray-500">তারিখ লোড হচ্ছে...</p>}>
                                        <BanglaDate />
                                    </Suspense>
                                </h3>
                            </div>
                        </div>
                    </Link>

                    {/* Auth Buttons */}
                    <div className="shrink-0 flex items-center gap-1.5 sm:gap-2">
                        <button className="btn min-h-9 h-9 sm:min-h-10 sm:h-10 text-xs sm:text-sm border-transparent bg-white hover:border-gray-300 hover:bg-gray-200 font-semibold rounded-lg px-2.5 sm:px-5">
                            সাইন ইন
                        </button>

                        <button className="btn min-h-9 h-9 sm:min-h-10 sm:h-10 text-xs sm:text-sm button-primary hover:bg-button-primary text-white font-semibold rounded-lg px-2.5 sm:px-5">
                            সাইন আপ
                        </button>
                    </div>
                </div>

                <hr className="border-t border-gray-200" />

                {/* Navigation + Marquee */}
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start md:grid-cols-1">

                    {/* Navigation */}
                    <div className="shrink-0 bg-white md:static md:w-full">
                        <NavLinks categories={categories} />
                    </div>

                    {/* Marquee - */}
                    <div className="min-w-0 md:w-full">
                        <Marquee />
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;

