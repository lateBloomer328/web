import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("my-app2");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return <div>{result[0].content}</div>;
}
