import express from "express";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/ms2", async (req, res) => {
  console.log("Request received on ms2");
  res.json({
    message: "POLO from ms2",
  });
});

app.listen(process.env.PORT, () => {
  console.log("MS2 - Server is running on port:", process.env.PORT);
});
