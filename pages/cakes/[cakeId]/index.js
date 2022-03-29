import { connectToDatabase } from "../../../util/mongodb";
import Image from "next/image";



export default function CakeReview({ cake }) {
  const src = cake.image;
  return (
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
        <button className=" p-2 border-2 border-slate-300 rounded-md hover:border-blue-500">Order Now</button>
        </div>
      </div>
    </div>
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


