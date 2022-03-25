import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return Array.from(value).reverse().join("");
  }

}

//["H","e","l","l","o"]
//["o","l","l","e","H"]
//olleH
