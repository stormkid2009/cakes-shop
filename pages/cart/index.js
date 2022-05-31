import Cart from "../../components/cart";
import { connectToDatabase } from "../../util/mongodb";
import { useSession, getSession } from "next-auth/react";
import Layout from "../../components/layout";
import Link from "next/link";

export default function CartDisplay({ users }) {
  const { data: session } = useSession();
  
  if (typeof window === "undefined") return null;

  if (session) {
    const { email } = session.user;
  let user = users.filter((user) => user.email === email);
    return (
      <Layout>
      <Cart user={user[0]} />
    </Layout>
  );
    
  }

  return (
    <div>
     <p>Access Denied</p>
    </div>)
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { db } = await connectToDatabase();
  const data = await db.collection("users").find({}).toArray();

  return {
    props: {
      session,
      users: JSON.parse(JSON.stringify(data)),
    },
  };
}
