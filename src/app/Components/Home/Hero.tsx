import React from 'react';
import { getBanglaDate } from '../../ContextAPI';
import Image from 'next/image';
import Link from 'next/link';

const date = getBanglaDate();

const Hero = () => {
    return (
        <div className="flex bg-white rounded-3xl justify-between border border-gray-200">
            {/* Left Text */}
            <div>
                <div className="py-10 px-7">
                    <span className="font-noto py-1 px-4 rounded-full font-medium primary-color primary-bg-color">{date}</span>
                    <h1 className="text-4xl font-bold mt-5">আজকের বাজারের দাম এক নজরে</h1>
                    <p className="text-gray-500 mt-5 w-4/5">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p> 
                    
                    <Link href="#সব-পণ্য">
                        <button className="btn button-primary hover:bg-button-primary text-white font-semibold px-5 rounded-lg mt-5">সব পণ্য দেখুন</button>
                    </Link>
                </div>
            </div>

            {/* Right Image */}
            <div>
                <div className="pb-6 pr-4">
                    <Image 
                    src='/resources/bazar-hero.svg'
                    alt='Hero Image'
                    width={375}
                    height={375}
                />
                </div>  
            </div>
        </div>
    );
};

export default Hero;