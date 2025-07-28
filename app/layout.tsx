import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600", "700"],
//     variable: "--font-poppins",
//     display: "swap"
// });
const InterSans = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});
export const metadata: Metadata = {
    title: "Hala Portfolio",
    description: ""
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("antialiased", InterSans.className)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
