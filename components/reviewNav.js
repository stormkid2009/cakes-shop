import Link from "next/link"
import styles from '../styles/Header.module.css'

export default function ReviewNav(){
    return (
        <div >
            
            <ul className={styles.main}>
                <li><Link href="/cakes"><a>Back</a></Link></li>
                <li>Cart</li>
                
            </ul>
        </div>
    )
}