import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import StyledComponentsRegistry from "@/lib/StyledComponentRegistry";
import { ConfigProvider } from "antd";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burgerii BD",
  description: "Best bites at the right price!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <StyledComponentsRegistry>

          <AntdRegistry>
            <ConfigProvider
            // theme={config}
            >

              {children}
            </ConfigProvider>

          </AntdRegistry>
        </StyledComponentsRegistry>

      </body>
    </html>
  );
}
