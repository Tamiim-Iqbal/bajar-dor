"use client";

import { useEffect } from "react";

export default function ProductError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold font-noto">
                পণ্য লোড করা যায়নি!
            </h2>

            <p className="mt-2 text-gray-500 font-noto">
                দুঃখিত, পণ্যটি দেখাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।
            </p>

            <button
                onClick={() => reset()}
                className="mt-5 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
                আবার চেষ্টা করুন
            </button>
        </div>
    );
}