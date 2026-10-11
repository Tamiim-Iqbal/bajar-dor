import { connection } from "next/server";
import { getBanglaDate } from "../ContextAPI";

export default async function BanglaDate() {
    await connection();

    const date = getBanglaDate(new Date());

    return (
        <p>
            {date}
        </p>
    );
}