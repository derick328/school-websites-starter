import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {default: "School Website Starter | Modern school websites", template:"%s | School Website Starter"},
  description: "Three configurable school website designs for kindergarten and primary, secondary, and combined primary-secondary schools.",
};

export const viewport: Viewport = {width:"device-width",initialScale:1,themeColor:"#145B3C"};

export default function RootLayout({children}:{children:ReactNode}) {return <html lang="en"><body>{children}</body></html>}
