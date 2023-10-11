const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const connectionString = "mongodb://127.0.0.1:27017";
const app = express();

app.use(cors());
app.use(express.urlencoded({

    extended:true
})); 

app.use(express.json());
app.get("/getusers", async (req, res) => {
  try {
    const client = await MongoClient.connect(connectionString);
    const database = client.db("College");
    const collection = database.collection("Users");
    const documents = await collection.find({}).toArray();
    res.send(documents);
    client.close();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/registeruser", async (req, res) => {
  try {
    const client = await MongoClient.connect(connectionString);
    const database = client.db("College");
    const collection = database.collection("Users");

    const userDetails = {
      UserId:req.body.UserId,
      UserName:req.body.UserName,
      Password:req.body.Password,
      Age:parseInt(req.body.Age),
      Mobile:req.body.Mobile,
      Suscribed:(req.body.Suscribed==="true")?true:false
    };

    const result = await collection.insertOne(userDetails);
    console.log("Record inserted:", result);
    res.send(result);

    client.close();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => {
  console.log("Server started: http://127.0.0.1:4000");
});
