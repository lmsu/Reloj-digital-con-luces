Aquí tenemos un ejemplo sencillo de un reloj digital con luces y degradado usando HTML, CSS y JavaScript.

1. HTML
html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reloj Digital con Efecto de Luces</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="reloj">
        <div id="tiempo"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>

2. CSS (styles.css)
css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    font-family: 'Arial', sans-serif;
}

.reloj {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

#tiempo {
    font-size: 3em;
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6);
}

.reloj:hover {
    box-shadow: 0 0 30px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.8);
    transition: box-shadow 0.3s ease;
}

3. JavaScript (script.js)
javascript

function actualizarReloj() {
    const tiempo = document.getElementById('tiempo');
    const fecha = new Date();

    let horas = fecha.getHours().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    let segundos = fecha.getSeconds().toString().padStart(2, '0');

    tiempo.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();  // Llamar una vez para evitar el retardo inicial.


Explicación:
HTML: Estructura simple del reloj, solo una caja que mostrará la hora.
CSS:
Fondo con un degradado azul y efecto de vidrio escarchado.
El reloj tiene un efecto de luces y sombras.
Efecto "hover" para hacer que las luces se intensifiquen al pasar el mouse.
JavaScript: Actualiza la hora cada segundo y formatea las horas, minutos y segundos para mostrarse siempre en formato 00:00:00.

Para crear una caja con el texto "lsalinas" y aplicar estilos CSS, debes añadir la estructura de la caja en el archivo HTML y luego aplicar los estilos en el archivo CSS. Te indicaré dónde colocar cada uno.

1. HTML (añade la caja dentro del body)
html
Copiar código
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reloj Digital con Efecto de Luces</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Caja con el texto lsalinas -->
    <div class="caja">
        lsalinas
    </div>

    <div class="reloj">
        <div id="tiempo"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>

2. CSS (añade los estilos de la caja en el archivo styles.css)
css

/* Estilos para la caja con el texto lsalinas */
.caja {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    background-color: #ff6347; /* Color de fondo */
    color: white; /* Color del texto */
    font-size: 2em;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    text-transform: uppercase; /* Poner el texto en mayúsculas */
    font-weight: bold;
}
Explicación:
HTML:
Añadí una div con la clase caja y el texto "lsalinas" dentro del cuerpo (body) del HTML. Este es el bloque que representará la caja.
CSS:
.caja: Definí estilos para la clase caja, donde:
Se establece un tamaño de 200x100 px.
El color de fondo es #ff6347 (tomato).
El texto es blanco, centrado tanto vertical como horizontalmente, y en mayúsculas.
Se aplica un efecto de sombra y bordes redondeado

Explicación de cambios:
Moví la div con clase caja dentro del div con clase reloj en el HTML. Ahora, la caja con el texto "lsalinas" aparecerá sobre el reloj.
En el CSS, no fue necesario realizar cambios. Sin embargo, en la clase .reloj, añadí flex-direction: column para que el contenido (la caja y el reloj) se alinee en columna, manteniendo una disposición ordenada.