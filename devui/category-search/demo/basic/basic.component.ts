import { Component } from '@angular/core';
import { demoData } from '../demo-data';

@Component({
  selector: 'd-basic',
  templateUrl: './basic.component.html',
})
export class BasicComponent {
  category = demoData.slice(0, -2);
  defaultSearchField = ['creator', 'status'];
  selectedTags = [
    {
      label: 'status',
      field: 'status',
      type: 'radio',
      filterKey: 'status',
      value: {
        status: 'developing',
      },
      options: [
        {
          status: 'new',
        },
        {
          status: 'developing',
        },
        {
          status: 'completed',
        },
        {
          status: 'under acceptance',
        },
        {
          status: 'closed-loop',
        },
      ],
    },
  ];
  finalSearchItems: any;
  finalSearchKey: any;
  rules = [
    { required: true },
    { whitespace: true },
    { minlength: 3 },
    { maxlength: 16 },
    { pattern: /^[a-zA-Z]+(\s+[a-zA-Z]+)*$/, message: 'The value cannot contain characters except uppercase and lowercase letters.' },
  ];

  searchEvent(event) {
    console.log('search items', event);
    this.finalSearchItems = event ? event.selectedTags : {};
    this.finalSearchKey = event ? event.searchKey : '';
  }

  createFilter(event) {
    console.log('create filter', event);
  }

  searchKeyChange($event) {
    console.log('search key change', $event);
  }

  selectedTagsChange(event) {
    console.log('selectedTagsChange', event);
  }

  clearAllEvent(event) {
    console.log('clear all', event);
  }

  toggleEvent(dropdown, tag) {
    if (!dropdown.isOpen && tag) {
      console.log(tag);
    }
  }
}
