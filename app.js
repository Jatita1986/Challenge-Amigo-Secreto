// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombres = [];  

// Función para añadir nombres a la lista  
function agregarAmigo() {  
    const input = document.getElementById('amigo');  
    const nombre = input.value.trim();  
    const listaNombres = document.getElementById('listaNombres');  
    
    // Validación del nombre  
    if (!nombre || !isNaN(nombre)) {  
        alert("Por favor, ingresa un nombre válido.");  
        return;  
    }  
    
    // Añadir el nombre a la lista  
    if (nombres.length < 4) {  
        nombres.push(nombre);  
        const li = document.createElement('li');  
        li.textContent = nombre;  
        listaNombres.appendChild(li);  
        input.value = ''; // Limpiar el campo de entrada  

    } else {  
        alert("Ya has ingresado 4 nombres.");  
    }  
}  

// Función para sortear un amigo  
function sortearAmigo() {  
    if (nombres.length === 0) {  
        alert("No hay nombres para sortear.");  
        return;  
    }  
    
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);  
    const amigoSorteado = nombres[indiceAleatorio];  
    const resultado = document.getElementById('resultado');  
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;  
}  

document.getElementById('anadirButton').addEventListener('click', agregarAmigo);  
document.getElementById('sortearButton').addEventListener('click', sortearAmigo);  
