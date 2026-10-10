'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Category {
    id: number;
    nameBn: string;
    icon: string;
    slug: string;
}

interface NavLinksProps {
    categories: Category[];
}

const NavLinks = ({ categories }: NavLinksProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative w-auto md:w-full">

            {/* Mobile Hamburger */}
            <div className="md:hidden bg-[#f0f5f0]">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
                    aria-expanded={isOpen}
                    className="flex items-center justify-center p-2 ml-1 hover:bg-gray-100  text-gray-600"
                >
                    {isOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>

                {/* Floating Category Menu */}
                {isOpen && (
                    <div className="absolute ml-2 top-full left-0 z-1 w-64 max-w-[85vw] bg-white border border-gray-200 rounded-xl shadow-xl p-2">

                        <p className="font-noto text-sm font-semibold text-gray-500 px-3 py-2">
                            পণ্যের বিভাগ
                        </p>

                        <div className="max-h-[65vh] overflow-y-auto grid grid-cols-2 gap-1">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    href={`/category/${cat.slug}`}
                                    onClick={() => setIsOpen(false)}
                                    className="flex flex-row items-center gap-2 px-2 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <span className="text-lg shrink-0">
                                        {cat.icon}
                                    </span>

                                    <span className="font-noto text-sm font-medium">
                                        {cat.nameBn}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop & Tablet Navigation */}
            <div className="hidden md:block w-full">
                <div className="w-11/12 lg:w-10/12 mx-auto">
                    <div className="flex flex-wrap items-center gap-1 lg:gap-2 py-1 font-medium text-sm">

                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/category/${cat.slug}`}
                                className="shrink-0"
                            >
                                <div className="flex items-center py-2 px-2 lg:px-4 border border-transparent hover:border-gray-300 hover:bg-gray-200 rounded-lg transition-colors">
                                    <span>{cat.icon}</span>

                                    <span className="font-noto ml-2">
                                        {cat.nameBn}
                                    </span>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>

        </nav>
    );
};

export default NavLinks;

