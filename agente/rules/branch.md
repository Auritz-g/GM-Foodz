# Regla de ramas por funcionalidad

Antes de trabajar en una funcionalidad, comprobar la rama actual de Git y verificar que corresponde a esa funcionalidad. Cada cambio de producto debe hacerse en la rama de su área; no se implementarán cambios de una funcionalidad en otra rama.

## Ramas previstas

Las ramas de trabajo corresponden a estas áreas:

- Menú: `menu`
- Stock: `stock`
- Lista de compra: `lista-de-compra`
- Recetas: `recetas`

Se usan estos nombres como identificadores Git porque los espacios y las tildes no son adecuados para nombres de ramas. Cuando se creen las ramas base, se utilizarán para sus respectivas funcionalidades.

## Comprobación y cambio de rama

- Al iniciar trabajo en una funcionalidad, comprobar la rama activa.
- Si la rama no corresponde y la rama prevista ya existe, cambiar automáticamente a ella antes de continuar.
- Si la rama prevista aún no existe o no es posible cambiar a ella, no comenzar la implementación. Informar al usuario y esperar a que cree o cambie a la rama correspondiente, o a que autorice la creación de la rama.
- No cambiar de rama si hacerlo puede poner en riesgo cambios locales sin guardar; primero informar al usuario y detenerse.
- La revisión, especificación, planificación y preparación de tareas seguirán el flujo SDD. La implementación solo comenzará después de la aprobación explícita y en la rama correspondiente.

Actualmente existe una rama `Agente`; no se considerará una rama de funcionalidad salvo que el usuario lo indique expresamente.
