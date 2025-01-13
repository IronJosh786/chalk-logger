import log from "./logger.js";

const info = {
  id: 1,
  name: "John Doe",
  details: {
    age: 25,
    hobbies: ["Coding", "Reading", "Gaming"],
  },
};

const error = {
  success: false,
  message: "Cannot read properties of undefined (reading test)",
};

log.info("This is an info message", info);
log.error("This is an error message", error);
