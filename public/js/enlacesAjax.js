// Importamos las funciones de ayuda
import { resaltarElemento, reordenarListaPorVotos } from './utilidades.js';

document.addEventListener("DOMContentLoaded", () => {

  // Seleccionamos TODOS los formularios de votación de enlaces
  document.querySelectorAll(".form-votar-enlace").forEach(form => {

    form.addEventListener("submit", async (event) => {

      // 1. Prevenimos la recarga de la página
      event.preventDefault(); 

      const li = form.closest('.enlace');

      try {
        // 2. Enviamos la petición POST con fetch
        const resp = await fetch(form.action, { method: "POST" });
        const data = await resp.json();

        if (data.ok) {
          // 3. Actualizamos la interfaz
          li.querySelector(".votos").textContent = data.enlace.votos;
          resaltarElemento(li);
          reordenarListaPorVotos("lista-enlaces");
        } else {
          alert("Error al votar: " + data.error);
        }
      } catch (error) {
        console.error("Error de conexión al votar:", error);
        alert("Error de conexión al votar por el enlace.");
      }
    });
  });
});