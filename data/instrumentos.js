// Instrumentos (por confirmar cuáles se ofrecen hoy). icono: cuerdas|teclas|percusion|voz|viento|nota
const INSTRUMENTOS = [
 {id:"guitarra",nombre:"Guitarra",icono:"cuerdas"},{id:"bajo",nombre:"Bajo",icono:"cuerdas"},
 {id:"piano",nombre:"Piano y teclado",icono:"teclas"},{id:"bateria",nombre:"Batería",icono:"percusion"},
 {id:"canto",nombre:"Canto",icono:"voz"},{id:"violin",nombre:"Violín",icono:"cuerdas"},
 {id:"cello",nombre:"Cello",icono:"cuerdas"},{id:"ukelele",nombre:"Ukelele",icono:"cuerdas"},
 {id:"saxofon",nombre:"Saxofón",icono:"viento"},{id:"flauta",nombre:"Flauta transversal",icono:"viento"},
 {id:"clarinete",nombre:"Clarinete",icono:"viento"},{id:"solfeo",nombre:"Solfeo",icono:"nota"}
].map(i=>({edad:null,modalidad:null,...i})); // edad/modalidad null = POR CONFIRMAR
// Plan de estudios propuesto (en revisión con la academia)
const NIVELES = [
 {n:"Iniciación",txt:"Primeros pasos, lectura básica, técnica inicial y primeras piezas."},
 {n:"Básico",txt:"Solfeo, técnica, repertorio sencillo y primeros ensambles."},
 {n:"Intermedio",txt:"Lectura fluida, repertorio variado y tocar con otros."},
 {n:"Avanzado",txt:"Interpretación, preparación de recitales y, si aplica, de audiciones."}
];
const TALLERES = [ // ejemplos, por confirmar
 {n:"Taller de ensamble",dia:null,hora:null,edad:null,cupo:null},
 {n:"Taller de lectura musical",dia:null,hora:null,edad:null,cupo:null},
 {n:"Coro o banda",dia:null,hora:null,edad:null,cupo:null}
];
