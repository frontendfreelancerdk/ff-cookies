import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'ff-tab',
  templateUrl: './ff-tab.component.html',
  styleUrls: ['./ff-tab.component.scss']
})
export class FFTabComponent {
  @Input('tabTitle') title: string;
  private _active: boolean = false;

  get active(): boolean {
    return this._active;
  }

  @Input() set active(val: boolean) {
    this._active = val;
    this.cdr.detectChanges();
  };

  @Input() tabContent: TemplateRef<ElementRef>;
  @Input() required = false;
  @Output() selected = new EventEmitter<any>();
  checked = false;

  constructor(private cdr: ChangeDetectorRef) {
  }
}
