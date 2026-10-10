
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from "react";
import BanglaDate from "../BanglaDate";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-2xl sm:rounded-3xl justify-between border border-gray-200 overflow-hidden">

            {/* Left Text */}
            <div className="w-full md:w-3/5">
                <div className="py-7 px-5 sm:py-8 sm:px-7 lg:py-10 lg:px-8">

                    <span className="inline-block font-noto text-xs sm:text-sm py-1 px-3 sm:px-4 rounded-full font-medium primary-color primary-bg-color">
                        <Suspense fallback={<span>তারিখ লোড হচ্ছে...</span>}>
                            <BanglaDate />
                        </Suspense>
                    </span>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 sm:mt-5 leading-snug">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base mt-4 sm:mt-5 w-full md:w-11/12 leading-7">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <Link href="#সব-পণ্য" className="inline-block">
                        <button className="btn button-primary hover:bg-button-primary text-white font-semibold px-5 rounded-lg mt-5 text-sm sm:text-base">
                            সব পণ্য দেখুন
                        </button>
                    </Link>

                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-2/5 flex items-center justify-center px-5 pb-5 md:py-5 md:pr-4 md:pl-0">
                <Image
                    src="/resources/bazar-hero.svg"
                    alt="আজকের বাজারের দাম"
                    width={375}
                    height={375}
                    priority
                    className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-full h-auto object-contain"
                />
            </div>

        </div>
    );
};

export default Hero;

