# 003 — Tareas de implementación de Home

## Estado

- Fase: tareas SDD.
- Especificación y plan: aprobados.
- Colores oscuros registrados: fondo `#7D9CAA`, tarjetas `#243847`.
- Implementación: pendiente de aprobación explícita.

## Tareas

### 1. Confirmar la estructura de la aplicación

- Inspeccionar los archivos existentes en la rama antes de crear código.
- Confirmar el punto de entrada y la ubicación de HTML, CSS y JavaScript, preservando cualquier contenido existente.
- Resultado: decisión de archivos documentada en las notas temporales de implementación.

### 2. Crear la estructura semántica de Home

- Preparar el documento HTML con metadatos responsive.
- Incluir el CDN de Tailwind CSS v4 indicado y enlazar `styles.css`.
- Añadir regiones semánticas para el selector de perfiles, el estado de perfil activo y el control de tema.
- Resultado: estructura base accesible y lista para los estilos y la lógica.

### 3. Construir los perfiles y el carrusel

- Definir una única colección de datos con los seis identificadores acordados.
- Renderizar tarjetas reutilizables en carrusel horizontal adaptable a móvil y tablet.
- Dar jerarquía `H1` al identificador visible en cada tarjeta desplegable y no inventar información adicional.
- Hacer que seleccionar un perfil marque el elemento activo de forma visual y semántica.
- Resultado: carrusel navegable, seleccionado y accesible.

### 4. Implementar los temas visuales

- Aplicar modo oscuro de inicio con fondo `#7D9CAA`, tarjetas `#243847`, texto sans serif blanco.
- Añadir modo claro alternativo con tokens de color legibles y contraste verificado.
- Incorporar control accesible de alternancia de tema, foco visible y respeto a movimiento reducido si se usan transiciones.
- Resultado: ambos modos funcionan y el oscuro es el predeterminado.

### 5. Implementar estado y persistencia local

- Permitir cambiar el perfil activo y conservarlo en el dispositivo mediante `localStorage`.
- Permitir alternar y conservar el tema elegido mediante `localStorage`, manteniendo modo oscuro en primera visita.
- Manejar valores almacenados no válidos con valores predeterminados seguros.
- Resultado: estado restaurado tras recarga y posibilidad de seleccionar otro perfil.

### 6. Validar y documentar el resultado

- Revisar uso por teclado y nombres accesibles de controles.
- Comprobar carga inicial, selección y persistencia, alternancia de tema y adaptación a móvil/tablet.
- Revisar el contraste del texto blanco sobre el fondo `#7D9CAA`; si no alcanza el criterio de accesibilidad aplicable, mantener el color de fondo solicitado y aplicar un tratamiento legible local al texto (por ejemplo, fondo/contorno o texto oscuro solo donde sea necesario), documentando la decisión antes de modificar el requisito visual.
- Ejecutar validaciones disponibles y `git diff --check`.
- Actualizar `agente/progress.md` y mantener el archivo temporal explicativo hasta que el usuario apruebe la implementación.
- Resultado: Home implementada y lista para revisión, con notas y validaciones.

### 7. Cerrar la implementación aprobada

- Solo después de recibir aprobación del usuario sobre la implementación, eliminar `funcionalidades/001-Home/004-implementation-notes.md`.
- Resultado: documentación temporal retirada tras la revisión aprobada.

## Dependencias y límites

- Ejecutar las tareas en orden.
- No iniciar ninguna tarea de implementación hasta tener aprobación explícita para implementar, además de aprobación del plan/tareas.
- Si la estructura encontrada no coincide con la propuesta, detener la creación de archivos y ajustar el plan antes de continuar.
- No añadir perfiles, contenido, autenticación ni funcionalidades fuera del alcance de `001-specs.md`.
