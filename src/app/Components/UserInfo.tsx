"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return null;
    }

    const handleSignOut = async () => {
        try {
            await authClient.signOut();
            window.location.href = "/";
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {user ? (
                <div className="flex items-center gap-3">
                    <div className="avatar w-10">
                        <div className="rounded-full">
                            {user?.image ? (
                                <img
                                    alt="User Avatar"
                                    src={user.image}
                                />
                                
                            ) 
                            : 
                            (
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f0f5f0] text-xl font-bold text-gray-600 border border-gray-200">
                                    {user?.name?.charAt(0).toUpperCase() || "U"}
                                </div>
                            )}
                        </div>
                    </div>
                    <h2 className="font-semibold">{user?.name}</h2>
                    <span className="inline-block rotate-90 transition-transform duration-200 group-open:-rotate-90">
                                ▸
                            </span>
                    <button
                        onClick={handleSignOut}
                        className="btn min-h-9 h-9 sm:min-h-10 sm:h-10 text-xs sm:text-sm border-transparent bg-white hover:border-gray-300 hover:bg-gray-200 font-semibold rounded-lg px-2.5 sm:px-5"
                    >
                        Sign Out
                    </button>
                </div>
            )
               
        
            :
            (
                <div>
                    <Link
                        href="/signin"
                        className="btn min-h-9 h-9 sm:min-h-10 sm:h-10 text-xs sm:text-sm border-transparent bg-white hover:border-gray-300 hover:bg-gray-200 font-semibold rounded-lg px-2.5 sm:px-5"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signup"
                        className="btn min-h-9 h-9 sm:min-h-10 sm:h-10 text-xs sm:text-sm button-primary hover:bg-button-primary text-white font-semibold rounded-lg px-2.5 sm:px-5"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
