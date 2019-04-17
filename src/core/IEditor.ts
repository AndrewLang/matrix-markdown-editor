import * as Common from './imports';


export interface IEditor {
    readonly Container: Common.IServiceContainer;

    Initialize(selector: string): IEditor;
    Invoke(name: string, arg?: any): void;
    Exec(name: string, argument: any, showUi?: boolean): void;
}

export interface IEditorContext {
    Editor: IEditor;
    Arg?: any;
}