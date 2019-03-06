import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'cha-object-explorer',
    templateUrl: 'object-explorer.component.html'
})

export class ObjectExplorerComponent implements OnInit {

    @Input() object: any;
    fields: string[];

    constructor() { }

    ngOnInit() { }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (simpleChanges.object.currentValue) {
            this.object = simpleChanges.object.currentValue;
            this.fields = this.getFields(this.object);
        }
    }

    getFields(object: any): string[] {
        return Object.keys(object);
    }
 
}