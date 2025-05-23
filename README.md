# Ventanas-de-Ideas
Un sistema de bloc de notas con Markdown y gestión de ventanas suena muy útil y es un proyecto interesante para desarrollar tus habilidades.

alcance del MVP:
- Ventana de Nota Individual:
  - Creación de una nueva ventana de nota.
  -  Área de texto para escribir contenido.
  -  Soporte para Markdown básico:
    - Negrita (**texto** o __texto__)
    - Cursiva (*texto* o _texto_)
    - Subrayado (Markdown no tiene un estándar, pero podemos simularlo o usar HTML si el editor lo permite. Ej: <u>texto</u>)
    - Encabezados H1, H2, H3 (# H1, ## H2, ### H3)
    - Listas de verificación (Checklists: - [ ] Tarea pendiente, - [x] Tarea completada)
  - Guardar el contenido de la nota en un archivo (ej. .md).
  - Cargar el contenido de una nota desde un archivo.
  - Al guardar, se almacena también la posición y tamaño actual de la ventana.
  - Al abrir, se restaura la posición y tamaño guardados.
  - Título de la ventana (podría ser el nombre del archivo o la primera línea del contenido).
- Ventana Principal (Gestor de Notas):
  - Listar todas las notas guardadas.
  - Mostrar para cada nota: Título (o nombre de archivo), y quizás un fragmento del contenido o fecha de modificación.
  - Permitir abrir una nota seleccionada (esto debería abrirla en su última posición y tamaño guardados).
  - Permitir crear una "Nueva Nota" desde aquí.
  - (Opcional para MVP, pero deseable) Un campo de búsqueda simple para filtrar la lista de notas por título/contenido.
