import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'cha-cell',
    templateUrl: 'cell.component.html'
})

export class CellComponent implements OnInit {

    @Input() content: any;
    isShowObject: boolean;
    isShowArray: boolean;
    constructor() { }

    ngOnInit() { }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (simpleChanges.content.currentValue) {
            this.content = simpleChanges.content.currentValue;
        }
    }

    isArray(content: any): boolean {
        return Array.isArray(content);
    }

    isObject(content: any): boolean {
        return typeof content === 'object' && !this.isArray(content);
    }

    isSimpleType(content: any): boolean {
        return !this.isArray(content) && !this.isObject(content);
    }

    getFields(object: any): string[] {
        return Object.keys(object);
    }

    toggleShowObject() {
        this.isShowObject = !this.isShowObject;
    }

    toggleShowArray() {
        this.isShowArray = !this.isShowArray;
    }


}