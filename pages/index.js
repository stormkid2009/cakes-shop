import Head from 'next/head'
import Link from 'next/link'
import HotOffers from '../components/hot'

export default function HomePage() {
    
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <HotOffers />
            <h2>Explore all our products</h2>
            <br />
            <Link href="/cakes"><a >Cakes</a></Link>

            
        </>
    )
}
