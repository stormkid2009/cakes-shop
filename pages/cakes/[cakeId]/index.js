import { connectToDatabase } from "../../../util/mongodb";
import Image from "next/image";
import Layout from "../../../components/layout"
import { useRouter } from "next/router";
import {  useSession } from "next-auth/react";
import Link from "next/link";
//we need to send post request to add/remove cart api
//we will use getSession/useSession to access user's info


export default function CakeReview({ cake }) {
  const { data: session, status } = useSession()
  const router = useRouter();
  const cakeName = cake.name;
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
  const email = session.user.email;
  const src = cake.image;

  const addToCartHandler = async(e)=>{
    e.preventDefault();
    //send our data to the api
     await fetch("/api/cart/add",{
      method:'POST',
      body:JSON.stringify({
        email:email,
        products:[{productName:cakeName,quantity:1}],
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }) ;
    
    //we need to check if cart exists or user exists
    //if not we will push up  our data >> email,products array
    //we need to check if cart has already this product or not
    //if product exists in the array we need only to modify the quantity of product
    //if not we gonna simply push our product object
    /* 
        
          router.push('/');
    */
  }
  return (
    <Layout>
    <div
      key={cake._id}
      className="pb-0 flex justify-around text-center bg-pink-100 w-full h-full"
    >
      <div className="flex-col p-4 m-3 border border-slate-300 rounded-md">
        <h1 className=" text-2xl py-2 m-1">&& {cake.name} Cake &&</h1>
        {src && <Image src={src} width={500} height={500} alt={cake.name}  />}
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
          <span>{cake.price} -L.E</span>
        </div>
        <div className="p-3 m-3">
        <button className=" p-2 border-2 border-slate-300 rounded-md hover:border-blue-500"
        onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    </div>
    </Layout>
  );
}
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


