const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

let messages = [];

router.post("/category", async (req, res) => {
  try {
    const { topic, difficulty } = req.body.data;

    messages = [
      {
        role: "system",
        content: `You are an interviewer who should ask only 3 ${difficulty} questions one by one related to ${topic}.`,
      },
    ];

    res.status(200).json({ message: "Success: Prompt updated" });
  } catch (err) {
    console.log("Err", err);
  }
});

router.post("/chat", async (req, res) => {
  try {
    const userResponse = req.body.transcript;
    messages.push({ role: "user", content: userResponse });

    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: "llama3-8b-8192",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: true,
      stop: null,
    });

    let response = "";
    for await (const chunk of chatCompletion) {
      const delta = chunk.choices[0]?.delta?.content || "";
      response += delta;
    }

    messages.push({ role: "assistant", content: response });
    res.json({ role: "assistant", content: response });
  } catch (error) {
    console.error("Error during conversation:", error);
    res.status(500).json({ error: "Error during conversation" });
  }
});

module.exports = router;
