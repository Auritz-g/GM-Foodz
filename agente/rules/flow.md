# Flujo de trabajo SDD

Trabajaremos en todo momento mediante el sistema SDD (Spec-Driven Development). El proceso será por etapas y no se implementará nada durante la preparación de especificaciones, planes y tareas.

## Paso 0: preparar el espacio SDD

Crear la carpeta SDD correspondiente a la funcionalidad acordada. Antes de crear o modificar archivos, se explicará al usuario qué se propone hacer y se esperará su aprobación.

## Paso 1: revisar el proyecto

Revisar el proyecto, su estructura y los archivos existentes, e identificar qué archivos y recursos son necesarios para trabajar en la funcionalidad acordada. En esta etapa no se implementa.

## Paso 2: especificación

Analizar qué existe y qué falta y crear `001-specs.md`, que describirá los requisitos y el alcance de la funcionalidad. No implementar nada todavía.

## Paso 3: plan de implementación

A partir de la especificación aprobada, crear `002-plan.md` con el plan de implementación. No implementar nada todavía.

## Paso 4: tareas

A partir del plan, crear `003-tasks.md` con las tareas necesarias para implementar la funcionalidad. Las tareas deben tener un tamaño suficiente para conservar el contexto, sin ser demasiado pequeñas. No implementar nada todavía.

## Paso 5: aprobación e implementación

Esperar la aprobación explícita del usuario antes de comenzar la implementación. Una vez aprobada, ejecutar las tareas en el orden definido en `003-tasks.md`. Completar cada tarea antes de iniciar la siguiente y continuar automáticamente, sin solicitar aprobación entre tareas.

Durante la implementación, crear un archivo temporal explicativo que registre qué se ha creado y el propósito de cada elemento implementado, para facilitar su comprensión. Una vez que el usuario apruebe la implementación, eliminar ese archivo temporal.

## Aprobación antes de cada fase

No crear archivos ni implementar cambios de forma automática. Antes de cada fase que implique crear o modificar archivos, explicar al usuario qué se va a hacer y esperar su visto bueno. La aprobación de una fase no implica la aprobación de la implementación; esta requiere aprobación explícita aparte.
