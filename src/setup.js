const fs = require("fs").promises;
const path = require("path");
const chalk = require("chalk");
const inq = require("inquirer");
const { platform } = require("os");
const prompt = inq.createPromptModule();

const setup = async () => {
  if (platform != "win32") {
    console.log(
      chalk.red(
        `RobloxDevPresence is only compatible with Windows. It seems like you're running ${platform}. Sorry!`
      )
    );
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  } else {
    console.log(chalk.blue("Welcome to"));
    console.log(
      chalk.bold(chalk.blue(chalk.italic("RobloxDevPresence Setup")))
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

        fs.access(
          path.join(
            process.env.APPDATA,
            "Microsoft",
            "Windows",
            "Start Menu",
            "Programs",
            "Startup",
            "RobloxDevPresence.vbs"
          )
        )
          .catch(() => {
            console.log(
              chalk.bold(chalk.red("RobloxDevPresence is not installed."))
            );
            setTimeout(() => {
              process.exit(1);
            }, 2000);
          })
          .then(async () => {
            await fs.unlink(
              path.join(
                process.env.APPDATA,
                "Microsoft",
                "Windows",
                "Start Menu",
                "Programs",
                "Startup",
                "RobloxDevPresence.vbs"
              )
            );
            console.log(
              chalk.green(
                "Uninstalled successfully! You can now delete this folder."
              )
            );
          });
      } catch (err) {
        console.log(
          chalk.bold(chalk.red("Something went wrong while uninstalling!"))
        );
      }
    } else {
      try {
        fs.access(
          path.join(
            process.env.APPDATA,
            "Microsoft",
            "Windows",
            "Start Menu",
            "Programs",
            "Startup",
            "RobloxDevPresence.vbs"
          )
        )
          .then(() => {
            console.log(
              chalk.bold(
                chalk.red(
                  "RobloxDevPresence is already installed!"
                )
              )
            );
            setTimeout(() => {
              process.exit(1);
            }, 2000);
          })
          .catch(async () => {
            console.log(chalk.green("Setup started."));
            console.log(
              chalk.yellow(
                "Please note that you will need to restart Roblox Studio for the changes to take effect."
              )
            );

            console.log(chalk.bold(chalk.blue("Setting up...")));

            // Write vbs script to startup folder using fs
            await fs.writeFile(
              path.join(
                process.env.APPDATA,
                "Microsoft",
                "Windows",
                "Start Menu",
                "Programs",
                "Startup",
                "RobloxDevPresence.vbs"
              ),
              `
        Set Shell = CreateObject("WScript.Shell")
        Shell.CurrentDirectory = "${path.join(__dirname, "..")}" 
        Shell.Run "node src/index.js", 0, False
        `
            );

            console.log(
              `\n${chalk.blue(
                "You can change the default settings in config.js."
              )}`
            );

            setTimeout(() => {
              console.log(chalk.green("Setup completed!"));
              console.log(
                chalk.green(
                  "When ready, restart your computer or run npm start."
                )
              );
            }, 1000);
          });
      } catch (err) {
        console.log(
          chalk.bold(chalk.red("Something went wrong while setting up!"))
        );
        console.log(err)
      }
    }
  }
};

setup();
