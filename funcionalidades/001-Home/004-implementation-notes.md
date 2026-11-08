# Notas temporales de implementación — Home

Este archivo explica los elementos implementados mientras la funcionalidad está en revisión. Se eliminará únicamente cuando el usuario apruebe la implementación.

## Archivos de aplicación

- `index.html`: punto de entrada en la raíz, elegido porque el proyecto no tenía aún estructura ni archivos de aplicación. Contendrá el esqueleto semántico, Tailwind CDN v4 y referencias a los recursos locales.
- `styles.css`: tokens de color de ambos temas y estilos que complementen Tailwind para el carrusel y sus estados adaptables.
- `app.js`: colección única de perfiles y estado mínimo de carrusel, perfil seleccionado, alternancia y persistencia de tema/perfil en el navegador.

## Criterios de diseño aplicados

- Modo oscuro predeterminado; fondo `#7D9CAA`; tarjetas `#243847`; texto blanco en las tarjetas oscuras.
- Modo claro alternativo con tonos elegidos para legibilidad; solo cambia mediante el control explícito, no por preferencia de sistema en la primera visita.
- Carrusel centrado con tarjetas adyacentes a menor escala, desplazamiento táctil/teclado y selección explícita.
- Cada tarjeta tiene un `h1` con solamente el identificador del perfil, sin datos inventados.
- El título principal de la página es `h1`; los `h1` de perfiles se encuentran dentro de cada tarjeta de selección.
- El azul de fondo `#7D9CAA` no alcanza contraste suficiente para texto blanco normal (2.91:1); los textos blancos aparecen sobre las tarjetas `#243847` (12.13:1), mientras que los textos fuera de tarjetas en modo oscuro se muestran en azul muy oscuro sobre el fondo pastel.
- Para preservar legibilidad y accesibilidad, se matiza la especificación de diseño: el texto blanco corresponde al contenido en tarjetas oscuras; el texto fuera de ellas usa un azul oscuro sobre el fondo pastel. El `h1` de página es oscuro sobre el fondo y el `h1` dentro de cada tarjeta de perfil es blanco.
