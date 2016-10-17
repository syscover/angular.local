import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'trans',
    template: '{{ translation }}'
})
export class TransComponent implements OnInit {

    translation: string = 'CCCCC';
    @Input key: string;

    constructor() { }

    ngOnInit() { }
}
