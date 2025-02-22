const app = require("../app");

// database
const connectDB = require("../config/db");

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
