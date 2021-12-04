import Image from 'next/image'
import Link from 'next/link'

export default function Cake({cake}) {
    
    return (
        <div>
            <h3>{cake.name}</h3>
            <Image src={cake.image} alt={cake.name} width={300} height={300} />
            <p>{cake.description}</p>
            <Link href={cake.link}><a>View Details</a></Link>
        </div>
    )
}
