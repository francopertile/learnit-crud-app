# Learn It, Love It - Aplicación CRUD con Votaciones

¡Bienvenido a "Learn It, Love It"! Esta es una aplicación web completa construida desde cero con Node.js y Express, diseñada para gestionar una colección de temas de aprendizaje y sus enlaces asociados. Los usuarios pueden crear, leer, actualizar y eliminar tanto temas como enlaces, y también votar por sus favoritos para ordenarlos por popularidad.

Este proyecto fue desarrollado como un ejercicio práctico para dominar los fundamentos del desarrollo backend, la arquitectura MVC y la manipulación del DOM con JavaScript puro.

## ✨ Características Principales

* **CRUD Completo para Temas:** Crea, visualiza, edita y elimina temas de aprendizaje.
* **CRUD Completo para Enlaces:** Dentro de cada tema, gestiona una lista de enlaces de interés.
* **Sistema de Votación Asíncrono:** Vota por temas y enlaces sin recargar la página gracias al uso de la API Fetch de JavaScript.
* **Ordenamiento Dinámico:** Los temas y enlaces se reordenan automáticamente en la interfaz según su popularidad (número de votos).
* **Arquitectura MVC:** Código organizado, mantenible y escalable siguiendo el patrón Modelo-Vista-Controlador.

## 🛠️ Tecnologías Utilizadas

* **Backend:** Node.js, Express.js
* **Base de Datos:** SQLite (con el paquete `better-sqlite3`)
* **Frontend:** JavaScript Puro (Vanilla JS), EJS (Embedded JavaScript Templates) para el renderizado de vistas.
* **Control de Versiones:** Git y GitHub.

## 🚀 Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### **Prerrequisitos**

* Tener instalado [Node.js](https://nodejs.org/) (que incluye npm).

### **Instalación y Ejecución**

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/francopertile/learnit-crud-app.git](https://github.com/francopertile/learnit-crud-app.git)
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd learnit-crud-app
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Inicializa y puebla la base de datos:**
    Este comando ejecutará el script `seed.js` para crear las tablas y añadir datos de ejemplo.
    ```bash
    npm run seed
    ```

5.  **Inicia el servidor:**
    ```bash
    node app.js
    ```

6.  ¡Listo! Abre tu navegador y visita [http://localhost:3000](http://localhost:3000).