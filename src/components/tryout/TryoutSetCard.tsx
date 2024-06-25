import BookIcon from "@/icons/BookIcon";
import Image from "next/image";
import { getSetColor } from "./constants/setColor";
import { cn } from "@/lib/utils";
import PencilIcon from "@/icons/PencilIcon";
import colors from "tailwindcss/colors";
import ThunderIcon from "@/icons/ThunderIcon";
import ClockIcon from "@/icons/ClockIcon";

interface TryoutSetCardProps {
    name: string;
    category: string;
    amount: number;
    duration: number;
    inlined?: boolean;
}

const TryoutSetCard: React.FC<TryoutSetCardProps> = ({ amount, duration, name, category, inlined }) => {
    const color = getSetColor(category);
    return (
        <div className="grid grid-cols-3 items-center mb-2">
            <h1 className={cn("", !inlined ? "font-semibold text-gray-500" : "font-bold text-gray-700")}>{name}</h1>
            <div className="flex justify-center items-center gap-2">
                <span className={cn("flex rounded-full items-center gap-1 border px-4 py-1", color.tw.border, color.tw.background)}>
                    <BookIcon color={color.content} size={16} />
                    <p className={cn("font-semibold", color.tw.content)}>{amount} Soal</p>
                </span>
                <span className={cn("flex items-center rounded-full gap-1 border px-4 py-1", color.tw.border, color.tw.background)}>
                    <ClockIcon size={16} color={color.content} />
                    <p className={cn("font-semibold", color.tw.content)}>{Math.round(duration / 60)} Menit</p>
                </span>
            </div>
            <div className="flex justify-end items-center gap-2">
                <span><PencilIcon size={32} color={colors.slate[300]} /></span>
                <span><ThunderIcon size={32} color={colors.slate[300]} /></span>
            </div>
        </div>
    )
}

export default TryoutSetCard;