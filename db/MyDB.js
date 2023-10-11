import { MongoClient } from "mongodb";

const MyDB = () => {
  const uri = process.env.MONGO_url;
  const myDB = {};

  const connect = () => {
    const client = new MongoClient(uri);
    const db = client.db("eCommer");
    return { client, db };
  };

  myDB.getUser = async (query = {}) => {
    const { client, db } = connect();
    const userCollection = db.collection("users");
    try {
      return userCollection.findOne(query);
    } catch (e) {
      await client.close();
    }
  };

  myDB.createUser = async (doc = {}) => {
    const { client, db } = connect();
    const userCollection = db.collection("users");
    try {
      return userCollection.insertOne(doc);
    } catch (e) {
      await client.close();
    }
  };

  return myDB;
};

export const myDB = MyDB();
