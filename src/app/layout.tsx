import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono, Indie_Flower, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-indie-flower',
})

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
})


export const metadata: Metadata = {
  title: "Sawtone",
  description: "React + TailwindCSS + Next.js 手帐页面",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${indieFlower.variable} ${dancingScript.variable} 
          ${geistSans.variable} ${geistMono.variable}bg-fixed`}
        style={{
          backgroundRepeat: 'repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )

}
