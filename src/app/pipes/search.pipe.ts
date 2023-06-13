import {Pipe, PipeTransform} from '@angular/core';
import { Task } from '../models/task-model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value: Task[], term: string) {
    if (!term) return value;
    return (value || []).filter(item => new RegExp(term, 'gi').test(item.title));
  }
}
