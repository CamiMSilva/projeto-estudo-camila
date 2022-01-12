import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inc',
  pure: false, //se for usar push que não altera a ref do array
})
export class IncPipe implements PipeTransform {

  transform(array: number[]): number[] {
    return array.map((n) => n+1);
  }

}
