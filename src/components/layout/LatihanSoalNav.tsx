"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import ListItemTopic from "./ListItemTopic";
import { topics } from "../constants/navbarItems";
interface LatihanSoalNavI {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LatihanSoalNav = () => {
    return (
        <div>
            <ul className="grid w-[400px] gap-3 p-4 sm:grid-cols-2 lg:w-[500px]">
                <div className="col-span-2 px-4">
                    <p>Mode Normal</p>
                    <div className="mt-2 h-[1px] w-full bg-neutral-300" />
                </div>
                {topics.map((topic) => (
                    <ListItemTopic
                        key={topic.title}
                        title={topic.title}
                        icon={topic.icon}
                        href={topic.href}
                    />
                ))}
            </ul>
            <div className="grid w-[400px] gap-3 p-4 sm:grid-cols-1 lg:w-[500px]">
                <div className="col-span-2 px-4">
                    <p>Mode Berwaktu</p>
                    <div className="mt-2 h-[1px] w-full bg-neutral-300" />
                </div>
                <Link href={"/latihan-soal-timed"}>
                    <NavigationMenuLink asChild>
                        <div className="group relative flex h-full w-full select-none flex-row items-center justify-between overflow-hidden rounded-md p-6 no-underline shadow-none outline-none transition-[transform,box-shadow] duration-500 ease-out-back before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-300 before:to-emerald-600 before:opacity-0 before:transition-[opacity] hover:-rotate-3 hover:scale-105 hover:shadow-xl before:hover:opacity-100 focus:shadow-md">
                            <p className="z-10 font-600 transition-colors group-hover:text-white">
                                {"Latihan Soal Berwaktu"}
                            </p>
                            <i className="i-ph-timer-bold absolute right-6 size-12 group-hover:text-white" />
                        </div>
                    </NavigationMenuLink>
                </Link>
            </div>
        </div>
    );
};
