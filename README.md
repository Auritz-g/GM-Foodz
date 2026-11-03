# GM-Foodz
Aplicación para móvil o tablet para la familia GM. 

Es un proyecto personal para una aplicación que puedan utilizar mis padres, mis hermanas y yo mismo.

La aplicación es sencilla. La idea es facilitar la vida en la cocina.

La aplicación va a ser mobile first, pero se usará tanto en móvil com en tablet.

La aplicación va a tener cuatro modos o funcionalidades

1. Stock 
1.1 Esta funcionalidad le permitirá al usuario:
1.1.1 Entender qué tiene en la nevera y en la casa
1.1.2 Recibir un aviso cuando quedan pocas unidades de un alimento o el usuario podría quedarse casi sin stock. El aviso inicia estos tres pasos distintos: 1) se emite el aviso, 2) el usuario revisa el stock del ingrediente y 3) si ve que no tiene o que necesita reponerlo, decide añadirlo a la lista de la compra.
1.1.3 Saber si hay suficientes ingredientes para poder realizar una receta
1.1.4 Puede añadir alimentos especificando unidades a la lista de la compra
1.1.5 El usuario puede actualizar manualmente los alimentos que tiene actualmente
1.1.6 Se puede filtrar el stock por receta que se va hacer (se muestra una lista de las recetas [la idea principal es que permita al usuario NOTA (SABER) si tiene los ingredientes para hacer la receta que quiere preparar]), tipo de producto (líquido, carne, pescado, congelado...)
1.2 El usuario tiene opción de (guardar) NOTA (SABER) donde se guardan los ingredientes o alimentos (nevera, congelador "x cajón", trastero...)

2. Lista de la compra
2.1 Permitirá al usuario tener una lista actualizada en todos los dispositivos (cuando un usuario añada algo en un dispositivo, en todos los dispositivos que haya iniciado sesión o en su perfil tendrá la lista actualizada [similar a como funciona la lista de usuarios de netflix y plataformas streaming])
2.2 Tiene posibilidad de añadir más allá de los ingredientes o alimentos que tenga en la nevera.
2.3 La lista de compra tendrá acceso a la api open food facts para poder ofrecer información nutricional
2.4 Al añadir un alimento a la lista, tiene la opción de abrir una ventana de "saber más" con la información de openfoodfacts adaptada al dispositivo.
Los puntos 2.3 y 2.4 serán cosa de un futuro
2.5 Antes de hacer la compra, el usuario puede editar las cantidades que necesita. Al realizarla, puede especificar si compró una cantidad distinta de la prevista.
2.6 La lista constará de checkbox que se podrán marcar como comprados.
2.7 Al final de la lista de la compra, el usuario puede subir una foto del ticket para finalizar la compra. La imagen no se resumirá automáticamente: servirá al usuario como referencia de lo comprado ese día. Como alternativa, puede seleccionar «Terminar la compra» sin subir una foto. La compra se considera realizada cuando el usuario elige una de estas opciones.
2.8 El usuario puede elegir si los ingredientes marcados como comprados se añaden automáticamente al stock actual o si prefiere añadirlos manualmente. En este último caso, aparecerán en modo «fantasma», como en la app de Alexa, y serán elegibles para añadirlos al stock.
2.9 Al finalizar la compra, esta quedará registrada en el historial con la fecha y hora, los productos marcados como comprados y, si se subió, la foto del ticket.

3. Recetas GM
3.1 Esto será un repositorio o directorio de todas las recetas de la familia.
3.1.1 Por ahora, solo será texto, pero más adelante intentarán añadirse videos 
3.2 Se pueden añadir nuevas recetas
3.2.1 Para estas nuevas recetas, el usuario puede redactarlas
3.2.2 El usuario puede subir una foto y mandará una aviso a todos los usuarios de la nueva adición al directorio al abrir la aplicación.
3.3 A la hora estar revisando una receta, el usuario puede elegir añadirla al menú
3.3.1 Al añadirla al menú, se abre la ventana de menú para poder seleccionar en qué día y si se va a hacer para comida o cena
3.3.2 Al añadirla al menú, la app revisa los ingredientes disponibles en toda la casa y avisará si faltan ingredientes, si quedarían justos o si quedarían pocos al terminar la receta. Estos términos se definirán según el porcentaje del stock disponible; el usuario podrá indicar qué porcentaje o cantidad en unidades le resulta cómoda.
3.3.3 Cuando el usuario prepare la receta, podrá marcarla como completada para dejar constancia y actualizar el stock. Si no lo hace en ese momento, podrá actualizar el stock manualmente más adelante, indicando que preparó la receta otro día de esa semana.
3.4 Las recetas incluyen:
3.4.1 Ingredientes (tipos, unidades, medidas, nombres e imágenes reutilizables). El mismo ingrediente específico será compartido por las cuatro funcionalidades. No habrá ingredientes genéricos: por ejemplo, la sal fina y la sal gruesa serán ingredientes distintos, cada uno reutilizable en stock, la lista de la compra, las recetas y el menú.
3.4.1.1 Si, después de calcular el stock restante tras preparar la receta, queda cerca de un 25% de un ingrediente, se emitirá un aviso de stock bajo. A partir de ese aviso, el usuario revisará el stock del ingrediente y decidirá si lo añade a la lista de la compra.
3.4.2 Modo de realización
3.4.3 Tiempos de preparación

4. Menú
4.1 La ventana de menú, muestra una tabla de 3 columnas y 8 filas
4.1.1 Las tablas se verán así

  Día de la semana | Comida | Cena |
  Lunes | x | x |
  Martes | x | x |
  Miercoles | x | x |
  Jueves | x | x |
  Viernes | x | x |
  Sabado | x | x |
  Domingo | x | x |

Las x al lado de los días son place holders para saber qué días no se han preparado el menú
La tabla será dinámica y se ajustará a cada pantalla
La tabla NO será como excel, será como un tarjeta. Sencilla, pero de aspecto visual agradable
4.2 El menú permite añadir recetas de la funcionalidad de recetas, revisar lo que tenemos de ingredientes o alimentos
4.3 Por ahora, el menú será semanal y rotativo: permitirá planificar también días de la semana siguiente (por ejemplo, desde un viernes se podrá elegir el lunes siguiente). Al avanzar, los días pasados dejarán de formar parte de la vista semanal. El día actual se resaltará con un color distinto para que el usuario pueda identificarlo.