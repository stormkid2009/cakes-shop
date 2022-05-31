//api to add products to the cart
/* 
1-check if there is such user if not return error
2-load the user's cart then update it with the new products
3-return the products array to the cart page

*/
import { connectToDatabase } from "../../../util/mongodb";

const handler = async (req, res) => {
  const { email, products } = req.body;
  const arr = [...products];
  const [product] = arr ;
  const { db } = await connectToDatabase();
  //we need to check if cart exists or not
  const isUser = await db.collection("users").find({ email: email }).toArray();

  if (isUser) {
    try {
      const user = await db
        .collection("users")
        .findOneAndUpdate({ email: email }, { $push: { products: product } });
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const user = await db
      .collection("users")
      .insertOne({ email: email, products: products });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

export default handler;
