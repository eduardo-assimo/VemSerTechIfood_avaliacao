const horasAMPM = ['06:42:27PM', '06:30:27AM', '07:22:27PM', '12:42:27PM', '12:42:27AM'];

let horasCorretas = [];

mudaFormatoHoras(horasAMPM);

console.log(horasCorretas);

function mudaFormatoHoras(horasAMPM) {

    horasAMPM.forEach(function (hora, i) {

        const partes = hora.match(/(\d+):(\d+):(\d+)([APap][Mm])/);

        let horas = parseInt(partes[1], 10);
        const minutos = partes[2];
        const segundos = partes[3];
        const periodo = partes[4].toUpperCase();

        if (periodo === "PM" && horas !== 12) {
            horas += 12;
        } else if (periodo === "AM" && horas === 12) {
            horas = 0;
        }

        const hora24 = `${horas.toString().padStart(2, "0")}:${minutos}:${segundos}`;

        horasCorretas.push(hora24);
    });
}
