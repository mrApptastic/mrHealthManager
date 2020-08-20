
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { AbstractModelComponent } from './abstract-model.component';

@Component({
  selector: 'app-abstract-input',
  templateUrl: './abstract-input.component.html',
  styleUrls: ['./abstract-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AbstractInputComponent),
    multi: true,
  }],

})
export class AbstractInputComponent extends AbstractModelComponent<string> {
  @Input()
  readonly: boolean = false;

  @Input()
  required: boolean = false;

  @Input()
  placeholder: string = '';

  @Input()
  type: string = 'text';

  @Output()
  onBlur = new EventEmitter<void>();

  @Output()
  onFocus = new EventEmitter<void>();

  get inputReadonly(): boolean {
    return this.readonly || typeof this.readonly !== 'boolean';
  }

  get inputRequired(): boolean {
    return this.required || typeof this.required !== 'boolean';
  }
}


