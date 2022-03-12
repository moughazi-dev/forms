import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenericControlComponent),  // replace name as appropriate
      multi: true
    }
  ],
  selector: 'app-generic-control',
  templateUrl: './generic-control.component.html',
  styleUrls: ['./generic-control.component.scss']
})
export class GenericControlComponent implements OnInit, ControlValueAccessor {
  @Input() form: any;

  private _value!: any;
  // Whatever name for this (myValue) you choose here, use it in the .html file.
  @Output() copyEvent = new EventEmitter();
  @Output() pasteEvent = new EventEmitter();
  public get myValue(): any { return this._value }
  public set myValue(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }


  writeValue(obj: any): void {
    this.myValue = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;

  }

  constructor() {
  }

  ngOnInit(): void {

  }

  onCopy() {

    this.copyEvent.emit(this.form.value);
  }

  onChange = (_: any) => { };

  registerOnTouched(fn: any): void {
  }

  onPaste() {
    this.pasteEvent.emit(this.form.value);
  }
}
