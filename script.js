
function mostrarCatalogo(categoria) {
    const catalogo = document.getElementById('catalogo-contenido');
    let contenido = '';

    if (categoria === 'marcos') {
        contenido = `
            <h3>Catálogo de Marcos</h3>
            <div class="galeria">
                <img src="img/lentes1.jpg" alt="Marco 1">
                <img src="img/lentes2.jpg" alt="Marco 2">
                <img src="img/lentes3.jpg" alt="Marco 3">
                <img src="img/lentes4.jpg" alt="Marco 4">
                <img src="img/lentes5.jpg" alt="Marco 5">
                <img src="img/lentes6.jpg" alt="Marco 6">
                <img src="img/lentes7.jpg" alt="Marco 7">
                <img src="img/lentes8.jpg" alt="Marco 8">
            </div>`;
    } else if (categoria === 'rayban') {
        contenido = `
            <h3>Gafas Ray-Ban Disponibles</h3>
            <div class="galeria">
                <img src="img/rayban1.jpg" alt="Ray-Ban 1">
                <img src="img/rayban2.jpg" alt="Ray-Ban 2">
                <img src="img/rayban3.jpg" alt="Ray-Ban 3">
                <img src="img/rayban4.jpg" alt="Ray-Ban 4">
                <img src="img/rayban5.jpg" alt="Ray-Ban 5">
                <img src="img/rayban6.jpg" alt="Ray-Ban 6">
                <img src="img/rayban7.jpg" alt="Ray-Ban 7">
                <img src="img/rayban8.jpg" alt="Ray-Ban 8">
                <img src="img/rayban9.jpg" alt="Ray-Ban 9">
            </div>`;
   } else if (categoria === 'servicios') {
    contenido = `
        <h3>Servicios Oftalmológicos</h3>
        <div class="servicios-listas">
            <div class="servicios-columna">
                <h4>Consulta Oftalmológica</h4>
                <ul>
                    <li>Examen ocular</li>
                    <li>Graduación de lentes</li>
                    <li>Fondo de ojo</li>
                    <li>Test de ojito</li>
                    <li>Extracción de cuerpos extraños oculares</li>
                </ul>
            </div>
            <div class="servicios-columna">
                <h4>Cirugías</h4>
                <ul>
                    <li>Pterigión</li>
                    <li>Catarata</li>
                    <li>Párpados</li>
                    <li>Urgencias oftalmológicas</li>
                </ul>
            </div>
        </div>
        <div class="servicios-imagenes">
            <div class="imagen-equipo">
                <img src="img/pac5.jpg" alt="Graduación visual">
                <p class="pie-imagen">Graduación visual</p>
            </div>
            <div class="imagen-equipo">
                <img src="img/pac6.jpg" alt="Examen de agudeza visual">
                <p class="pie-imagen">Examen de agudeza visual</p>
            </div>
            <div class="imagen-equipo">
                <img src="img/ciru.png" alt="Cirugía de párpados">
                <p class="pie-imagen">Cirugía de párpados, catarata o pterigion</p>
        </div>`;
}

    catalogo.innerHTML = contenido;
}

document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('active');
});

function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const texto = `Hola, soy ${nombre} y quiero consultar lo siguiente:\n${mensaje}`;
  const url = `https://wa.me/595984338271?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}
