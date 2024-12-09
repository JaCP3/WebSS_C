

    const boton = document.getElementById('boton-flotante');
    const contenedor = document.getElementById('contenedor-imagenes');
    let animacionActiva = false;

    boton.addEventListener('click', () => {
      if (!animacionActiva) {
        contenedor.classList.add('mostrar');
        contenedor.classList.remove('ocultar');
        boton.textContent = 'Volver';
        animacionActiva = true;
      } else {
        contenedor.classList.add('ocultar');
        contenedor.classList.remove('mostrar');
        boton.textContent = 'Mira nuestras entradas';
        animacionActiva = false;

        // Restablecer clases después de la animación de salida
        contenedor.addEventListener('transitionend', function resetClases() {
          contenedor.classList.remove('ocultar');
          contenedor.removeEventListener('transitionend', resetClases); // Evitar múltiples disparos
        });
      }
    });




    // Calcular el resumen de la compra
    const realizarCompra = document.getElementById('realizar-compra');
    const aplicarDescuento = document.getElementById('aplicar-descuento');
    const subtotalElement = document.getElementById('subtotal');
    const ivaElement = document.getElementById('iva');
    const totalElement = document.getElementById('total');
    let subtotal = 0;
    let descuentoAplicado = 0;

    function calcularResumen() {
      let iva = subtotal * 0.21;
      let total = subtotal + iva - descuentoAplicado;
      subtotalElement.textContent = `${subtotal}€`;
      ivaElement.textContent = `${iva.toFixed(2)}€`;
      totalElement.textContent = `${total.toFixed(2)}€`;
    }

    aplicarDescuento.addEventListener('click', function () {
      const codigoDescuento = document.getElementById('descuento').value;
      if (codigoDescuento === 'DESCUENTO10') {
        descuentoAplicado = subtotal * 0.10; // 10% de descuento
      } else {
        descuentoAplicado = 0;
      }
      calcularResumen();
    });

    realizarCompra.addEventListener('click', function () {
      // Aquí iría el proceso para finalizar la compra
      alert('Compra realizada');
    });

    // Suponiendo que se actualice el subtotal al seleccionar entradas (ejemplo básico)
    document.querySelectorAll('.formulario-compra input[name="cantidad"]').forEach(input => {
      input.addEventListener('change', function () {
        const precio = this.closest('.lado').classList.contains('izquierdo') ? 10 : 25;
        subtotal = this.value * precio;
        calcularResumen();
      });
    });


    const eventosData = {
      electronica: {
        titulo: "Fiesta de Inaguración",
        fecha: "Fecha: 7 de Diciembre",
        descripcion: "Disfruta con nosotros de nuestra inesperada inaguración al estilo Neon Party.",
      },
      disfraces: {
        titulo: "Fiesta de Navidad",
        fecha: "Fecha: 24 de Diciembre",
        descripcion: "Esta Navidad, ven y disfruta de nuestra inolvidable Candy Cane Party. ¡Dulces, risas y mucha diversión!",
        imagen: "./74e10f01ceaf4017481216630d79012a.jpg"

      },
      rock: {
        titulo: "Fiesta de Fin de Año",
        fecha: "31 de Diciembre",
        descripcion: "Di adiós al año con un toque de misterio en nuestra Masquerade New Year’s Party. ¡Una noche de máscaras y momentos inolvidables!",
        imagen: "./finA.jpeg"

      }
    };

    const tarjetasEventos = document.querySelectorAll(".tarjeta-evento");
    const detalleEvento = document.getElementById("detalle-evento");
    const tituloEvento = document.getElementById("titulo-evento");
    const fechaEvento = document.getElementById("fecha-evento");
    const descripcionEvento = document.getElementById("descripcion-evento");
    const botonCerrarDetalle = document.getElementById("cerrar-detalle");

    tarjetasEventos.forEach(tarjeta => {
      tarjeta.addEventListener("click", () => {
        const eventoId = tarjeta.dataset.evento;
        const eventoInfo = eventosData[eventoId];

        // Actualiza el contenido del detalle del evento
        tituloEvento.textContent = eventoInfo.titulo;
        fechaEvento.textContent = eventoInfo.fecha;
        descripcionEvento.textContent = eventoInfo.descripcion;

        // Actualiza la imagen del evento
        const imagenEvento = document.getElementById("imagen-evento");
        imagenEvento.src = eventoInfo.imagen;
        imagenEvento.alt = `Imagen de ${eventoInfo.titulo}`;

        // Muestra el detalle del evento
        detalleEvento.classList.add("detalle-mostrar");
      });
    });

    botonCerrarDetalle.addEventListener("click", () => {
      detalleEvento.classList.remove("detalle-mostrar");
    });

     window.addEventListener('load', function () {
       const popupAviso = document.getElementById('popup-aviso');
       const cerrarPopup = document.getElementById('cerrar-popup');

       // Mostrar el popup después de cargar la página
       setTimeout(() => {
         popupAviso.classList.add('mostrar');
       }, 500); // Aparece medio segundo después de cargar

       // Cerrar el popup al hacer clic en el botón
       cerrarPopup.addEventListener('click', () => {
        popupAviso.classList.remove('mostrar');
       });
     });


    const horarioContenedor = document.getElementById('horario-contenedor');
    const toggleHorarioBoton = document.getElementById('toggle-horario');
    const flechaHorario = document.getElementById('flecha-horario');

    toggleHorarioBoton.addEventListener('click', () => {
      const isOpen = horarioContenedor.classList.contains('horario-abierto');

      if (isOpen) {
        horarioContenedor.classList.remove('horario-abierto');
        horarioContenedor.classList.add('horario-cerrado');
        flechaHorario.src = 'horario.png'; // Imagen para cerrado
        flechaHorario.alt = 'Abrir horario';
      } else {
        horarioContenedor.classList.remove('horario-cerrado');
        horarioContenedor.classList.add('horario-abierto');
        flechaHorario.src = 'horario.png'; // Imagen para abierto
        flechaHorario.alt = 'Cerrar horario';
      }
    });

    const mapContenedor = document.getElementById('map-contenedor');
    const togglemapBoton = document.getElementById('toggle-map');
    const flechamap = document.getElementById('flecha-map');

    togglemapBoton.addEventListener('click', () => {
      const isOpen = mapContenedor.classList.contains('map-abierto');

      if (isOpen) {
        mapContenedor.classList.remove('map-abierto');
        mapContenedor.classList.add('map-cerrado');
        flechamap.src = 'map.png'; // Imagen para cerrado
        flechamap.alt = 'Abrir map';
      } else {
        mapContenedor.classList.remove('map-cerrado');
        mapContenedor.classList.add('map-abierto');
        flechamap.src = 'map.png'; // Imagen para abierto
        flechamap.alt = 'Cerrar map';
      }
    });

    document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.sub-container');
        container.classList.toggle('expanded');
        button.textContent = container.classList.contains('expanded') ? '▲' : '▼';
    });
});

