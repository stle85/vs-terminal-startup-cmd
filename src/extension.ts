'use strict';

import {
	window,
	workspace, 
	ExtensionContext, 
	Terminal,
} from 'vscode';


export function activate(context: ExtensionContext) {
	const configName = 'terminal.integrated.startupCmd';

	let workspaceFolder: string = '';
	if (workspace.workspaceFolders) {
		workspaceFolder = workspace.workspaceFolders[0].uri.path;
	}

	const cmd: string | undefined = workspace.getConfiguration().get(configName);
	window.onDidOpenTerminal((terminal: Terminal) => {
		if (cmd) {
			terminal.sendText(cmd.replace('${workspaceFolder}', workspaceFolder));
		}
	});
}
