const app = require("../app");
const PORT = process.env.PORT || 3000;

// database
const connectDB = require("../config/db");

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  connectDB();
});
