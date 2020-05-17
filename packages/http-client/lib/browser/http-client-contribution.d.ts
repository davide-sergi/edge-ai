import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
export declare const HttpClientCommand: {
    id: string;
    label: string;
};
export declare class HttpClientCommandContribution implements CommandContribution {
    constructor();
    registerCommands(registry: CommandRegistry): void;
}
export declare class HttpClientMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=http-client-contribution.d.ts.map