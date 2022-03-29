import Image from "next/image";


const images = [
  "/images/red-velvet-cake.jpg",
  "/images/girls-cake.jpg",
  "/images/butter-cream-cake.jpg"

]
export default function HotOffers({children}) {
  return (
    <div className="flex flex-wrap justify-around bg-pink-500 text-xl text-center text-white">
      <div className="flex-1 flex flex-col p-4 ">
        <Image
          src={images[0]}
          alt="red-velvet-cake"
          width={200}
          height={300}
        />
        <h3 className="py-4">Red Velvet Cake</h3>
        <del>320 L.E </del>
        <span className="hover:text-2xl bg-purple-500">280 L.E</span>
      </div>
      <div className="flex-1 flex flex-col p-4">
        <Image
          src={images[1]}
          alt="grils-cake"
          width={200}
          height={300}
        />
        <h3 className="py-4">Girls Cake</h3>
        <del>250 L.E </del>
        <span className="hover:text-2xl bg-purple-500">200 L.E</span>
      </div>
      <div className="flex-1 flex flex-col p-4">
        <Image
          src={images[2]}
          alt="butter-cream-cake"
          width={200}
          height={300}
        />
        <h3 className="py-4">Butter Cream Cake</h3>
        <del>400 L.E </del>
        <span className="hover:text-2xl bg-purple-500">360 L.E</span>
      </div>
    </div>
  );
}
