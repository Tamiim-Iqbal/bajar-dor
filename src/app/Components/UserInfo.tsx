"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const handleSignOut = async () => {
        try {
            await authClient.signOut();
            window.location.href = "/";
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    if (isPending) return null;

    return (
        <div className="relative flex shrink-0 items-center gap-2">
            {user ? (
                <div ref={dropdownRef} className="relative">
                    {/* User Name and Arrow */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-100"
                    >
                        <div className="h-9 w-9 overflow-hidden rounded-full">
                            {user.image ? (
                                <img
                                    src={user.image}
                                    alt="User Avatar"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center rounded-full border border-gray-200 bg-[#f0f5f0] text-lg font-bold text-gray-600">
                                    {user.name?.charAt(0).toUpperCase() || "U"}
                                </div>
                            )}
                        </div>

                        <span className="max-w-28 truncate text-sm font-semibold text-gray-800">
                            {user.name}
                        </span>

                        <span
                            className={`text-xs text-gray-500 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        >
                            ▾
                        </span>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
                            {/* User Details */}
                            <div className="border-b border-gray-100 px-3 py-3">
                                <p className="truncate text-sm font-semibold text-gray-800">
                                    {user.name}
                                </p>

                                <p className="mt-1 truncate text-xs text-gray-500">
                                    {user.email}
                                </p>
                            </div>

                            {/* Profile Link */}
                            <Link
                                href="/profile"
                                onClick={() => setIsOpen(false)}
                                className="mt-1 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-800 transition hover:bg-gray-100"
                            >
                                <span className="text-base">👤</span>
                                <span>আমার প্রোফাইল</span>
                            </Link>

                            {/* Sign Out */}
                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-500 transition hover:bg-red-50"
                            >
                                <span className="text-base">↩</span>
                                <span>সাইন আউট</span>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <Link
                        href="/signin"
                        className="rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-semibold transition hover:border-gray-300 hover:bg-gray-100"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signup"
                        className="rounded-lg bg-[#07883f] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#067334]"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;