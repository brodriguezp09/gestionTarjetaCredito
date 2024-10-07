# Gestión Tarjeta Credito
### 1. 📄 Introducción

En esta práctica, exploraremos el desarrollo de una página web utilizando tecnologías clave del front-end: **HTML**, **CSS** y **JavaScript**. El objetivo principal será crear un formulario para la validación de los datos de una tarjeta de crédito. A través de este ejercicio, aprenderemos cómo estructurar un formulario en HTML, darle estilo con CSS y aplicar validaciones en tiempo real mediante JavaScript.


### 2. 🎯 Objetivos

1. **Conocer y aplicar HTML**: Diseñar un formulario de entrada de datos con campos adecuados para la captura de información de una tarjeta de crédito.
   
2. **Utilizar CSS para el diseño**: Estilizar el formulario para lograr una interfaz amigable y coherente con prácticas de diseño modernas.

3. **Implementar validaciones en JavaScript**:
    - Validar el nombre de la tarjeta de crédito.
    - Validar el número de la tarjeta de crédito.
    - Validar la fecha de la tarjeta de crédito.
    - Validar el CVV de la tarjeta de crédito.

4. **Fomentar la interacción con el usuario**: Incorporar mensajes de error o éxito de forma dinámica para mejorar la experiencia de usuario.

5. **Mejorar habilidades de depuración**: Aprender a detectar y corregir errores a medida que se desarrollan las validaciones en JavaScript.

### 3. 📄 Funcionalidades Clave
1. **Crear elementos del formulario**: crear los elementos del formularios desde JS.
2. **El botón** deberá estar deshabilitado hasta que no se rellenen los datos de la tarjeta correctamente en base a expresiones regulares.

3. **El nombre** Validar los siguientes nombres como mínimo: MasterCard, Visa y American Express.

4. **El número** deberá validar los siguientes casos:
-	MasterCard:  16 dígitos, empiezan del 51 al 55, ambos incluidos.
-	Visa:  13 o 16 dígitos, empiezan por 
-	American Express: 15 dígitos, empiezan por 34 o 37.


5. **Fecha de vencimiento**, con un formato: MM/AA, validar que sólo sean números como: 02/27, 11/28

6. **CVV**: Sólo 3 dígitos.

7. Tras cada comprobación de los datos, el borde de cada input correspondiente, deberá mostrarse en verde o en rojo en función de si su contenido es aceptado. Sólo cuando todos los campos estén en verde, se deberá habilitar el botón.



