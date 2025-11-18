import type { Metadata } from "next";
import { Kanit, Roboto } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME } from "@/utils/constant";
import { Toaster } from "react-hot-toast";
import type { ReactNode } from "react";
import Header from "@/components/shared/header";

const kanit = Kanit({
    subsets: ["latin"],
    weight: ["200", "400"],
    variable: "--font-kanit",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: APP_NAME,
    description: APP_DESCRIPTION,
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${kanit.variable} ${roboto.variable} min-h-dvh h-full flex flex-col bg-background`}>
                <Toaster />
                <Header />
                <div className="flex-1">{children}</div>
            </body>
        </html>
    );
}

