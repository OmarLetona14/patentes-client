import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryname'
})
export class CountrynamePipe implements PipeTransform {

  transform(value: any, arg: any): any  {
    const results = [];
    if(arg==''){return value}
    for (const country of value){
      if ( country.nombre_pais.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        results.push(country);
      }
    }
    return results;
  }

}
