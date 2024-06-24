import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge, twJoin } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            shadow: [{ shadow: ["highlight"] }],
        },
    },
});

export function cn(...inputs: ClassValue[]) {
    return customTwMerge(clsx(inputs));
}