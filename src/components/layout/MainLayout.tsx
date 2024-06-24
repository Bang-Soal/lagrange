"use client";

import dayjs from "dayjs";
import "dayjs/locale/id";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Navbar";
import {
    AUTH_PATHS,
    DASHBOARD_PATH,
    LATIHAN_HISTORY_PATH,
    LATSOL_NEW_PATH,
    LATSOL_PATH,
    TRY_OUT_PATH,
} from "../constants/path";

interface MainLayoutI {
    children: React.ReactNode;
}
dayjs.locale("id");

export const MainLayout = ({ children }: MainLayoutI) => {
    const pathname = usePathname();
    const hideNav =
        LATSOL_PATH.test(pathname) ||
        LATSOL_NEW_PATH.test(pathname) ||
        TRY_OUT_PATH.test(pathname) ||
        AUTH_PATHS.includes(pathname) ||
        LATIHAN_HISTORY_PATH.includes(pathname) ||
        DASHBOARD_PATH.includes(pathname);

    const hideFooter = "/latihan-soal-timed" === pathname;

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_IS_MAINTENANCE) {
            if (pathname !== "/" && pathname !== "/maintenance") {
                window.location.href = "/maintenance";
            }
        }
    }, [pathname]);

    return (
        <div className="relative">
            {/* {!hideNav && <Nav />} */}
            {children}
            {!hideNav && !hideFooter && <Footer />}
        </div>
    );
};
