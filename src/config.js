const options = {
  projectName: "MyProject", // Project name override
  version: "1.0.0", // Add a version number to your project
  description: "Description", // Add a description to your project
  author: "Author", // Add an author to your project (default: your username)
  descText: "default", // Text to display in the "details" field, "default" will display "Made by <author>". {author} will be replaced with the author of the project
  stateText: "default", // Text to display in the "state" field, "default" will display "Editing <project name>" if not editing a file or "Editing <file name>" if editing a file. {projectName} and {fileName} can be used in this field. It's recommended to use the default value.
  clientId: "default", // Client ID of your discord application, "default" will set it to the default client ID. Don't change this unless you know what you're doing. Make sure you have three assets called "home", "build" and "lua" in your application.
  use: false, // Set to true to use the config file
};

module.exports = options;