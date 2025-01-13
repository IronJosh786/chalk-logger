import chalk from "chalk";

export class Logger {
  log(type, label, message, data) {
    const formattedData = data ? `\n${JSON.stringify(data, null, 2)}` : "";
    const messageStyle = type === "error" ? chalk.redBright : chalk.blueBright;
    const labelStyle =
      type === "error" ? chalk.white.bgRed : chalk.white.bgBlue;

    if (process.env.NODE_ENV === "production") {
      console[type](label, message, formattedData);
    } else {
      console[type](labelStyle(label), messageStyle(message), formattedData);
    }
  }

  error(message, data) {
    this.log("error", "ERROR:", message, data);
  }

  info(message, data) {
    this.log("log", "INFO:", message, data);
  }
}
