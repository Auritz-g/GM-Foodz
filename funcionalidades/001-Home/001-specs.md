# 001 — Especificación de Home

## Estado

- Fase: especificación SDD.
- Rama de trabajo: `Home`.
- Implementación: no iniciada.

## Propósito

Definir el alcance de la página de inicio de GM-Foodz. La Home permite elegir el perfil familiar activo en el dispositivo cuando aún no hay uno seleccionado.

## Contexto existente

El `README.md` define seis perfiles familiares (`JA`, `AA`, `DnA`, `DJ`, `GA` y `AnT`). En un dispositivo sin perfil elegido, se mostrarán en un carrusel horizontal deslizable: el perfil centrado tendrá mayor protagonismo y los demás se verán más pequeños. Al seleccionar un perfil, este permanecerá activo en ese dispositivo hasta que se elija otro.

## Requisitos funcionales

1. Mostrar la pantalla de selección de perfil cuando el dispositivo no tenga un perfil activo.
2. Mostrar exactamente los seis perfiles documentados: `JA`, `AA`, `DnA`, `DJ`, `GA` y `AnT`.
3. Permitir recorrer los perfiles horizontalmente mediante un carrusel adaptable al móvil y a la tablet.
4. Destacar visualmente el perfil situado en el centro y mostrar los perfiles adyacentes a menor escala.
5. Permitir seleccionar un perfil y conservarlo como activo en ese dispositivo hasta que se seleccione otro.
6. Ofrecer modo oscuro y modo claro. El modo oscuro es el modo inicial predeterminado. La especificación no determina persistencia entre sesiones ni el mecanismo técnico para conservar la preferencia; deberán definirse en el plan o implementación si hacen falta.
7. En una tarjeta de usuario desplegable, representar el nombre/identificador del perfil con jerarquía de encabezado `H1`.

## Requisitos visuales

### Modo oscuro (predeterminado)

- Fondo de página: `#7D9CAA` (azul pastel medio).
- Fondo de las tarjetas: `#243847` (azul medianoche oscuro).
- Texto de las tarjetas: sans serif y blanco. El fondo de página `#7D9CAA` no permite contraste suficiente con blanco para texto normal, por lo que el texto fuera de las tarjetas puede usar un tono oscuro accesible sin cambiar el color de fondo.
- El identificador del usuario en la tarjeta desplegable usa jerarquía `H1`.

### Modo claro

- Debe existir como alternativa al modo oscuro.
- La paleta y los contrastes exactos quedan pendientes de definición en el plan de implementación, manteniendo legibilidad y accesibilidad.

### Adaptabilidad y accesibilidad

- Diseño mobile-first, funcional en móvil y tablet.
- Estructura semántica HTML y navegación/controles accesibles.
- Mantener contraste suficiente y no comunicar el perfil seleccionado solo mediante color.
- La jerarquía `H1` solicitada debe conservarse sin comprometer una estructura semántica coherente para la página.

## Tecnologías y restricciones

- Usar HTML semántico y JavaScript únicamente para la lógica necesaria.
- Sin frameworks.
- Usar Tailwind CSS y priorizar utilidades Tailwind frente a CSS local.
- Incorporar Tailwind mediante el CDN indicado por el usuario: `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`.
- Enlazar `styles.css`; añadir CSS local solo cuando Tailwind no sea suficiente.
- Priorizar accesibilidad, sencillez y reutilización.

## Fuera de alcance

- Stock, lista de la compra, recetas y menú.
- Autenticación o gestión de cuentas.
- Definir contenido adicional, imágenes, avatares o datos de los perfiles que no estén documentados.
- Implementar código en esta fase SDD.

## Criterios de aceptación

- La pantalla contempla los seis perfiles y el comportamiento de carrusel descrito.
- El perfil seleccionado queda activo para el dispositivo y se puede sustituir al elegir otro.
- Al no haber una preferencia de tema, se presenta el modo oscuro.
- Existe una alternativa de modo claro.
- El tema oscuro usa fondo `#7D9CAA`, tarjetas `#243847` y texto sans serif blanco.
- El identificador de perfil en la tarjeta desplegable tiene jerarquía `H1`.
- La experiencia funciona en móvil y tablet y contempla uso accesible.
- La aplicación será `responsive`en todas las pantallas con los breakpoints correspondientes encontrados en TailWind CSS.

## Pendientes para fases siguientes

- Acordar los valores exactos de color para el modo claro.
- Precisar qué significa el despliegue de las tarjetas (contenido y gesto/acción), si debe incluir algo más que el identificador.
- Definir cómo recordar la selección de perfil y la preferencia de tema, incluyendo si persisten entre sesiones.
- Definir detalles de controles, animación y comportamiento del carrusel antes de implementar.
