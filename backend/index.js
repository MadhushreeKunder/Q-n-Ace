const express = require("express");
const app = express();
const chatRoute = require("./server.js");
const cors = require("cors");

const corsOptions = {
  origin: [
    "https://q-n-ace.vercel.app",
    "http://localhost:3000",
    "https://q-n-ace.onslate.in/",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", chatRoute);

app.get("/", (req, res) => {
  res.send("Welcome to QnAce backend!");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
