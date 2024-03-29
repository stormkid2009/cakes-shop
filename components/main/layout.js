import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-purple-500">
      <Head>
        <title>Cakes land Home Page</title>
        <meta name="description" content="online cake shop" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
