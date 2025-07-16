import { MongoClient } from "mongodb";

export default async function handler(req, resp) {
  if (req.method === "POST") {
    // console.log(req.body);
    const { email, name, message } = req.body;
    // console.log("e", email);

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      resp.status(422).json({
        message: "Invalid Input.",
      });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    // console.log(newMessage);
    let client;

    let connectionString = `mongodb+srv://Akan:107056Ujp@cluster0.x7e68.mongodb.net/${process.env.mongodb_database}`

    try {
      client = await MongoClient.connect(
        connectionString
      );
    } catch (error) {
      resp.status(500).json({
        message: "Could Not Connect...",
      });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      resp.status(500).json({
        message: "Not Able to Store...",
      });
      return;
    }

    client.close();

    resp.status(201).json({
      message: "Successfully stored Message.",
      message: newMessage,
    });
  }
}
