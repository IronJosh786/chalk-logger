import http from "http";
import dotenv from "dotenv";
import { Logger } from "./logger.js";

dotenv.config();
const log = new Logger();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

const data = {
  id: 1,
  name: "John Doe",
  details: {
    age: 25,
    active: true,
    hobbies: ["Coding", "Reading", "Gaming"],
    nullValue: null,
  },
};

server.listen(3000, () => {
  log.info("Server is listening on port 3000");
  log.error("Example of error", data);
});
