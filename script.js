// Función para alternar la visibilidad del menú
function toggleMenu() {
    const menu = document.querySelector('.menu_vertical');
    menu.classList.toggle('show');
  }
  
  // Función para filtrar las manzanas según el municipio seleccionado
  function filtrarManzanas() {
    const municipioSeleccionado = document.getElementById('selectMunicipio').value;
    const filasMunicipios = document.querySelectorAll('#municipiosTableBody tr');
  
    filasMunicipios.forEach(fila => {
      const municipioFila = fila.getAttribute('data-municipio');
      if (municipioSeleccionado === '' || municipioFila === municipioSeleccionado) {
        fila.style.display = ''; // Mostrar la fila
      } else {
        fila.style.display = 'none'; // Ocultar la fila
      }
    });
  }
  
  