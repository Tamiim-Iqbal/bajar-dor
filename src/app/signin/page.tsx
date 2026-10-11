'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

const SignInPage = () => {

    const handleOnSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        };
        // console.log(user);

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/"
        })

        if(data){
            console.log("User signed in successfully:", data);
            toast.success("User signed in successfully!");
        }
        if(error){
            toast.error("Invalid Email or Password");
            console.log("Error signing in user:", error);
        }
    }
    return (
        <div className="font-noto min-h-screen bg-[#f1f5f0] px-4 py-6 sm:py-8">
            <div className="mx-auto w-full max-w-md">

                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-[#202a23]">
                        সাইন ইন
                    </h1>
                    <p className="mt-1 text-sm text-[#737a74]">
                        বিস্তারিত দাম, বাজারের তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl border border-[#dfe6df] bg-[#fcfdfb] p-6">

                    <form onSubmit={handleOnSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1 block text-sm font-medium text-[#252c26]"
                            >
                                ইমেইল
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-[#cdd2cd] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1 block text-sm font-medium text-[#252c26]"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                className="w-full rounded-lg border border-[#cdd2cd] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                            />
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#07883e] py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#067535] active:scale-[0.99]"
                        >
                            সাইন ইন করুন
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-[#d8ddd8]" />
                        <span className="text-sm text-[#555d56]">
                            অথবা
                        </span>
                        <div className="h-px flex-1 bg-[#d8ddd8]" />
                    </div>

                    {/* Social Buttons */}
                    <div className="mx-auto w-1/2">
                        <button
                            type="button"
                            className="flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-gray-400 px-3 text-center text-sm font-medium leading-5 text-[#252c26] transition hover:border-gray-100 hover:bg-[#f0f5f0] cursor-pointer"
                        >
                            <Image
                                src="/resources/google.png"
                                alt="Google"
                                width={16}
                                height={16}
                            />
                            <span className="mt-1">Google দিয়ে চালিয়ে যান</span>
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-4 text-center text-sm text-[#737a74]">
                        অ্যাকাউন্ট নেই?{' '}
                        <Link
                            href="/signup"
                            className="text-[#07883e] underline underline-offset-2 hover:text-green-800"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>
                </div>

                {/* Back Home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm text-[#737a74] underline underline-offset-2 transition hover:text-green-700"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SignInPage;
