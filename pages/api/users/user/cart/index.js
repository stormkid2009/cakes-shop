import { connectToDatabase } from "../../../../../util/mongodb";
//this api designed for:
//cart is an array of items inside the user object
//get cart from database
//pushing item object to empty cart
//updating certain item property inside the cart
//removing item or items from the cart
//what we need to do:
//first of all doing all our operations client side then send the updated cart array back to the database
const handler = (req,res)=>{
    
    switch (req.method) {
        case 'POST':
            return getUserCart(req,res);
        case 'PUT':
             return updateUserCart(req,res);
            
        default:
            break;
    }
};



const getUserCart = async(req,res)=>{
    const {email}= req.body;
    try {
        const {db} = await connectToDatabase();
        const user = await db.collection('users').findOne({email:email});
        res.status(200).json(user.cart);
    } catch (error) {
        res.status(500).json({msg:`there is no user with email: ${email}`})
      
    }
  };

  const updateUserCart = async(req,res)=>{
    const {email,cart}= req.body;
    try {
        const {db}= await connectToDatabase();
        db.collection('users').findOneAndUpdate({email:email},{$set:{cart:cart}});
        res.status(201).send({msg:`user cart with email: ${email} has been updated successfully`})
    } catch (error) {
      res.status(500).json({msg:error})
    }
  }
export default handler;