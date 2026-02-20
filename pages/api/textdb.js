import { connectDB } from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    await connectDB();
    res.status(200).json({ message: "DB Connected Successfully" });
  } catch (error) {
    res.status(500).json({ message: "DB Connection Failed" });
  }
}

