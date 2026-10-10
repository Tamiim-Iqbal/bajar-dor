"use client";

import { useEffect } from "react";

export default function CategoryError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Category page error:", error);
    }, [error]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl mb-4">⚠️</div>

            <h2 className="text-xl sm:text-2xl font-bold font-noto">
                ক্যাটাগরি লোড করা যায়নি!
            </h2>

            <p className="mt-2 text-sm sm:text-base text-gray-500 font-noto">
                দুঃখিত, এই ক্যাটাগরির পণ্যগুলো দেখাতে সমস্যা হয়েছে।
                অনুগ্রহ করে আবার চেষ্টা করুন।
            </p>

            <button
                onClick={() => reset()}
                className="mt-5 px-5 py-2 rounded-lg bg-green-600 text-white font-noto hover:bg-green-700 transition-colors"
            >
                আবার চেষ্টা করুন
            </button>
        </div>
    );
}