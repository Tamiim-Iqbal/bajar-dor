import { connection } from "next/server";
import { getBanglaDate } from "../ContextAPI";

export default async function BanglaDate() {
    await connection();

    const date = getBanglaDate(new Date());

    return (
        <p className="font-noto text-[10px] sm:text-sm text-gray-500 whitespace-nowrap">
            {date}
        </p>
    );
}