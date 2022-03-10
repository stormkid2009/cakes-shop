import Image from "next/image";
import list from "./list";
import styles from "../styles/Home.module.css";
//we need to get some data from list
//so we can use it to construct our hot offers component
export default function HotOffers() {
  return (
    
      
      <div className={styles.hot}>
        <div>
          <Image src="/images/red-velvet-cake.jpg" alt="red-velvet-cake" width={200} height={200} />
          <h4>Red Velvet Cake</h4>
          <del>320 L.E </del>
          <br />
          <span>280 L.E</span>
        </div>
        <div>
          <Image src="/images/girls-cake.jpg"alt="grils-cake" width={200} height={200} />
          <h4>Girls Cake</h4>
          <del>250 L.E </del>
          <br />
          <span>200 L.E</span>
        </div>
        <div>
          <Image src="/images/butter-cream-cake.jpg" alt="butter-cream-cake" width={200} height={200} />
          <h4>Butter Cream Cake</h4>
          <del>400 L.E </del>
          <br />
          <span>360 L.E</span>
        </div>
      </div>
    
  );
}
