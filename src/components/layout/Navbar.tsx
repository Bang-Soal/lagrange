"use client";

export default function Navbar() {
    return (
        <nav className="flex justify-end mr-20 mt-3">
            <ul className="flex gap-5 text-gray-700 font-medium bg-gray-200 px-4 rounded-full py-3">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Latihan Soal</a></li>
                <li><a href="#">Tryout</a></li>
                <li><a href="#">Leaderboard</a></li>
                <li><a href="#">Bang Catatan</a></li>
            </ul>
        </nav>
    )
}

interface NavButtonProps {
    text: string;
    href: string;
}

function NavButton({ text, href }: NavButtonProps) {
    return (
        <li>
            <a href="#">Dashboard</a>
        </li>
    );
}