import { connectToDatabase } from "../../../util/mongodb";
import Cake from "../../../components/cake";
import styles from "../../../styles/Home.module.css";

export default function CakeReview({ cake }) {
  
  return (
    <div className={styles.hot}>
      <Cake cake={cake} />
    </div>
  );
}
export async function getStaticPaths() {
  let {db} = await connectToDatabase();
  let data = await db
        .collection('cakes')
        .find({})
        .toArray()
    
  const cakes = JSON.parse(JSON.stringify(data))
  const paths = cakes.map((cake) => {
    return {
      params: { cakeId: cake.name },
    };
  });
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let {db} = await connectToDatabase();
  let data = await db
        .collection('cakes')
        .findOne({name:params.cakeId})
        
    
    const cake = JSON.parse(JSON.stringify(data))

  return {
    props: {
      cake,
    },
    revalidate:10,
  };
}

CakeReview.layout = "review";
