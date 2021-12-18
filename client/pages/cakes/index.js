import Link from 'next/link'
import list from '../../components/list'
import Cake from '../../components/cake'
export default function CakesList({cakes}) {
    
    return (
        <>
        {cakes.map(cake =>{
            return (<>
            
            <Cake cake={cake} />
            <Link href={`/cakes/${cake.name}`}><a>View details</a></Link>
            </>) })}
        </>
    )
    
}

export async function getStaticProps(){
    
    //demo works here with this array of objects
    
    return {
        props:{
            cakes:list,
        }
    }
}


