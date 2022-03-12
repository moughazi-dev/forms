import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  dynamicForm!: FormGroup;
  value: any;
  copiedValue: any;
  pastedValue: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      filters: this.fb.array([])
    });
    // this.addFilterToFiltersFormArray();
  }

  createFilterGroup() {
    return this.fb.group({
      'hello': new FormControl(),
      'test': new FormControl(),
      'test2': new FormControl()
    });
  }

  addFilterToFiltersFormArray() {
    this.filtersFormArray.push(this.createFilterGroup());
  }

  get filtersFormArray() {
    return (<FormArray>this.dynamicForm.get('filters'));
  }

  onCopy($event: any) {
    this.copiedValue = $event;
  }

  onPaste($event: any, filter: any) {
    (filter as FormGroup).setValue(this.copiedValue);
    this.pastedValue = $event;

  }
}
