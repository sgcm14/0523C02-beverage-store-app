Mesa de trabajo clase 16

En esta ejercitación construiremos nuestro propio e-commerce de bebidas. 🍹 

Obviamente, construir una aplicación entera desde cero nos llevaría mucho tiempo, por lo que hoy nos centraremos solamente en el enrutado de la misma. Utilizaremos React Router para implementar la navegación entre diferentes URL, implementando rutas dinámicas, anidadas e incluso haciendo uso de la history API. ¡Comencemos!

Ejercitación individual 👧

Nivel de complejidad: intermedio      

Objetivo

En esta actividad trabajaremos en la implementación del routing a nuestra aplicación de React con React Router.

Instrucciones y requisitos de entrega

Primero, clonamos el proyecto e instalamos las dependencias.

Deberemos envolver con BrowserRouter nuestra App y definir las siguientes rutas: 

/: (página de inicio) donde se deberá mostrar una grilla con todas las bebidas disponibles que devuelve la API.

/contacto: donde se mostrará la información de contacto de la empresa.

/beer/:id: donde se mostrará en detalle la información de una cerveza específica, buscada por su ID. 

Para la implementación de los Links deberemos crear un componente navbar y renderizarlo únicamente en una ruta padre. 

src > Beer.jsx

Agregar un botón de “volver atrás” que implemente el Hook useNavigate() y nos devuelva a la página anterior en la que estábamos posicionados. 

Los detalles de entrega de esta actividad serán presentados por el equipo docente.

Consideraciones

💡 En el repo base ya tienen un template con todos los componentes creados y estilados. Solamente deberán enfocarse en la lógica asociada al enrutado.

Te dejamos el código base para que puedas comenzar a trabajar 
en el siguiente enlace.
