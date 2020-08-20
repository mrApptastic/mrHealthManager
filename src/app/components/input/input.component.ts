import { Component, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InputComponent extends AbstractInputComponent {
  cid = Math.ceil(Math.random() * 99999);

  @Input()
  label: string = '';

  get asterix(): string {
    return this.inputRequired ? ' *' : '';
  }

}
