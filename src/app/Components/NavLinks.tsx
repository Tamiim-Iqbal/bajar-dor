import Link from 'next/link';
import React from 'react';

interface Category {
    id: number;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {
    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/categories',
        {
            cache: 'force-cache',
        }
    );
    const categories: Category[] = await response.json();
    console.log(categories);
    return (
        <div className="w-10/12 mx-auto items-center flex py-4">
            <div className="flex gap-8 font-semibold text-sm">
                {categories.map((category) => (
                    <Link key={category.id} href="/">
                        <div className="flex items-center">
                            <span>{category.icon}</span>
                            <span className="ml-2">{category.nameBn}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavLinks;