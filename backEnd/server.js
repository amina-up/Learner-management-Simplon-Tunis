const express = require("express");
const connectDB = require("./config/db");
const comments = require("./routes/comment");
const apprenants = require("./routes/apprenant");
const app = express();

connectDB();
app.use(express.json());
app.use("/apprenants", apprenants);
app.use("/comments", comments);

const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Server running on port ${port}`));
