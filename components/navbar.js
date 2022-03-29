import Link from 'next/link'
import "tailwindcss/tailwind.css";

export default function Navbar() {
    
    return (
        <div className='flex justify-between bg-pink-500 border border-slate-300 p-4 m-0 text-white text-xl'>
            <div className='py-2 hover:text-blue-500'>
            <Link href="/"><a>Home</a></Link>
            </div>
            <div className='py-2 hover:text-blue-500'>
            <Link href="/hot"><a>Hot Offers</a></Link>
            </div>
            <div className='py-2 hover:text-blue-500'>
            <Link href="#!"><a>Login</a></Link>
            </div>
        </div>
            
            
    
    )
}
