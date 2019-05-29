let peso = 80;
let pesoIdeal = 75;
let semanasTranscurridas = 0;
while (peso > pesoIdeal){
    let perdidaDePesoXSemana = 2;
    semanasTranscurridas = semanasTranscurridas + 1;
    peso -= perdidaDePesoXSemana;
}
console.log("Total de semanas transcurridas en llegar a tu peso ideal: " + semanasTranscurridas);