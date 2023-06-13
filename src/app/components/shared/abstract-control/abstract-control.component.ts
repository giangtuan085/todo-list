import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
    template: ''
})
export abstract class AbstractControlComponent<T> implements ControlValueAccessor, OnInit {

    controlValue!: T;
    @Input() csPlaceHolder: string = '';
    @Input() csDisable: boolean = false;
    @Output() readonly csChange = new EventEmitter<any>();

    constructor() {

    }
    ngOnInit(): void {
    }

    onChangeFn: (val: T) => void = () => void 0;
    onTouchedFn: () => void = () => void 0;

    writeValue(obj: any): void {
        this.controlValue = obj;
    }

    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedFn = fn;
    }

    onModelChange(value: T) {
        this.onChangeFn(value);
        this.csChange.emit(value);
    }

    setDisabledState(isDisabled: boolean) {
        this.csDisable = isDisabled;
    }
}
