import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blockchain & Mern Stack Webapp Developer: The Future of Web Development",
  description: "Welcome to my profile, where I combine the power of blockchain technology with the versatility of MERN stack development to revolutionize the industry. Our mission is to provide secure, transparent, and efficient blockchain solutions using Solidity, Node.js, React.js, Next.js, Express.js, Remix, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.ico" type="image/ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          {/* Default title & description, can be overridden by individual pages */}
          <title>Blockchain & Mern Stack Webapp Developer: The Future of Web Development (BMSWD)</title>
          <meta
            name="description"
            content="Welcome to my profile, where I combine the power of blockchain technology with the versatility of MERN stack development to revolutionize the industry. Our mission is to provide secure, transparent, and efficient blockchain solutions using Solidity, Node.js, React.js, Next.js, Express.js, Remix, and MongoDB."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
