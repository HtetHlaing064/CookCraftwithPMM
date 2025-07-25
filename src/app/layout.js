import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppLayout from "./components/AppLayout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import StyledRoot from "./StyledRoot";
import SessionWrapper from "./SessionWrapper";
import { CssBaseline } from "@mui/material"; 



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add viewport meta tag for proper responsive behavior */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <StyledRoot>
            {/* Add CssBaseline here to normalize styles */}
            <CssBaseline />
            <AppLayout>
              <SessionWrapper>
              {children}
              </SessionWrapper>
              </AppLayout>
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
