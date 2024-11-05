function actualizarReloj() {
    const tiempo = document.getElementById('tiempo');
    const fechaElemento = document.getElementById('fecha');
    const fecha = new Date();

    // Obtener la hora, minutos y segundos
    let horas = fecha.getHours().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    let segundos = fecha.getSeconds().toString().padStart(2, '0');

    // Obtener el día, mes y año
    let dia = fecha.getDate().toString().padStart(2, '0');
    let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan desde 0
    let año = fecha.getFullYear();

    // Actualizar el contenido de los elementos
    tiempo.textContent = `${horas}:${minutos}:${segundos}`;
    fechaElemento.textContent = `${dia}/${mes}/${año}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj();  // Llamar una vez para evitar el retardo inicial.
