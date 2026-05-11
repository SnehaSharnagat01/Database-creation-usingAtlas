const connectDb = require("./src/config/db");
let app = require("./src/app");
connectDb();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
