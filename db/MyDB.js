import { query } from "express";
import { MongoClient } from "mongodb";

const MyDB = () => {
  const uri =
    "mongodb+srv://admin:admin@cluster0.duh9gcc.mongodb.net/?retryWrites=true&w=majority";
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

  myDB.getSearch = async (query = {}) => {
    const { client, db } = connect();
    const bookCollection = db.collection("books");
    console.log(query);
    //find the query in the dataset
    //db.collection.find( { qty: { $gt: 4 } } )
    try {
      return bookCollection.findOne(query);
    } catch (e) {
      await client.close();
    }
  };

  return myDB;
};

export const myDB = MyDB();
