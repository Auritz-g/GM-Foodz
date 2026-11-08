# Decisiones de diseño

Este documento registra las decisiones visuales acordadas para las funcionalidades de GM-Foodz. Los detalles no fijados se definirán en la especificación y el plan correspondientes antes de implementar.

## Home — selección de perfil

### Temas

- La página ofrecerá modo oscuro y modo claro.
- El modo oscuro será el predeterminado.
- Fondo de página: `#7D9CAA` (azul pastel medio).
- Fondo de las tarjetas de usuario: `#243847` (azul medianoche oscuro).

### Modo oscuro

- Fondo de la página: `#7D9CAA` (azul pastel medio).
- Fondo de las tarjetas de usuario: `#243847` (azul medianoche oscuro).
- Texto de las tarjetas: fuente sans serif, color blanco. El texto fuera de las tarjetas puede ser azul oscuro para mantener contraste accesible sobre el fondo `#7D9CAA`.
- En las tarjetas de usuario desplegables, el nombre o identificador del usuario tendrá jerarquía de encabezado `H1`.

### Layout y tecnología

- Enfoque mobile-first, adaptable a móvil y tablet.
- La selección de perfiles se mostrará en un carrusel horizontal; el perfil central será el más prominente y los adyacentes tendrán menor escala.
- Se usará Tailwind CSS desde el CDN solicitado:

  ```html
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" type="text/css" href="styles.css">
  ```

- Se priorizarán las utilidades de Tailwind; `styles.css` se reservará para estilos no resueltos adecuadamente con Tailwind.
- La implementación mantendrá HTML semántico, accesibilidad y JavaScript limitado a la lógica necesaria.
