import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// apollo
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TODO App | Next.js/GraphQL",
  description: "Next.js/GraphQLで作るTODO APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider client={client}>
      <html lang="ja">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
    </ApolloProvider>
  );
}
