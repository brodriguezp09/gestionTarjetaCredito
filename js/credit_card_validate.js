
let form = document.forms[0];
//Nombre tarjeta
let row0 = document.createElement('div');
row0.className = 'row';
let labelNombre = document.createElement('label');
labelNombre.innerHTML = 'Nombre de la tarjeta: ';
labelNombre.htmlFor = 'inputNombre';
let inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.id = 'inputNombre';
inputNombre.setAttribute('class', "inputInit")
row0.append(labelNombre, inputNombre);
form.append(row0);
//num tarjeta
let row1 = document.createElement('div');
row1.className = 'row';
let labelNumTarjeta = document.createElement('label');
labelNumTarjeta.innerHTML = 'Número de la tarjeta: ';
labelNumTarjeta.htmlFor = 'inputNumTarjeta';
let inputNumTarjeta = document.createElement('input');
inputNumTarjeta.type = 'text';
inputNumTarjeta.id = 'inputNumTarjeta';
inputNumTarjeta.setAttribute('class', "inputInit")
row1.append(labelNumTarjeta, inputNumTarjeta);
form.append(row1);
//vecha de vencimiento
let row2 = document.createElement('div');
row2.className = 'row';
let labelFecha = document.createElement('label');
labelFecha.innerHTML = 'Fecha de vencimiento: ';
labelFecha.htmlFor = 'inputFecha';
let inputFecha = document.createElement('input');
inputFecha.type = 'text';
inputFecha.id = 'inputFecha';
inputFecha.placeholder = 'MM/AA';
inputFecha.pattern = '(0[1-9]|1[0-2])\\/\\d{2}';
inputFecha.title = 'Formato MM/AA';
inputFecha.setAttribute('class', "inputInit")
row2.append(labelFecha, inputFecha);
form.append(row2);
//cvv
let row3 = document.createElement('div');
row3.className = 'row';
let labelCVV = document.createElement('label');
labelCVV.innerHTML = 'CVV: ';
labelCVV.htmlFor = 'inputCVV';
let inputCVV = document.createElement('input');
inputCVV.type = 'text';
inputCVV.id = 'inputFecha';
inputCVV.placeholder = '000';
inputCVV.setAttribute('class', "inputInit")
row3.append(labelCVV, inputCVV);
form.append(row3);
//boton
let row4 = document.createElement('div');
row4.className = 'row';
let boton = document.createElement('button');
boton.type = 'submit';
boton.disabled = true;
boton.innerHTML = 'Enviar';
row4.append(boton);
form.append(row4);

//add event listener
inputNombre.addEventListener('blur', (event) =>{ validarNombre(event.target)});
inputNumTarjeta.addEventListener('blur', (event) =>{ validarNumTarjeta(event.target)});
inputFecha.addEventListener('blur', (event) =>{ validarFecha(event.target)});
inputCVV.addEventListener('blur', (event) =>{ validarCVV(event.target)});

function changeInputStyle(input, resultRegex){
    if(!resultRegex){
        input.classList.add('input-error');
        input.classList.remove('input-ok');
    }else{
        input.classList.add('input-ok');
        input.classList.remove('input-error');
    }
}

function validarNombre(input){
    const regex = /^(MasterCard|Visa|American Express)$/;
    changeInputStyle(input, regex.test(input.value));
}

function validarNumTarjeta(event){
    if (inputNombre.value.length == 0){
        return 
    }
    let regex;
    switch(inputNombre.value){
        case 'MasterCard':
            regex = /^(5[1-5]\d{14})$/;
            break;
        case 'Visa':
            regex = /^(4\d{12}(?:\d{3})?)$/;
            break;
        case 'American Express':
            regex = /^(3[47]\d{13})$/;
            break;
        default:
            regex = /^/
    }

    changeInputStyle(event, regex.test(event.value));
    
}

function validarFecha(event){
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/
    changeInputStyle(event, regex.test(event.value));
}

function validarCVV(event){
    const regex = /^\d{3}$/
    changeInputStyle(event, regex.test(event.value));
}


