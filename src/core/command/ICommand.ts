export interface ICommand {
    /**
         * Whether can execute the command
         */
    CanExecute(param?: any): boolean;

    /**
     * Execute the command
     */
    Execute(param?: any): void;
}