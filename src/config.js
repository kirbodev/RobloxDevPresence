const options = {
  projectName: "default", // Project name override
  author: "default", // Add an author to your project. "default" will use your username
  descText: "default", // Text to display in the "details" field, "default" will display "Made by <author>". {author} will be replaced with the author of the project
  stateText: "default", // Text to display in the "state" field, "default" will display "Editing <project name>" if not editing a file or "Editing <file name>" if editing a file. {projectName} and {fileName} can be used in this field. It's recommended to use the default value.
  clientId: "default", // Client ID of your discord application, "default" will set it to the default client ID. Don't change this unless you know what you're doing. Make sure you have three assets called "home", "build" and "lua" in your application.
  buttonText: "default", // Text to display on the button, "default" will display "View on Roblox".
  buttonUrl: "default", // URL to open when the button is clicked, "default" will not display a button. Must be a roblox.com URL.
  sButtonText: "default", // Text to display on the second button, "default" will display "Visit".
  sButtonUrl: "default", // URL to open when the second button is clicked, "default" will not display a second button. Can be any URL.
  use: false, // Set to true to use the config file
};

module.exports = options;