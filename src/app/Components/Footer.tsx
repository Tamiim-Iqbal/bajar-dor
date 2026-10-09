import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-white border-t border-gray-200 pt-6 pb-5  text-xs md:text-sm ">
            <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-600 font-noto"> বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p className="m-0 text-gray-600 font-noto">সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়। </p>
            </div>
            
        </footer>
    );
};

export default Footer;