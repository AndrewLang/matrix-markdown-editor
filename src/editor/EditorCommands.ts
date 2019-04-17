import * as Common from './imports';

export const InitializeCommands = (container: Common.IServiceProvider) => {
    let repository = container.GetService<Common.ICommandRepository>(Common.CommandRepositoryToken);

    repository.Register('copy', Common.DelegateCommand.From((context: Common.IEditorContext) => {
        console.log(`execute copy command: ${context.Arg}`);
        context.Editor.Exec('insertText', context.Arg);

    }));
};