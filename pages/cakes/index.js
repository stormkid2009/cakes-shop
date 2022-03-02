import Link from 'next/link'
import Cake from '../../components/cake'
import styles from '../../styles/Cakes.module.css'
export default function CakesList({cakes}) {
    
    return (
        <div className={styles.container}>
        {cakes.map(cake =>{
            return (<div className={styles.item} key={cake._id}>
            
            <Cake cake={cake} />
            <Link href={`/cakes/${cake.name}`}><a>View details</a></Link>
            </div>) })}
        </div>
    )
    
}

CakesList.layout = "main"

export async function getStaticProps(){
    
    //demo works here with this array of objects
    const response = await fetch('http://localhost:3000/api/cakes');
    const data = await response.json()
    
    
    return {
        props:{
            cakes:data,
        }
    }
}


