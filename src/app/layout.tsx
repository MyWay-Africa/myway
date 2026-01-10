import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const hankenGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hanken_Grotesk/HankenGrotesk-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyWay",
  description: "Premium shared airport rides for verified travelers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
