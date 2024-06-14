const express = require("express");
const app = express();
const chatRoute = require("./index.js");

// Middleware
app.use(express.json());

// API routes
app.use("/api", chatRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
