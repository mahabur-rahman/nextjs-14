"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client"; // Correct import path
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <header className="bg-red-300 p-5">
            <h2>Header</h2>
          </header>
          <div className="p-16">{children}</div>
          <footer className="bg-blue-300 p-5 text-center">
            <p>Footer</p>
          </footer>
        </ApolloProvider>
      </body>
    </html>
  );
}
