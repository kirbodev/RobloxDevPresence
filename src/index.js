const chalk = require("chalk");
const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
const find = require("find-process");
const win = require("active-win");
const configs = require("./config.js");
let config = configs;
if (!config.use) {
  console.log(
    chalk.bold(
      chalk.yellow("Config file is not enabled, using default settings")
    )
  );
  config = {};
} else {
  if (!config.projectName) {
    console.log(chalk.bold(chalk.yellow("Project name is not set!")));
    config.projectName = "MyProject";
  }
  if (!config.description) {
    console.log(chalk.bold(chalk.yellow("Description is not set!")));
    config.description = "Description";
  }
  if (!config.author) {
    console.log(
      chalk.bold(chalk.yellow("Author is not set, using your username"))
    );
    config.author = "Author";
  }
}

let gameInfo;
let prevstatus;
let projName;

async function setPresence(game) {
  if (!game) return;
  if (prevstatus) {
    if (prevstatus.title == "Roblox Studio") {
      if (game.title != "Roblox Studio") {
        if (game.title != "Auto-Recovery") {
          projName = game.title.replace(" - Roblox Studio", "");
        }
      }
    }
  }
  if (config.stateText == "default" || !config.stateText) {
    gameInfo.state =
      game.title.replace(" - Roblox Studio", "") == projName
        ? `Editing ${config.projectName || projName || "a project"}`
        : `Editing ${game.title.replace(" - Roblox Studio", "")}`;
    if (game.title.replace(" - Roblox Studio", "") == "Roblox Studio" || game.title.replace(" - Roblox Studio", "") == "Auto-Recovery") {
      gameInfo.state = "On the home page";
    }
  } else {
    gameInfo.state =
      config.stateText
        .replace("{projectName}", config.projectName || projName || "a project")
        .replace("{fileName}", game.title.replace(" - Roblox Studio", "")) ||
      "Editing a project";
    if (game.title.replace(" - Roblox Studio", "") == "Roblox Studio" || game.title.replace(" - Roblox Studio", "") == "Auto-Recovery") {
      gameInfo.state = "On the home page";
    }
  }
  if (game.title.replace(" - Roblox Studio", "") == "Roblox Studio" || game.title.replace(" - Roblox Studio", "") == "Auto-Recovery") {
    gameInfo.largeImageKey = "home";
    gameInfo.largeImageText = "On the home page";
  } else if (game.title.replace(" - Roblox Studio", "") == projName) {
    gameInfo.largeImageKey = "build";
    gameInfo.largeImageText = "Building";
  } else {
    gameInfo.largeImageKey = "lua";
    gameInfo.largeImageText = "Scripting";
  }
  client.setActivity(gameInfo);
  prevstatus = game;
}

let wasRobloxOpen = false;
async function lookup() {
  find("name", "RobloxStudioBeta.exe", true).then(async function (list) {
    if (list.length > 0) {
      if (!wasRobloxOpen) {
        wasRobloxOpen = true;
        gameInfo.startTimestamp = new Date();
      }
      const info = await win();
      if (info) {
        if (
          info.title.includes("Roblox Studio") ||
          info.owner.name == "RobloxStudio"
        ) {
          setPresence(info);
        }
      }
    } else {
      if (wasRobloxOpen) {
        wasRobloxOpen = false;
        client.clearActivity();
      }
    }
  });
}

client.on("ready", () => {
  let startTimestamp = new Date();
  gameInfo = {
    details: `Made by ${config.author || client.user.username}`,
    state: "Idling",
    startTimestamp,
    smallImageKey: "robloxstudio",
    smallImageText: "Roblox Studio",
    largeImageKey: "home",
    largeImageText: "On the home page",
    instance: false,
  };

  if (config.descText) {
    config.descText.replace("{author}", config.author || client.user.username);
  }
  lookup();
  setInterval(() => {
    try {
      lookup();
    } catch (e) {
      console.log(chalk.red("Warn: " + e));
    }
  }, 1500);
});

client.on("error", (err) => {
  console.log(chalk.yellow("Warn: " + err));
});

if (config.clientId == "default" || !config.clientId) {
  client.login({ clientId: "947105967600971776" });
} else {
  client.login({ clientId: config.clientId });
}
