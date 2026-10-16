import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';
import Marquee from './Marquee';
import { Suspense } from "react";
import BanglaDate from './BanglaDate';
import UserInfo from './UserInfo';

interface Category {
    id: number;
    nameBn: string;
    icon: string;
    slug: string;
}

const Header = async () => {
    const response = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/categories'
    );

    const categories: Category[] = await response.json();

    return (
        <>
            {/* Sticky Header + Navigation */}
            <div className="sticky top-0 z-50 bg-white">

                {/* Top Header */}
                <header className="bg-white">
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
                                        <Suspense
                                            fallback={
                                                <p className="text-xs text-gray-500">
                                                    তারিখ লোড হচ্ছে...
                                                </p>
                                            }
                                        >
                                            <BanglaDate />
                                        </Suspense>
                                    </h3>
                                </div>
                            </div>
                        </Link>

                        {/* Auth Buttons */}
                        <UserInfo />
                    </div>
                </header>

                <hr className="border-t border-gray-200" />

                {/* Sticky Navigation */}
                <nav className="bg-white">
                    <NavLinks categories={categories} />
                    <hr className="border-t border-gray-200" />
                </nav>
            </div>

            {/* Marquee: Desktop only, not sticky */}
            <div>
                <Marquee />
            </div>
        </>
    );
};

export default Header;