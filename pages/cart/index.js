import Layout from '../../components/cart/layout'
import Link from 'next/link';
import Item from '../../components/cart/item';
import React,{useState, useEffect} from 'react';
import {  useSession } from "next-auth/react";
import axios from 'axios';

export default function Cart(){
  const { data: session, status } = useSession();
  const [cart,setCart] = useState([])
  const url = "http://localhost:3000/api/users/user/cart"

  //make api call to get the array of cart items we do use client side rendering with useEffect hook
  useEffect(async()=>{
    if(session){
      
      const response = await axios.post(url,{email:session.user.email})
      setCart(response.data)
      
    }
  },[session])
  
  //adding remove from cart handler function passing the name of item from child component
  const removeFromCartHandler=(nameFromChild)=>{
    
    let isExist = cart.findIndex((item)=>item.name === nameFromChild)
    if(isExist > -1){
      const newCart = cart.filter((item)=> item.name !== nameFromChild)
      setCart(newCart)
      axios.put(url,{
        email:session.user.email,
        cart:newCart
      })
    }
  }

  //if status of session is still loading we render this
  if (status === "loading") {
    return <p>Loading...</p>
  }

  //if user is not authenticated we render this
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

  //if we have session data then we can render this
  return(
    <Layout>
      <div className='text-white bg-purple-500'>
        <div className='text-center pt-3 font-semibold text-2xl text-blue-800'>
        <h1>  Welcome back  {session.user.name}</h1>
        {cart.length === 0 && <h1>Your Cart is Empty !!!</h1>}
        </div>
        <div>
          
        {cart && cart.map((cake,index)=> <Item cake={cake} key={index} handler={removeFromCartHandler}/>)}
        </div>
        <div className='text-center font-extrabold text-2xl p-4  text-blue-800'>
          <h3>Total Amount : { cart && cart.map((item)=> item.price).reduce((acc,cur)=> {return acc + cur},0)}  EGP</h3>
        </div>
      </div>
    
    </Layout>
    )
  
  
}

