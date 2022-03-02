import Head from 'next/head'
import Link from 'next/link'
import HotOffers from '../components/hotOffers'
import About from '../components/about'
import styles from '../styles/Home.module.css'

export default function HomePage() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Cakes land Home Page</title>
                <meta name="description" content="online cake shop" />
            </Head>
            <About />
            <h1>...Hot offers...</h1>
            <HotOffers />
            
            <br />
            <Link href="/cakes"><a ><h2>Explore More Delicious Cakes</h2></a></Link>

            
        </div>
    )
}

HomePage.layout = "main";
