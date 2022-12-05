# RobloxDevPresence
Sets your Discord rich presence to whatever you're doing on Roblox Studio. (No plugin needed!)
<img src="https://i.ibb.co/ZLcfmt9/robloxdevpresence.gif">

## Table of Contents
- [RobloxDevPresence](#robloxdevpresence)
  - [Table of Contents](#table-of-contents)
  - [What is this?](#what-is-this)
    - [Features](#features)
  - [Why was this made?](#why-was-this-made)
  - [How does it work?](#how-does-it-work)
  - [How do I use it?](#how-do-i-use-it)
    - [Github Releases](#github-releases)
      - [**Requirements**](#requirements)
      - [**Installation**](#installation)
    - [Source Code](#source-code)
      - [**Requirements**](#requirements-1)
      - [**Installation**](#installation-1)
  - [Credits](#credits)
  - [Donations](#donations)
  - [License](#license)
  
## What is this?
This is a simple program that sets your Discord rich presence to whatever you're doing on Roblox Studio. It's written in Node.js (javascript) and uses the [Discord.js RPC](https://github.com/discordjs/RPC) library. It's highly customisable with custom button support coming soon. It's currently in beta, so there may be some bugs. If you find any, please report them [here](https://github.com/kirbodev/RobloxDevPresence/issues).  
### Features
- Set your Discord rich presence to whatever you're doing on Roblox Studio
- Customisable
- Easy to use
- No plugin needed
- Open source 

## Why was this made?
I made this because most other roblox rich presence repos were archived recently. All the ones I'm aware of also required you to install a plugin, which I didn't want to do. I wanted to make a customisable rich presence which worked and didn't require a plugin, so I made this. I hope you enjoy it!   
*Here's some other rich presence repos:*
- [roPresence](https://github.com/JiveOff/roPresence) - Archived
- [RobloxStudioRPC](https://github.com/LeadRDRK/RobloxStudioRPC) - Archived

## How does it work?
The application starts up silently on start-up so you don't need to run it every time.
I completely removed the need for a plugin by using the window title of the Roblox Studio application. It's pretty simple, but it works. I also added a customisable config file so you can change the rich presence to whatever you want. After it gets what you're working on, it uses the Discord.js RPC library to set your rich presence. If you want to know how it works in more detail, check out [src/index.js](https://github.com/kirbodev/robloxdevpresence/tree/main/src/index.js) or [drop me a message](https://kirbodev.com/#contact).

## How do I use it?
### Github Releases
#### **Requirements**
- Discord application
- Roblox Studio

#### **Installation**
1. Download the latest release from [here](https://github.com/kirbodev/robloxdevpresence/releases).
2. Run it and select setup.
3. Wait for it to finish.  
4. Restart your computer. 
   
**Disclaimer: Config isn't currently supported on the releases version and will use the default settings.**

### Source Code
#### **Requirements**
- Discord application
- Roblox Studio
- Node.js

#### **Installation**
1. Clone the repo.
2. Run `npm setup`, wait for packages to install and then follow the instructions.
3. Wait for it to finish.
4. Change the config in `src/config.js` to your liking.
5. Restart your computer or run `npm start` in the directory.

## Credits
- [Discord.js RPC](https://github.com/discordjs/RPC) - Discord rich presence library
- [Roblox Studio](https://www.create.roblox.com/) - Roblox Studio
- [Discord](https://discord.com/) - Discord
- [Node.js](https://nodejs.org/) - Node.js
- [Chalk](https://github.com/chalk/chalk) - Console colouring
- [Active-win](https://github.com/sindresorhus/active-win) - Getting roblox studio window title
- [Find-process](https://github.com/yibn2008/find-process) - Getting roblox studio process
- [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Console prompts
- [User-startup](https://github.com/typicode/user-startup) - Starting on startup

## Donations
If you really like this project and want to support me, you can support me on [Ko-fi](https://ko-fi.com/kirbodev). Thank you!

## License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html).