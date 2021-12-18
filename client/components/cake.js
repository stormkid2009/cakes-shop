
import Image from 'next/image'

export default function Cake({cake}) {
    const src = cake.src;
    return (
        <div key={cake.id}>
                <h3>{cake.name}</h3>
                {src && (
                    <Image src={src} width={300} height={300} alt={cake.name} />
                )}
                <div>
                <label>Ingrdients</label>
                <p><i>{cake.description}</i></p>
                </div>
                <div>
                <label>Price: </label>
                <span>{cake.price}</span>
                </div>
                <button>Add To Cart</button>
                
        </div>
    )
}
