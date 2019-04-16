import { ICommand } from './ICommand';

export class DelegateCommand implements ICommand {

    constructor(
        private canExecute: (param?: any) => boolean,
        private action: (param?: any) => void) {

    }
    /**
     * Whether can execute the command
     */
    CanExecute(param?: any): boolean {
        if (this.canExecute === null)
            return true;
        return this.canExecute(param);
    }
    /**
     * Execute the command
     */
    Execute(param?: any): void {
        if (this.action) {
            try {
                this.action(param);
            } catch (error) {
                throw error;
            }
        }
    }

    /**
     * Create a command from given actions.
     * @param action executed action
     * @param canExecute can execue action
     */
    static From(action: (param?: any) => void, canExecute?: (param?: any) => boolean): ICommand {
        if (!canExecute)
            canExecute = (param?: any) => true;
        return new DelegateCommand(canExecute, action);
    }
}