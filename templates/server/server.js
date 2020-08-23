const dotenv = require("dotenv");
const http = require("http");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./.env" });
console.log(`App run in ${process.env.NODE_ENV} mode`);
const app = require("./app/app");

const httpServer = http.createServer(app);

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  console.log(`HTTP Server running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);

  httpServer.close(() => {
    process.exit(1);
  });
});
