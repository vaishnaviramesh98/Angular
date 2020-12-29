import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoverEffect'
})
export class HoverEffectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
