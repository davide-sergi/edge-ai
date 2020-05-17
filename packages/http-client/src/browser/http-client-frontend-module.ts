/**
 * Generated using theia-extension-generator
 */
import { HttpClientCommandContribution, HttpClientMenuContribution } from './http-client-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(HttpClientCommandContribution);
    bind(MenuContribution).to(HttpClientMenuContribution);
});
