import "tailwindcss/tailwind.css";
import Image from "next/image";


export default function Item({ cake,handler }) {
  return (
    <div className="m-4 p-4 text-white flex justify-around bg-purple-500 border-2 rounded-lg border-white">
      <div>{cake.image && <Image src={cake.image} width={200} height={200} alt={cake.name}  />}</div>
      
        <div className="flex-col">
            <div className="p-4 m-4">
              <p>Cake name : {cake.name}</p>
              <p >Quantity: {cake.quantity}</p>
              <p>Price : {cake.price}</p>
            </div>

        <div className="flex p-4 m-4">
              <button className="px-2 border rounded-lg mx-2 ">
                ORDER NOW ...
              </button>
              <button className="px-2 border rounded-lg mx-2 " onClick={(e)=>{
                e.preventDefault()
                handler(cake.name)
              }}>
                REMOVE ...
              </button>
        </div>
        </div>
      
    </div>
  );
}
