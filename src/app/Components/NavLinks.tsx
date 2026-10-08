import Link from 'next/link';
import React from 'react';

interface Category {
    id: number;
    nameBn: string;
    icon: string;
    slug: string;
}

const NavLinks = async () => {
    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/categories',
        {
            cache: 'force-cache',
        }
    );
    const categories: Category[] = await response.json();
    // console.log(categories);
    return (
        <div className="w-10/12 mx-auto">
            <div className="ml-5 py-1">
                <div className="flex font-semibold text-sm">
                    {categories.map((cat) => (
                        <Link key={cat.id} href={`/category/${cat.slug}`}>
                            <div className="flex items-center py-2 px-4 border border-transparent hover:border-gray-300 hover:bg-gray-200 rounded-lg">
                                <span>{cat.icon}</span>
                                <span className="ml-2">{cat.nameBn}</span>
                            </div>
                        </Link>
                    ))}
                </div>
        </div>

        </div>
        
    );
};

export default NavLinks;