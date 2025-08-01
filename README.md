# Desarrollo-gil-de-un-M-dulo-Funcional-usando-SCRUM-XP

# Sistema de Registro de Usuarios

Este proyecto consiste en un módulo funcional desarrollado bajo metodologías ágiles (SCRUM + XP) que permite el registro, edición, visualización y gestión de usuarios a través de una interfaz web sencilla. El sistema está diseñado como una aplicación cliente que almacena datos localmente usando la API `localStorage`.

## Funcionalidades

- Formulario de registro de usuarios con los siguientes campos:
  - Nombres
  - Apellidos
  - Correo electrónico
  - Motivo del registro
  - Fecha y hora de agendación
  - Nivel de prioridad (Must Have, Should Have, Could Have)

- Interfaz administrativa (editor) protegida por contraseña que permite:
  - Ver todos los registros almacenados
  - Editar o eliminar registros
  - Marcar tareas como "cumplidas"
  - Filtrar visualmente por nivel de prioridad

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- localStorage (para persistencia de datos en el cliente)

## Instrucciones de uso

1. Abre el archivo `views/index.html` en tu navegador con live server o npm start o test.

2. Desde la página principal puedes:
- Acceder al formulario de registro
- Acceder al editor de registros (requiere contraseña: `1026`)


## Estado del proyecto

Este proyecto fue desarrollado como parte de una actividad académica para aplicar prácticas ágiles y principios de desarrollo orientado a pruebas en un entorno sencillo y funcional.


