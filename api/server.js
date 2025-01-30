const app = require("../app");

// database
const connectDB = require("../config/db");

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = app;