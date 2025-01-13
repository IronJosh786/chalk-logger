import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

class Logger {
  constructor() {
    this.ENV = process.env.NODE_ENV || "development";
  }

  log(type, label, message, data) {
    const formattedData = data ? `\n${JSON.stringify(data, null, 2)}` : "";
    const messageStyle = type === "error" ? chalk.redBright : chalk.blueBright;
    const labelStyle =
      type === "error" ? chalk.white.bgRed : chalk.white.bgBlue;

    if (this.ENV === "development") {
      console[type](labelStyle(label), messageStyle(message), formattedData);
    } else {
      console[type](label, message, formattedData);
    }
  }

  error(message, data) {
    this.log("error", "ERROR:", message, data);
  }

  info(message, data) {
    this.log("log", "INFO:", message, data);
  }
}

const log = new Logger();

export default log;
