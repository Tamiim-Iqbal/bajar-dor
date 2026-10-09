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
    categoryNameBn: string;
    categoryId: string;
    categoryIcon: string;
    slug: string;
    unit: string;
    markets:{
      "market": string;
      "division": string;
      "min": number;
      "max": number;
    }[]
}

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

export const toBanglaUnit = (text: string): string => {
    const units: Record<string, string> = {
        kg: "কেজি",
        litre: "লিটার",
        liter: "লিটার",
        dozen: "ডজন",
        piece: "পিস",
        packet: "প্যাকেট",
        bottle: "বোতল",
    };

    return text.replace(
        /\b(kilograms?|kg|grams?|g|litres?|liters?|ml|millilitres?|milliliters?|dozen|pieces?|pcs|packets?|bottles?|pounds?|lb|tons?)\b/gi,
        (unit) => units[unit.toLowerCase()] ?? unit
    );
};

