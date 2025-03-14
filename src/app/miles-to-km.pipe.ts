import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milesToKm'
})
export class MilesToKmPipe implements PipeTransform {

  transform(value: number, targetUnits: string): number {
    if(!value){
      return 0;
    }

    switch(targetUnits){
      case 'km':
        return value * 1.60934;
      case 'm':
          return value * 1.60934 * 1000;
      case 'cm':
          return value * 1.60934 * 1000 * 1000;
      default: 
        throw new Error('Target unit Not Supported.');

    }
    return value * 1.60934;
  }

}
