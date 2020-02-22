'use strict';

import {
	window,
	workspace,
	ExtensionContext,
	Terminal,
	WorkspaceConfiguration,
} from 'vscode';


/**
 * Get the current workspace folder path.
 * 
 * @returns - The current workspace folder path.
 */
function getWorkspaceFolder(): string {
	if (workspace.workspaceFolders) {
		return workspace.workspaceFolders[0].uri.path;
	}
	return '';
}

/**
 * Get the current platform name.
 * 
 * @returns - The current platform name.
 */
function getPlatform(): string {
	switch (process.platform) {
		case 'darwin':
			return 'osx';

		case 'win32':
			return 'windows';

		default:
			return 'linux';
	}
}

/**
 * Get the cmd for running from settings.
 * 
 * @returns - The cmd from settings.
 */
function getCmd(): string | undefined {
	const configName = 'terminal.startupCmd';
	const platformConfigName = `terminal.startupCmd.${getPlatform()}`;

	const configuration: WorkspaceConfiguration = workspace.getConfiguration();
	const platformCmd: string | undefined = configuration.get(platformConfigName);
	if (platformCmd) {
		return platformCmd;
	}
	return configuration.get(configName);
}

/**
 * Expand variables in the string.
 * 
 * @param str - The string with variables.
 * @returns - The expanded string.
 */
function expandVars(str: string): string {
	const workspaceFolder: string = getWorkspaceFolder();
	return str.replace('${workspaceFolder}', workspaceFolder)
}


/**
 * The extension's activate function.
 * 
 * @param context - The extension context.
 */
export function activate(context: ExtensionContext) {
	window.onDidOpenTerminal((terminal: Terminal) => {
		const cmd: string | undefined = getCmd();
		if (cmd && '' !== cmd) {
			const preparedCmd: string = expandVars(cmd);
			terminal.sendText(preparedCmd);
		}
	});
}
