const app = require("../app");

// database
const connectDB = require("../config/db");

connectDB();

/* Server */
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});

module.exports = app;
