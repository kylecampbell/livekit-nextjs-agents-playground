import { CloudProvider } from "@/cloud/useCloud";
import { ToastProvider } from "@/components/toast/ToasterProvider";
import { ConfigProvider } from "@/hooks/useConfig";
import { ConnectionProvider } from "@/hooks/useConnection";
import "@livekit/components-styles/components/participant";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "LiveKit Agents Playground",
  description: "A playground for LiveKit agents",
  appleWebApp: {
    capable: "yes",
    statusBarStyle: "black",
  },
  openGraph: {
    images: [
      {
        url: "https://livekit.io/images/og/agents-playground.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="h-full">
        <div className="flex flex-col h-full">
          <ToastProvider>
            <ConfigProvider>
              <ConnectionProvider>
                <CloudProvider>{children}</CloudProvider>
              </ConnectionProvider>
            </ConfigProvider>
          </ToastProvider>
        </div>
      </body>
    </html>
  );
}
