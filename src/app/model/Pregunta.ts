export default interface Pregunta{
    id_pregunta:string;
    contenido?:string;
    id_encuesta?:string;
    nombre_encuesta?:string;
    id_respuesta_correcta?:string;
    id_respuesta?:string;
    respuesta?:string;
    inciso?:string;
}