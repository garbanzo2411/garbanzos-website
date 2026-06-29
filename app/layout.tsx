import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sora"
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
            <body className={`${sora.variable} ${inter.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}