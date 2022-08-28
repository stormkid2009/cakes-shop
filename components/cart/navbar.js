import Link from 'next/link'
import "tailwindcss/tailwind.css";





export default function Navbar() {
    
    
    return (
        <div className='flex justify-between bg-purple-700 border border-slate-300 p-4 m-0 text-white text-xl'>
            <div className='py-2 hover:text-blue-500'>
            <Link href="/"><a>Home</a></Link>
            </div>
            
            
            <div className='py-2 hover:text-blue-500'>
             
            <Link href='/cakes' ><a>Back to Cakes</a></Link>
            </div>
        </div>
            
            
    
    )
}
