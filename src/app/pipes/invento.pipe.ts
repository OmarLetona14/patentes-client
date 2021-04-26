import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invento'
})
export class InventoPipe implements PipeTransform {

  transform(value: any, arg: any): any  {
    const results = [];
    if(arg==''){return value}
    for (const invento of value){
      if ( invento.nombre_invento.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      invento.nombre_profesional.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      invento.nombre_pais.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        results.push(invento);
      }
    }
    return results;
  }
}
