declare module "parser" {
    export interface ICommand {
        name: string;
        usage: string;
        example: string[];
        category: string;
        aliases: string[];
        description: string;
        argDefinitions: ArgDefinition[];
    }
    export interface UnknownObject {
        [key: string]: unknown;
    }
    export interface BargsResult {
        _unknown: {
            _?: string;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    }
    export interface HelpCategory {
        [key: string]: ICommand[];
    }
    export type DaphFunction = (
        command: string,
        args: UnknownObject,
    ) => unknown;
    export type ArgDefinition = {
        name: string;
        type: (t: unknown) => unknown;
        aliases?: string[];
        default?: boolean;
        isOptional?: boolean;
    };
}
