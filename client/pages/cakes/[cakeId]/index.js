import Cake from "../../../components/cake";
import list from "../../../components/list";

export default function CakeReview({ cake }) {
  return (
    <div>
      <Cake cake={cake} />
    </div>
  );
}
export async function getStaticPaths() {
  const paths = list.map((cake) => {
    return {
      params: { cakeId: `${cake.name}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = list.filter((cake) => cake.name === params.cakeId);

  return {
    props: {
      cake: data[0],
    },
  };
}


