# vs-terminal-startup-cmd

## Overview

The VS Code plugin provides the ability to run a command when opening a terminal.

## Settings

```json
{
  "terminal.integrated.startupCmd": "source ${workspaceFolder}/work.env"
}
```

## Running the plugin

- Run `npm install` in terminal to install dependencies
- Run the `Run Extension` target in the Debug View. This will:
	- Start a task `npm: watch` to compile the code
	- Run the extension in a new VS Code window
