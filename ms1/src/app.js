import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.get("/ms1", async (req, res) => {
  console.log("Request received on ms1");

  let ms2 = "";

  try {
    const response = await axios.get(`${process.env.MS2_URL}` || "");
    console.log(response.data);
    ms2 = response.data;
  } catch (error) {
    console.error(error);
  }
  console.log("🚀 ~ app.get ~ Object.keys(ms2):", Object.keys(ms2));
  res.json({
    message: "MARCO from ms1",
    ...(Object.keys(ms2).length && { ms2 }),
  });
});

app.listen(process.env.PORT, () => {
  console.log("MS1 - Server is running on port:", process.env.PORT);
});
