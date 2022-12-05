const fs = require("fs").promises;
const path = require("path");
const chalk = require("chalk");
const startup = require("user-startup");
const inq = require("inquirer");
const prompt = inq.createPromptModule();

const setup = async () => {
  console.log(chalk.blue("Welcome to"));
  console.log(
    chalk.bold(chalk.blue(chalk.bgGreen("RobloxDevPresence Setup")))
  );
  console.log(chalk.blue("A Discord Rich Presence for Roblox Studio"));
  console.log(chalk.magenta("Made by kirbodev"));

  const type = await prompt([
    {
      name: "type",
      type: "list",
      message: "What would you like to do?",
      choices: ["Setup", "Uninstall", "Exit"],
    },
  ]);
  if (type.type == "Exit") return process.exit(0);
  else if (type.type == "Uninstall") {
    try {
      // Ask for confirmation
      const confirm = await prompt([
        {
          name: "confirm",
          type: "confirm",
          message: "Are you sure you want to uninstall RobloxDevPresence?",
        },
      ]);
      if (!confirm.confirm)
        return console.log(chalk.red("Uninstall cancelled."));

      // Remove the startup script
      await startup.remove("RobloxDevPresence");
      // Remove all files
      const files = await fs.readdir(path.join(__dirname, ".."));
      for (const file of files) {
        if (file != "setup.js") {
          await fs.unlink(path.join(__dirname, "..", file));
        }
      }
      console.log(
        chalk.green("Uninstalled successfully! You can now delete this folder.")
      );
    } catch (err) {
      console.log(
        chalk.bold(chalk.red("Something went wrong while uninstalling!"))
      );
    }
  } else {
    try {
      console.log(chalk.green("Setup started."));
      console.log(
        chalk.yellow(
          "Please note that you will need to restart Roblox Studio for the changes to take effect."
        )
      );

      console.log(chalk.bold(chalk.blue("Setting up...")));

      await startup.add("RobloxDevPresence", path.join(__dirname, "index.js"), {
        hidden: true,
      });

      console.log(
        `\n${chalk.blue("You can change the default settings in config.js.")}`
      );

      setTimeout(() => {
        console.log(chalk.green("Setup completed!"));
        console.log(
          chalk.green("When ready, restart your computer or run npm start.")
        );
      }, 1000);
    } catch (err) {
      console.log(
        chalk.bold(chalk.red("Something went wrong while setting up!"))
      );
    }
  }
};

setup();