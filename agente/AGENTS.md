# Reglas de trabajo para GM-Foodz

Este archivo contiene los requisitos de implementación acordados para el proyecto. **Debe leerse antes de empezar cualquier tarea de implementación** y mantenerse actualizado a medida que se acuerden nuevas reglas.

## Requisitos

- Utilizar HTML semántico.
- Usar JavaScript únicamente para la lógica necesaria.
- No solicitar formularios para recoger información del usuario; la única entrada permitida será una letra: `J`, `A`, `R` o `Z`.
- Usar Tailwind CSS y priorizarlo sobre CSS local. Añadir CSS local solo cuando Tailwind no sea suficiente.
- Crear elementos reutilizables y evitar duplicar variables o mantener dos variables para el mismo dato.
- No utilizar frameworks.
- Priorizar la accesibilidad por encima de cualquier otro criterio.
- Escribir código completo, sencillo, rápido y eficiente.
- Actualizar `agente/progress.md` automáticamente después de cada cambio implementado. Cada entrada debe incluir el resumen de la implementación, los archivos modificados y cómo evolucionó la aplicación.
- Seguir siempre el flujo SDD descrito en `agente/rules/flow.md`, incluidas sus etapas de aprobación antes de crear o modificar archivos.
- Antes de trabajar en una funcionalidad, comprobar que la rama Git corresponde a ella y seguir `agente/rules/branch.md`. No implementar en una rama incorrecta ni cambiar de rama si hay cambios locales en riesgo.
