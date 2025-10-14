// Importamos las funciones de ayuda que creamos
import { resaltarElemento, reordenarListaPorVotos } from './utilidades.js';

// Nos aseguramos de que el script se ejecute solo cuando todo el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {

  // Seleccionamos TODOS los formularios de votación de temas
  document.querySelectorAll(".form-votar-tema").forEach(form => {

    // Añadimos un "escuchador" para el evento 'submit' (cuando se envía el form)
    form.addEventListener("submit", async (event) => {

      // 1. Prevenimos el comportamiento por defecto (que recargaría la página)
      event.preventDefault(); 

      const li = form.closest('.tema'); // Encontramos el <li> padre del formulario

      try {
        // 2. Enviamos la petición POST usando fetch a la URL del 'action' del formulario
        const resp = await fetch(form.action, { method: "POST" });
        const data = await resp.json(); // Convertimos la respuesta JSON del servidor

        if (data.ok) {
          // 3. Si todo fue bien, actualizamos la interfaz
          li.querySelector(".votos").textContent = data.votos; // Actualizamos el contador
          resaltarElemento(li);                             // Damos feedback visual
          reordenarListaPorVotos("lista-temas");            // Reordenamos la lista
        } else {
          alert("Error al votar: " + data.error);
        }
      } catch (error) {
        console.error("Error de conexión al votar:", error);
        alert("Error de conexión al votar por el tema.");
      }
    });
  });
});