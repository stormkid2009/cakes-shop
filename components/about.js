//import styles from '../styles/About.module.css'
import "tailwindcss/tailwind.css";
import { FcEnteringHeavenAlive } from "react-icons/fc";

export default function About() {
    return (
        <div className="flex flex-col items-center text-white text-lg p-4">
            <div className="flex items-between">
            <FcEnteringHeavenAlive size={30}/>
            <h3 className="px-2 py-2 text-xl text-black">Cakes Land </h3>
            <FcEnteringHeavenAlive size={30} />
            </div>
                <p>we serve the best delicious cakes</p>
                <p>choose your favorite flavor among many</p>
                <p>we are happy to arrange birthday parties and weddings </p>
                <p>children are special for us with various cartoon cakes </p>
                
                
        </div>
    )
}
