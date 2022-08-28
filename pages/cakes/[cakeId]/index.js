import React,{ useState, useEffect} from "react";
import { connectToDatabase } from "../../../util/mongodb";
import axios from "axios";
import { getSession,useSession } from "next-auth/react";
import Image from "next/image";
import Layout from "../../../components/main/layout"



export async function getStaticPaths() {
  let { db } = await connectToDatabase();
  let data = await db.collection("cakes").find({}).toArray();

  const cakes = JSON.parse(JSON.stringify(data));
  const paths = cakes.map((cake) => {
    return {
      params: { cakeId: cake.name },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}


export async function getStaticProps(context) {
  const { params } = context;
  let { db } = await connectToDatabase();
  let data = await db.collection("cakes").findOne({ name: params.cakeId });
  const cake = JSON.parse(JSON.stringify(data));

  return {
    props: {
      cake,
    },
    revalidate: 10,
  };
}


export default function CakeReview({ cake }) {
  const {data:session} = useSession()
  const [cart,setCart] = useState([]);
  const url = 'http://localhost:3000/api/users/user/cart'
  const [inCart,setInCart] = useState(false);
  
  useEffect(async()=>{
    if(session){
      const response = await axios.post(url,{email:session.user.email})
      setCart(response.data)
    }
  },[session])
  useEffect(()=>{
    let isExist = cart.findIndex((item)=>item.name === cake.name)
    if(isExist === -1){
      setInCart(false)
    }else{
      setInCart(true)
    }
  },[cart])
  console.log(cart)
    

  const addToCartHandler = (e)=>{
    e.preventDefault();
    //make api call with axios to add current cake object to cart list
    let isExist = cart.findIndex((item)=>item.name === cake.name)
    if(isExist === -1){
      setCart([...cart,{name:cake.name,quantity:1}])
      setInCart(true);
      axios.put(url,{email:session.user.email,cart:[...cart,{name:cake.name,quantity:1}]})
    }
    
    
    
  }
  const removeFromCartHandler=(e)=>{
    e.preventDefault();
    //make api call with axios to remove current cake object from cart list
    let isExist = cart.findIndex((item)=>item.name === cake.name)
    if(isExist > -1){
      const newCart = cart.filter((item)=> item.name !== cake.name)
      setCart(newCart)
      setInCart(false)
      axios.put(url,{
        email:session.user.email,
        cart:newCart
      })
    }
    
    
  }
  
  return (
    <Layout>
    <div
      key={cake._id}
      className="pb-0 flex justify-around text-center bg-pink-100 w-full h-full"
    >
      <div className="flex-col p-4 m-3 border border-slate-300 rounded-md">
        <h1 className=" text-2xl py-2 m-1">&& {cake.name} Cake &&</h1>
        {cake.image && <Image src={cake.image} width={500} height={500} alt={cake.name}  />}
      </div>
      <div className=" container-lg flex flex-col p-3 m-4 text-xl">
        <div className=" felx-col p-3 m-3">
          <label className="text-red-500">Ingrdients</label>
          <p >
            <i>{cake.description}</i>
          </p>
        </div>
        <div>
          
          <label>Price: </label>
          <span>{cake.price} -EGP</span>
        </div>
        <div className="p-3 m-3">
        {inCart ? <button className=" p-2 border-2 border-slate-300 rounded-md hover:border-blue-500"
        onClick={removeFromCartHandler}>remove from  cart</button> : <button className=" p-2 border-2 border-slate-300 rounded-md hover:border-blue-500"
        onClick={addToCartHandler}>Add to cart</button>}
        </div>
      </div>
    </div>
    </Layout>
  );
}





