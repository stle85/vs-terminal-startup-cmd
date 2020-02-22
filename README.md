# vs-terminal-startup-cmd

## Overview

The VS Code plug-in provides the ability to run a command when opening a terminal.

## Settings

There are several settings which are provided by the extension.

| name                        | description                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| terminal.startupCmd         | The command which will be triggered when the terminal opened. Override other startup settings. |
| terminal.startupCmd.linux   | The command which will be triggered when the terminal opened on *nix platform.                 |
| terminal.startupCmd.osx     | The command which will be triggered when the terminal opened on Mac OS platform.               |
| terminal.startupCmd.windows | The command which will be triggered when the terminal opened on Windows platform.              |

An example.
```json
{
  "terminal.startupCmd": "source ${workspaceFolder}/work.env"
}
```

## Running the plug-in

- Run `npm install` in terminal to install dependencies
- Run the `Run Extension` target in the Debug View. This will:
	- Start a task `npm: watch` to compile the code
	- Run the extension in a new VS Code window
