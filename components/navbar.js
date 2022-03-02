import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Navbar() {
    
    return (
        
            
            <ul className={styles.main}>
                <li><Link href="/"><a>Home</a></Link></li>
                <li>Cart</li>
                <li>Sign in</li>
            </ul>
    
    )
}
