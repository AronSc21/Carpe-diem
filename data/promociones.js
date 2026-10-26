// PROMOCIONES (ejemplos, no reales). activa:false o fecha vencida => no se muestra.
// vence: "AAAA-MM-DD" (hasta el final de ese día). contador:true muestra cuenta regresiva.
const PROMOCIONES = [
 {id:1,activa:true,titulo:"Clase muestra gratuita",txt:"Prueba tu instrumento antes de inscribirte.",vence:"2026-12-31",contador:true},
 {id:2,activa:true,titulo:"Descuento por hermanos o familiares",txt:"Precio especial al inscribir a más de un integrante.",vence:"2027-01-31",contador:false},
 {id:3,activa:true,titulo:"Cursos intensivos de vacaciones",txt:"Aprende más en pocas semanas.",vence:"2026-12-20",contador:true},
 {id:4,activa:false,titulo:"Paquete de dos instrumentos",txt:"Desactivada: no se muestra.",vence:"2026-12-31",contador:false},
 {id:5,activa:true,titulo:"Inscripción sin costo",txt:"Vencida: no se muestra.",vence:"2026-09-30",contador:false}
];
