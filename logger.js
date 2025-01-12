import chalk from "chalk";

export class Logger {
  errorLog = chalk.white.bgRed.bold;
  infoLog = chalk.white.bgBlue.bold;

  log(type, label, message, data) {
    const formattedData = data ? `\n${JSON.stringify(data, null, 2)}` : "";

    if (process.env.NODE_ENV === "production") {
      console[type](label, message, formattedData);
    } else {
      console[type](
        type === "error" ? this.errorLog(label) : this.infoLog(label),
        message,
        formattedData
      );
    }
  }

  error(message, data) {
    this.log("error", "ERROR:", message, data);
  }

  info(message, data) {
    this.log("log", "INFO:", message, data);
  }
}
