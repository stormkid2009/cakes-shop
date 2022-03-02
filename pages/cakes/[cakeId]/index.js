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
  const response = await fetch("http://localhost:3000/api/cakes");
  const data = await response.json();
  const paths = data.map((cake) => {
    return {
      params: { cakeId: cake.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch("http://localhost:3000/api/cakes");
  const data = await response.json();
  const list = data.filter((cake) => cake.name === params.cakeId);
  console.log(list[0]);

  return {
    props: {
      cake: list[0],
    },
  };
}

CakeReview.layout = "review";
