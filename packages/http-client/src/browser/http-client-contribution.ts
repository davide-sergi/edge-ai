import { injectable } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

const axios = require("axios");
axios.defaults.adapter = require('axios/lib/adapters/http');

export const HttpClientCommand = {
    id: 'HttpClient.command',
    label: "Send HTTP request"
};

@injectable()
export class HttpClientCommandContribution implements CommandContribution {

    constructor(
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(HttpClientCommand, {
            execute: (options) => {
                let response = axios.request(options[0]);
                return response;
            }
        });
    }
}

@injectable()
export class HttpClientMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: HttpClientCommand.id,
            label: HttpClientCommand.label
        });
    }
}
