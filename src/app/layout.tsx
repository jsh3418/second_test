import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "반장창고",
  description:
    "사장님, 시공반장님 판매에만 집중하세요. 나머지 업무는 반장창고가 책임질게요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className={"h-full flex flex-col items-center " + inter.className}>
        {children}
      </body>
    </html>
  );
}
