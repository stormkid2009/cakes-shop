import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-purple-500">
      <Head>
        <title>Cakes land Home Page</title>
        <meta name="description" content="online cake shop" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
