"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";


const Page = () => {
    const [name, setName] = useState("test");
    const [message, setMessage] = useState("");

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        try {
            await authClient.signOut();
            window.location.href = "/";
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const handleUpdateName = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries()) as {
            name: string;
        };
        //console.log("User data submitted:", userData);

        // Update Form
        const resData = await authClient.updateUser({
            name: userData.name,
        });
        //console.log("User name updated:", resData);

        toast.success("User name updated successfully!");
    };
    return (
        <main className="min-h-screen bg-[#f0f5f1] px-4 py-8 text-[#26332b] sm:px-6">
            <div className="mx-auto max-w-3xl">

                {/* Page Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        আমার প্রোফাইল
                    </h1>
                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile Information */}
                <section className="mb-6 rounded-2xl border border-[#dce6de] bg-white/90 p-5 sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex min-w-0 items-center gap-4">
                            <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-full bg-[#07883f] text-2xl font-semibold text-white">
                                {name.charAt(0).toUpperCase()}
                            </div>

                            <div className="min-w-0">
                                <h2 className="truncate text-xl font-bold">
                                    {user?.name}
                                </h2>
                                <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">
                                    {user?.email}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleSignOut}
                            className="w-full rounded-lg border border-red-400 px-5 py-2.5 font-medium text-red-500 transition hover:bg-red-50 sm:w-auto"
                        >
                            ↩ সাইন আউট
                        </button>
                    </div>
                </section>

                {/* Update Name Form */}
                <section className="rounded-2xl border border-[#dce6de] bg-white/90 p-5 sm:p-6">
                    <h2 className="mb-5 text-lg font-bold sm:text-xl">
                        নাম হালনাগাদ করুন
                    </h2>

                    <form onSubmit={handleUpdateName}>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-base font-medium"
                        >
                            নাম
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="আপনার নাম লিখুন"
                            required
                            className="mb-3 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#07883f] focus:ring-2 focus:ring-[#07883f]/15"
                        />

                        <button
                            type="submit"
                            className=" cursor-pointer rounded-lg bg-[#07883f] px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-[#067334] focus:outline-none focus:ring-2 focus:ring-[#07883f]/30"
                        >
                            নাম হালনাগাদ করুন
                        </button>

                        {message && (
                            <p className="mt-3 text-sm text-gray-600">
                                {message}
                            </p>
                        )}
                    </form>
                </section>

            </div>
        </main>
    );
};

export default Page;