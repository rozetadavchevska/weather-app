import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToUtc'
})
export class UnixToUtcPipe implements PipeTransform {

  transform(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  }

}
