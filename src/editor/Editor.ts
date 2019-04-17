
import * as Common from './imports';
import { InitializeCommands } from './EditorCommands';

export class Editor implements Common.IEditor {

    Container: Common.IServiceContainer;
    private element: HTMLElement;

    Initialize(selector: string): Common.IEditor {
        console.log('initialize editor');
        let element = document.getElementById(selector);
        if (element) {
            element.contentEditable = 'true';
            element.classList.add('matrix-md-editor');

            this.element = element;
        }

        let container = new Common.ServiceContainer();
        this.UseCommands(container);
        this.Container = container;

        InitializeCommands(container);

        return this;
    }

    Invoke(name: string, arg?: any): void {
        let repository = this.Container.Resolve<Common.ICommandRepository>(Common.CommandRepositoryToken);
        repository.Invoke(name, { Editor: this, Arg: arg });
    }
    Exec(name: string, argument: any, showUi: boolean = false): void {
        console.log(`exec command: ${name}, ${argument}`);
        
        this.element.focus();
        document.execCommand(name, showUi, argument);
    }
    private UseCommands(container: Common.IServiceContainer) {
        container.Singleton(Common.CommandRepositoryToken).UseType(Common.CommandRepository);
    }
}