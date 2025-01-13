import log from "./logger.js";

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

log.info("Server is listening on port 3000");
log.error("Example of error", data);
