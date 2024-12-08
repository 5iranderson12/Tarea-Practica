<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cargar Datos</title>
</head>
<body>
  <h1>Usuarios</h1>
  <button id="cargarDatos">Cargar Datos</button>
  <div id="contenedorUsuarios"></div>

  <script>
    // Obtener el botón y el contenedor
    const botonCargar = document.getElementById('cargarDatos');
    const contenedorUsuarios = document.getElementById('contenedorUsuarios');

    // Función para cargar y mostrar los datos
    async function cargarDatos() {
      try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!respuesta.ok) {
          throw new Error(`Error en la respuesta: ${respuesta.status}`);
        }

        const usuarios = await respuesta.json();

        // Crear una lista <ul> para mostrar los nombres
        const lista = document.createElement('ul');
        usuarios.forEach(usuario => {
          const item = document.createElement('li');
          item.textContent = usuario.name;
          lista.appendChild(item);
        });

        // Limpiar contenedor y agregar la lista
        contenedorUsuarios.innerHTML = '';
        contenedorUsuarios.appendChild(lista);

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }

    // Agregar el evento al botón
    botonCargar.addEventListener('click', cargarDatos);
  </script>
</body>
</html>
