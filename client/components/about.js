import Link from 'next/link';

export default function About() {
    return (
        <>
            <h3>Cake Lands</h3>
                <p>we serve the best delicious cakes</p>
                <p>choose your favorite flavor among many</p>
                <p>we are happy to arrange birthday parties and weddings </p>
                <p>children are special for us with various cartoon cakes </p>
                <Link href="/cakes"><a><span>explore our cakes</span></a></Link>
                
        </>
    )
}
