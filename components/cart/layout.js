import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="h-full flex flex-col">
      <Head>
        <title>Cakes land Home Page</title>
        <meta name="description" content="cart for online cake shop" />
      </Head>
      <Navbar />
      <main className="grow  bg-purple-500">{children}</main>
      <Footer  />
      
    </div>
  );
}
