/**
 * Resalta visualmente un elemento por un breve tiempo.
 * Se asume que existe una clase .highlight en el CSS (que añadiremos más tarde).
 * @param {HTMLElement} elemento - El elemento del DOM a resaltar.
 */
export function resaltarElemento(elemento) {
  if (!elemento) return;
  elemento.classList.add("highlight");
  // Quita el resaltado después de 600 milisegundos
  setTimeout(() => elemento.classList.remove("highlight"), 600);
}

/**
 * Reordena una lista <ul>/<li> en el DOM basándose en el texto de un elemento hijo con la
 * clase .votos.
 * @param {string} listaId - El ID del elemento <ul> (ej. 'lista-temas').
 */
export function reordenarListaPorVotos(listaId) {
  const lista = document.getElementById(listaId);
  if (!lista) return;

  // Convertir los elementos hijos (li) a un Array para poder usar sort()
  const items = Array.from(lista.children);

  // Algoritmo de ordenamiento: b - a para orden descendente (más votos primero)
  items.sort((a, b) => {
    const votosAElement = a.querySelector(".votos");
    const votosBElement = b.querySelector(".votos");

    // Usar 0 si el elemento de votos no se encuentra
    const votosA = votosAElement ? parseInt(votosAElement.textContent, 10) : 0;
    const votosB = votosBElement ? parseInt(votosBElement.textContent, 10) : 0;

    return votosB - votosA;
  });

  // Volver a insertar los elementos en el DOM en el nuevo orden
  items.forEach(item => lista.appendChild(item));
}