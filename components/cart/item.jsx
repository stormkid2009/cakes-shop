import "tailwindcss/tailwind.css";

export default function Item({ cake }) {
  return (
    <div className="m-4 p-4 text-white flex justify-between bg-purple-500 border-2 rounded-lg border-white">
      <div>small image for cake will be here</div>
      
        <div>
          <p>cake name : {cake.cakeName}</p>
          <p className="p-4">Quantity: {cake.quantity}</p>
        </div>

        <div className="flex ">
          <button className="px-2 border rounded-lg mx-2 ">
            CHECKOUT ...
          </button>
          <button className="px-2 border rounded-lg mx-2 ">
            REMOVE ...
          </button>
        </div>
      
    </div>
  );
}
