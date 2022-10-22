import { Pipe, PipeTransform } from '@angular/core';
import { IContactDto } from './Services/phonebook.service';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: IContactDto[], searchText: string): any[] {
    debugger;
    if (!list) { return []; }
    if (!searchText) { return list; }

    searchText = searchText.toLowerCase();
    return list.filter( item => {
          return item.name.toLowerCase().includes(searchText);
        });
      }
}