# 002 — Plan de implementación de Home

## Estado

- Fase: plan SDD.
- Rama prevista: `Home`.
- Aprobación de especificación: recibida.
- Implementación: no iniciada; requiere aprobación explícita independiente.

## Objetivo

Implementar una página Home mobile-first para seleccionar uno de los seis perfiles familiares, con carrusel horizontal, preferencia de perfil almacenada por dispositivo, tema oscuro predeterminado y opción de tema claro.

## Archivos previstos

- `index.html`: estructura semántica de la aplicación, metadatos, CDN Tailwind v4, enlace a `styles.css` y contenedor de la experiencia Home.
- `styles.css`: estilos adicionales imprescindibles para comportamiento visual no resuelto con Tailwind (por ejemplo, perspectiva/escala del carrusel, si se confirma que las utilidades no bastan).
- `app.js`: estado y lógica mínima para tema, carrusel y selección de perfil.
- `funcionalidades/001-Home/004-implementation-notes.md`: archivo temporal de explicación de los elementos implementados, que se eliminará una vez que el usuario apruebe la implementación.
- `agente/progress.md`: registro de evolución tras cambios implementados.

No se crearán los archivos de código antes de completar las fases SDD y recibir aprobación explícita para implementar. Se confirmará la estructura concreta del proyecto antes de crear los archivos de aplicación, para evitar sobrescribir o duplicar puntos de entrada.

## Decisiones técnicas propuestas

1. Mantener la solución sin frameworks, con HTML semántico, Tailwind CDN y JavaScript nativo.
2. Representar los perfiles mediante una única colección de datos en JavaScript, sin duplicar contenido.
3. Modelar los temas con atributos/clases en el documento y variables CSS para que los dos esquemas sean consistentes. En primera visita se utilizará modo oscuro; el control de tema permitirá alternar entre oscuro y claro.
4. Guardar el perfil activo y el tema en `localStorage` para conservarlos en el dispositivo entre sesiones; mostrar la selección activa al cargar y permitir seleccionar otro perfil. Esta es una decisión propuesta para resolver el requisito de persistencia y deberá conservarse solo si se considera compatible con el uso esperado.
5. Preferir un carrusel horizontal nativo, desplazable con touch y teclado, con controles accesibles cuando sean necesarios. Indicar el elemento activo de forma semántica además del tratamiento visual; evitar movimiento automático.
6. Usar botones con nombre accesible para seleccionar un perfil y para alternar el tema. Respetar `prefers-reduced-motion` si se implementa transición.
7. Colocar cada identificador de perfil en un `h1` dentro de su tarjeta desplegable, verificando que la jerarquía general de encabezados de la página siga siendo coherente.
8. Definir tokens de color para ambos modos y revisarlos por contraste. En modo oscuro se usarán exactamente `#7D9CAA` para el fondo de página, `#243847` para las tarjetas y texto blanco; los tonos exactos del modo claro se escogerán para asegurar legibilidad.

## Secuencia propuesta

1. Confirmar el plan y cerrar pendientes de comportamiento visual relevantes.
2. Inspeccionar el contenido actualizado de la rama y elegir o confirmar la raíz de aplicación existente; mantener intacta la documentación.
3. Crear el esqueleto semántico y los enlaces de estilos y script.
4. Añadir controles de tema y tarjetas para los seis perfiles con estructura reutilizable.
5. Implementar desplazamiento/centrado del carrusel, selección de perfil y persistencia local.
6. Aplicar temas oscuro/claro y diseño adaptable, incluyendo estados de foco y contraste.
7. Probar aceptación manual en viewport móvil y tablet, teclado, carga inicial, selección y alternancia de tema; comprobar `git diff --check` y errores.
8. Actualizar el registro de progreso y mantener notas temporales hasta que el usuario apruebe la implementación; entonces eliminarlas.

## Riesgos y consideraciones

- `localStorage` implica persistencia local solo en ese navegador/dispositivo; no sincroniza perfiles entre dispositivos.
- El significado de “tarjeta desplegable” no está definido más allá de mostrar el identificador como `H1`. No se inventarán datos adicionales; se usará el comportamiento mínimo necesario, y cualquier expansión adicional requerirá aclaración.
- Los colores oscuros acordados son `#7D9CAA` y `#243847`; se revisará el contraste del texto blanco, especialmente sobre el fondo de página, y se ajustará el tratamiento del texto si fuese necesario sin cambiar los fondos acordados.
- Tailwind Browser CDN es apropiado según la solicitud del proyecto; para un despliegue productivo podría recomendarse compilación, pero no se sustituirá el CDN acordado.
- La implementación no empieza con la aprobación de este plan: requiere una autorización explícita posterior conforme a SDD.

## Validación de salida

La implementación estará lista para revisión cuando se cumplan los criterios de aceptación de `001-specs.md`, se haya comprobado su uso con teclado y adaptación móvil/tablet, y no existan errores de validación disponibles en el entorno.
