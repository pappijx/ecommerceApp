const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

app.use(cors());
//connect to mongo
connectDB();
//defining routes
app.use(express.json({ extended: false }));
app.use("/api/users", require("./routes/userApi"));
app.use("/api/products", require("./routes/productsApi"));
app.use("/api/auth", require("./routes/authApi"));

app.get("/", (req, res) => {
  res.send("App is up");
});

app.listen(PORT, () => {
  console.log(`server listening ${PORT}`);
});
