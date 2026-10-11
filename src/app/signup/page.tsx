'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';

const SignUpPage = () => {

    const handleOnSubmit = async(e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        };
        console.log(user);

        const {data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        })

        if(user.password !== user.confirmPassword){
            toast.error("Password and Confirm Password do not match");
            return;
        }

        if(data){
            toast.success("User created successfully!");
            console.log("User created successfully:", data);
            redirect("/");
        }
        if(error){
            toast.error("Something went wrong! Please try again.");
            console.error("Error creating user:", error);
        }
    }
    return (
        <div className="font-noto bg-[#f1f5f0] px-2 py-6 sm:py-8">
            <div className="mx-auto w-full max-w-md">

                {/* Header */}
                <div className="mb-3 text-center">
                    <h1 className="text-2xl font-bold text-[#202a23]">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>
                    <p className=" text-sm text-[#737a74]">
                        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl border border-[#dfe6df] bg-[#fcfdfb] px-6 py-5">

                    <form onSubmit={handleOnSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1 block text-sm font-medium text-[#252c26]"
                            >
                                নাম
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="যেমন: রহিম উদ্দিন"
                                className="w-full rounded-lg border border-[#cdd2cd] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                            />
                        </div>

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

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-1 block text-sm font-medium text-[#252c26]"
                            >
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="আবার লিখুন"
                                className="w-full rounded-lg border border-[#cdd2cd] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-gray-700 focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                            />
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#07883e] py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#067535] active:scale-[0.99] cursor-pointer"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-[#d8ddd8]" />
                        <span className="text-sm text-[#555d56]">অথবা</span>
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

                    {/* Sign In Link */}
                    <p className="mt-4 text-center text-sm text-[#737a74]">
                        অ্যাকাউন্ট আছে?{' '}
                        <Link
                            href="/signin"
                            className="text-[#07883e] underline underline-offset-2 hover:text-green-800"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignUpPage;