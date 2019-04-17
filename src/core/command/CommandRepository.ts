import { ICommand } from './ICommand';
import { ICommandDescriptor } from './ICommandDescriptor';
import { ICommandRepository } from './ICommandRepository';

export const CommandRepositoryToken = { Token: 'CommandRepositoryToken'};

export class CommandRepository implements ICommandRepository {
    Commands = new Map<string, ICommand>();
    Descriptors: ICommandDescriptor[] = [];

    GetCommand(name: string): ICommand | undefined {
        let command = this.Commands.get(name);
        return command;
    }

    Register(name: string, command: ICommand): ICommandRepository {
        if (!name)
            throw new Error('Name value is null.');
        if (!command)
            throw new Error('Command value is null.');

        this.Commands.set(name, command);

        return this;
    }
    /**
     * 
     * @param name 
     * @param arg 
     */
    Invoke(name: string, arg?: any): void {
        let command = this.GetCommand(name);
        if (command) {
            command.Execute(arg);
        }
    }

    RegisterDescriptor(descriptor: ICommandDescriptor): ICommandRepository {
        if (!descriptor)
            throw new Error('Argument is null.');

        this.Descriptors.push(descriptor);
        return this;
    }
}