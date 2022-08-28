import Layout from '../../components/cart/layout'
import Link from 'next/link';
import Item from '../../components/item.jsx';
import React,{useState, useEffect} from 'react';
import {  useSession } from "next-auth/react";
import axios from 'axios';

export default function Cart(){
  const { data: session, status } = useSession();
  const [cart,setCart] = useState([])
  const url = "http://localhost:3000/api/users/user/cart"

  useEffect(async()=>{
    if(session){
      
      const response = await axios.post(url,{email:session.user.email})
      setCart(response.data)
      
    }
  },[session])
  
  

  if (status === "loading") {
    return <p>Loading...</p>
  }
  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col items-center p-24 bg-red-500 text-white text-2xl">
        
        <p className="m2">Access Denied</p>
        <p className="m2">kindly Try to Login</p> 
        <button className="border-2 border-white rounded-md px-2 m-2">
        <Link href={`/api/auth/signin`}><a>Login</a></Link>
        </button>
        
      </div>
    )
  }

  return(
    <Layout>
    <h1>current user is  : {session.user.name}</h1>
    {cart && cart.map((cake,index)=> <Item cake={cake} key={index}/>)}
    </Layout>
    )
  
  
}

