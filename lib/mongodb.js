import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.DB_NAME

//check for mongodb uri
if(!MONGODB_URI){
    throw new Error('you have to define mongodb uri env variable first')
}
if(!MONGODB_DB){
    throw new Error('you have to define mongodb db env variable first')
}

let cachedClient = null
let cachedDB = null

export async function connectToDatabase(){
    //check the cached
    if(cachedClient && cachedDB){
        //load from the cached
        return {
            client:cachedClient,
            db:cachedDB,
        }

    }
    //set the connection options
    const opts = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }

    //connect to the cluster
    let client = new MongoClient(MONGODB_URI,opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    //set cache
    cachedClient = client;
    cachedDB = db;

    return {
        client:cachedClient,
        db:cachedDB,
    }

}



