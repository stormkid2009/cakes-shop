const {connectToDatabase} = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req,res){
    //switch crud methods
    switch(req.method){
        case 'GET':{
            return getCakesList(req,res);
        }
        case 'POST':{
            return addNewCake(req,res);
        }
        case 'PUT':{
            return updateCake(req,res);
        }
        case 'DELETE':{
            return deleteCake(req,res);
        }
            
    }
}

async function getCakesList(req,res){
    
    try {
        let {db} = await connectToDatabase();
        let cakes = await db
            .collection('cakes')
            .find({})
            .toArray();
        return res.status(200).json(cakes)
        /*return res.json({
            message:JSON.parse(JSON.stringify(cakes)),
            success:true,
        })*/
        
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success:false,
        })
        
    }
}