const fechaLimite = new Date('2025-03-31T23:59:59').getTime();

function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaLimite - ahora;

    if (diferencia <= 0) {
        document.getElementById("cuentaRegresiva").innerHTML = "¡El sorteo ha finalizado!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("cuentaRegresiva").innerHTML = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();
