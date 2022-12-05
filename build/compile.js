const { compile } = require('nexe');

compile({
    input: '../src/index.js',
    output: './build/RobloxDevPresence.exe',
    target: 'windows-x64-12.16.1',
    ico: "../assets/logo.ico",
    build: true,
    resources: [
        '../src/config.js',
        '../src/package.json',
        '../src/README.md',
        '../src/setup.js',
    ],
    framework: 'nodejs',
    loglevel: 'verbose',
    verbose: true,
    nodeVersion: '12.16.1',
    nodeTempDir: '../build/nodeTempDir',
    nodeConfigureArgs: ['--fully-static'],
    nodeMakeArgs: ['--fully-static'],
    nodeSourceUrl: 'https://nodejs.org/dist/v12.16.1/node-v12.16.1.tar.gz',
    nodeConfigure: ['--fully-static'],
    nodeMake: ['--fully-static'],
    nodeVCBuildArgs: ['nosign', 'release', 'x64'],
    nodeVCBuild: ['nosign', 'release', 'x64'],
    nodeGyp: ['--fully-static'],
    nodeGypArgs: ['--fully-static'],
    nodeDownloadUrl: 'https://nodejs.org/dist/v12.16.1/node-v12.16.1.tar.gz',
    nodeDownloadUrlMirror: 'https://nodejs.org/dist/v12.16.1/node-v12.16.1.tar.gz',
    nodeMirror: 'https://nodejs.org/dist/v12.16.1/node-v12.16.1.tar.gz',
}).then(() => {
    console.log('success');
}).catch((err) => {
    console.log("Something went wrong while compiling!");
    console.log(err);
});