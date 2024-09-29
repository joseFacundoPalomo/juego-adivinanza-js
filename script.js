let nroRandom = Math.floor(Math.random()*100);
let inputValor =  document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let campoContador = document.getElementById('contador');
let contador = 0;

function comprobar(){
    let nroIngresado = inputValor.value;
    if(nroIngresado == nroRandom){
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número correcto!';
        mensaje.style.color = 'green'; 
        numeroEntrada.disabled = true; 
        contador = contador+1;

        campoContador.textContent = contador;
        
    }
    else{
        if(nroIngresado > nroRandom){
            mensaje.textContent = 'El número es menor. Intenta de nuevo.';
            mensaje.style.color = 'red';
            contador.value =+ 1;
            contador = contador+1;  
            
            campoContador.textContent = contador;
        }
        else{
            mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
            mensaje.style.color = 'red';   
            contador.value =+ 1;
            contador = contador+1;  
            
            campoContador.textContent = contador;
        }
    }
}