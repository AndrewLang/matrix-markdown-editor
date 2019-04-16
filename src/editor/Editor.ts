
import * as Common from './imports';

export class Editor implements Common.IEditor {

    Initialize(selector: string): Common.IEditor {
        console.log('initialize editor');
        let element = document.getElementById(selector);
        if(element){
            element.contentEditable = 'true';
            element.classList.add('matrix-md-editor');
        }

        return this;
    }
}