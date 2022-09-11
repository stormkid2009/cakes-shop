import {useState,useEffect} from 'react'
import axios from 'axios';
import Link from 'next/link'
import "tailwindcss/tailwind.css";
import { ImCart } from "react-icons/im";
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';



export default function Navbar() {
    const {data:session} = useSession();
    const router = useRouter();
    const [cart,setCart] = useState([])
    const authUrl = 'http://localhost:3000/api/users'
    const url = 'http://localhost:3000/api/users/user/cart'

    useEffect(async()=>{
        if(session){
            await axios.post(authUrl,{email:session.user.email})
        }

    },[session])

    useEffect(async()=>{
        if(session){
            
          const response = await axios.post(url,{email:session.user.email})
          setCart(response.data)
        }
      },[session])
    
    return (
        <div className='flex justify-between bg-purple-700 border border-slate-300 p-4 m-0 text-white text-xl'>
            <div className='py-2 hover:text-blue-500'>
            <Link href="/"><a>Home</a></Link>
            </div>
            
            <div className='flex justify-around p-2 m-2 hover:text-blue-500 '>
                <div>
                <button  onClick={(e)=>{
                    router.push('/cart')
                }}><ImCart size={42}></ImCart></button>
                </div>
                <div>
                {cart && <div className='border rounded-full p-2 bg-slate-600 text-white'>{cart.length} </div>}
                </div>
                
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
