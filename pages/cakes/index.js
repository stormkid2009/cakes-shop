import Link from 'next/link'
import {connectToDatabase} from '../../util/mongodb'
import Cake from '../../components/cake'
import styles from '../../styles/Cakes.module.css'

export async function getServerSideProps(){
    let {db} = await connectToDatabase();
    let data = await db
        .collection('cakes')
        .find({})
        .sort({name:1})
        .toArray()
    const cakes = JSON.parse(JSON.stringify(data))
    
    return {
        props:{
            cakes,
        }
    }
}


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




