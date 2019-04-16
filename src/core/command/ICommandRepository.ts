import { ICommand } from './ICommand';
import { ICommandDescriptor } from './ICommandDescriptor';

export interface ICommandRepository {
    /**
         * Get all commands
         */
    readonly Commands: Map<string, ICommand>;
    readonly Descriptors: ICommandDescriptor[];

    /**
     * Get command by name
     */
    GetCommand(name: string): ICommand | undefined;
    /**
     * Register a command
     */
    Register(name: string, command: ICommand): ICommandRepository;
    RegisterDescriptor(descriptor: ICommandDescriptor): ICommandRepository;
    /**
     * Invoke a command
     */
    Invoke(name: string, arg?: any): void;
}