import Link from "next/link";
import { connectToDatabase } from "../../util/mongodb";
import Image from "next/image";


export async function getServerSideProps() {
  let { db } = await connectToDatabase();
  let data = await db.collection("cakes").find({}).sort({ name: 1 }).toArray();
  const cakes = JSON.parse(JSON.stringify(data));

  return {
    props: {
      cakes,
    },
  };
}

export default function CakesList({ cakes }) {
  return (
    <div className="flex flex-wrap justify-around py-4 bg-pink-500">
      {cakes.map((cake) => {
        return (
          <div key={cake._id} className=" text-center text-white">
            <div className="border-2 border-slate-100 rounded-md p-0 m-0 bg-slate-100">
              {cake.image && (
                <Image
                  src={cake.image}
                  width={470}
                  height={420}
                  alt={cake.name}
                />
              )}
            </div>
            <div className="text-lg text-sky-200 pt-1">
              <h1>{cake.name} Cake</h1>
            </div>
            <div className="py-1 my-1">
              <label>Price: </label>
              <span>
                {cake.price} <span>L.E</span>
              </span>
            </div>
            <div className="w-l py-1 my-1 text-lg">
              <button className="  border-2 border-slate-300 rounded-md hover:border-blue-300">
              <Link href={`/cakes/${cake.name}`}>
                <a>View more  details</a>
              </Link>
              </button>
            </div>

          </div>
        );
      })}
    </div>
  );
}


