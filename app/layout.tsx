import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["300", "500"],
    style: ["normal", "italic"],
    variable: "--font-fraunces"
});

const inter = Inter ({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter"
});

export const metadata: Metadata = {
    title: "Jacob Lazzarini",
    description: "Aspiring Software Engineer"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}