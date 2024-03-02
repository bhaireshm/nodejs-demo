import { connect, Schema } from 'mongoose';

// * Object Document Mapping (ODM)
// * Connecting to the database
(async function initDatabase() {
  const client = await connect('mongodb://localhost/Hotels')
  const db = client.connection.db;
  console.log("Connected to (", db.databaseName, ") database.");

  try {
    // * List collections
    // db
    //   .listCollections()
    //   .toArray()
    //   .then(function (collections) {
    //     console.log(collections);
    //   })
    //   .catch(console.error);

    // * New schema creation
    const userchema = new Schema({
      name: String,
      password: String
    });
    const User = client.model('users', userchema);

    // * Delete document
    // User.deleteMany({ name: "Harry Potter" });

    // 

    // * Create/Insert document into collection
    // User.create({ name: "Harry Potter", password: "qwertyuiop" })
    //   .then(data => console.log("User created:", data))
    //   .catch(console.error);

    // * Fetch all
    User.find({})
      .then(data => console.log("User data:", data))
      .catch(console.error);

    // * Using existing schema (register first)
    // const model = client.model('restaurants', {});
    // model.find({})
    //   .limit(2)
    //   // .select()
    //   .then(data => {
    //     console.log(`${model.modelName} data:`, data)
    //   })
    //   .catch(console.error);

  } catch (error) {
    console.error(error);
  }
})() // IIFE
