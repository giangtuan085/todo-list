import { Component, OnInit, forwardRef } from '@angular/core';
import { AbstractControlComponent } from '../abstract-control/abstract-control.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],

})
export class CheckboxComponent extends AbstractControlComponent<number[]> implements OnInit, ControlValueAccessor {
}
