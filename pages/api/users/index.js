import { connectToDatabase } from "../../../util/mongodb";

const handler=  (req,res)=>{
    
    const {method} = req;

    switch (method) {
        case 'GET':
            return getAllUsers(req,res);
            
        case 'POST':
            return createNewUser(req,res);
                 
        default:
            break;
    }
    
    
};

const getAllUsers = async (req,res) => {
    try {
      const {db}  = await connectToDatabase();
      const users = await db.collection("users").find({}).toArray();
      res.status(200).json(users);
    
  } catch (error) {
      res.status(500).json({msg:error})
  }
};

const createNewUser=async(req,res)=>{
    const {body} = req;
    try {
        const {db}  = await connectToDatabase();
        const isExist = await db.collection('users').findOne({email:body.email});
        if(isExist){
            return res.json({msg:`user with email: ${body.email} is already exist`})
        }
        const user = await db.collection("users").insertOne({email:body.email,cart:[]});
        res.status(201).json(user);
        
    } catch (error) {
       res.status(500).json({msg:error});  
    }
};



export default handler;