let arrelgoDeCalificaciones = [10,8];
let numeroTotalCalificaciones = arrelgoDeCalificaciones.length;
sumaCalificaciones = 0;
for(let numeroDeCalificacion = 0; numeroDeCalificacion < numeroTotalCalificaciones; numeroDeCalificacion++){
    sumaCalificaciones += arrelgoDeCalificaciones[numeroDeCalificacion];
}    
promedio = sumaCalificaciones / numeroTotalCalificaciones;
console.log(promedio);