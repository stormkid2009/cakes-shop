import {useRouter} from 'next/router'

export default function Navbar() {
    const router = useRouter();
    const handleLogin=()=>{ 
        router.push('/register');
    }
    const handleToHome=()=>{
        router.push('/')
    }
    return (
        <div>
            <button onClick={handleToHome}>Home</button>
            <button>Cart</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
