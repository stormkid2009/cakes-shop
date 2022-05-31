import Link from 'next/link'
import "tailwindcss/tailwind.css";
import { ImCart } from "react-icons/im";
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';



export default function Navbar() {
    const {data:session} = useSession();
    const router = useRouter();
    
    return (
        <div className='flex justify-between bg-pink-500 border border-slate-300 p-4 m-0 text-white text-xl'>
            <div className='py-2 hover:text-blue-500'>
            <Link href="/"><a>Home</a></Link>
            </div>
            
            <div className='py-2 hover:text-blue-500'>
                <button onClick={(e)=>{
                    router.push('/cart')
                }}><ImCart ></ImCart></button>
            </div>
            <div className='py-2 hover:text-blue-500'>
            {!session && <Link href='/api/auth/signin' onClick={(e)=>{
                e.preventDefault();
                signIn()
            }}><a>Login</a></Link>} 
            {session && <Link href='/api/auth/signout' onClick={(e)=>{
                e.preventDefault();
                signOut();
            }}><a>Logout</a></Link>} 
            </div>
        </div>
            
            
    
    )
}
