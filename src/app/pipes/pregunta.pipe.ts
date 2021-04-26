import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pregunta'
})
export class PreguntaPipe implements PipeTransform {

  transform(value: any, arg: any): any  {
    const results = [];
    if(arg==''){return value}
    for (const pregunta of value){
      if ( pregunta.contenido.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
      pregunta.nombre_encuesta.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        results.push(pregunta);
      }
    }
    return results;
  }

}
