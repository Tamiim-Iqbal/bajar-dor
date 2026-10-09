export const getBanglaDate = () => {
    return new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
};

export const toBanglaNumber = (number: number) => {
    return number.toString().replace(/\d/g, (digit) => 
        "০১২৩৪৫৬৭৮৯"[Number(digit)]
    );
};

export interface Product {
    id: number;
    nameBn: string;
    today: number;
    category: string;
    image: string;
    length: number;
    products: Product[];
    change: {
        dir: "up" | "down";
        pct: number;
    };
}