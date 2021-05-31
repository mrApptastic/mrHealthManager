import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from '../abstract-input/abstract-input.component';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBoxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent extends AbstractInputComponent implements OnInit {
  @Input("dataSource") dataSource: any[];
  @Input("inputClass") inputClass: string;
  @Input("selectClass") selectClass: string;

  cid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  ngOnInit(): void {
    if (!this.inputClass) {
      this.inputClass = "";
    }

    if (!this.selectClass) {
      this.selectClass = "";
    }
  }
}
