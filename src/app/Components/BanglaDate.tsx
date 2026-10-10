import { getBanglaDate } from "../ContextAPI";

export default function BanglaDate() {
    return (
        <p className="font-noto text-[10px] sm:text-sm text-gray-500 whitespace-nowrap">
            {getBanglaDate()}
        </p>
    );
}