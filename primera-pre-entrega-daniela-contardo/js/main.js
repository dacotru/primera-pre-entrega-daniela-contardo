// Declaro la variable tarea
let tarea = [];


// Función para agregar una tarea
function agregarTarea() {
    let nombretarea;
    do {
        nombretarea = prompt("Ingrese el nombre de la tarea:");
        if (nombretarea === null) return; // Si el usuario cancela, salir de la función
        if (nombretarea.trim() === "") {
            alert("Por favor, ingrese un nombre válido para la tarea.");
        } else if (tarea.some(task => task.toLowerCase() === nombretarea.toLowerCase())) {
            alert("Esta tarea ya existe. Por favor, ingrese una tarea diferente.");
            nombretarea = ""; // Limpiar el nombre para que el bucle se repita y vuelva a solicitar una tarea
        }
    } while (nombretarea.trim() === "");

    // Convertir la primera letra a mayúscula y el resto a minúscula
    nombretarea = nombretarea.charAt(0).toUpperCase() + nombretarea.slice(1).toLowerCase();

    tarea.push(nombretarea);
    alert(`Tarea "${nombretarea}" agregada correctamente.`);
}

// Función para listar las tareas
function listaTareas() {
    if (tarea.length === 0) {
        alert('No hay tareas para mostrar.');
    } else {
        let lista = 'Lista de tareas:\n';
        for (let i = 0; i < tarea.length; i++) {
            lista += `${i + 1}. ${tarea[i]}\n`;
        }
        alert(lista);
    }
}

// Función para eliminar una tarea
function eliminaTarea() {
    if (tarea.length === 0) {
        alert('No hay tareas para eliminar.');
        return; // Salir de la función si no hay tareas
    }

    const index = parseInt(prompt('Ingrese el número de la tarea a eliminar (según la lista mostrada):'));

    if (isNaN(index) || index < 1 || index > tarea.length) {
        alert('Debe ingresar un número válido de tarea a eliminar.');
    } else {
        const deletedTask = tarea.splice(index - 1, 1);
        alert(`Tarea "${deletedTask[0]}" eliminada correctamente.`); // Mostrar el nombre de la tarea eliminada
        listaTareas(); // Mostrar la lista actualizada de tareas después de eliminar una tarea
    }
}

// Función principal para organizar las tareas
function organizador() {
    let option;
    while (option !== 'd') {
        option = prompt('Vamos a organizar tus tareas diarias.\nIngresa la letra de lo que quieras hacer:\na. Agregar tarea\nb. Listar tareas\nc. Eliminar tarea\nd. Salir').toLowerCase(); // Convertir la entrada del usuario a minúsculas

        switch(option) {
            case 'a':
                agregarTarea(); // Llamamos directamente a agregarTarea sin pasar parámetros
                break;
            case 'b':
                listaTareas();
                break;
            case 'c':
                eliminaTarea(); // No es necesario pasar un parámetro
                break;
            case 'd':
                alert('Saliendo del programa... ¡Que tengas un buen día!');
                break;
            default:
                alert('Opción inválida. Por favor, selecciona una opción válida.');
        }
    }
}

// Ejecutar la función principal
organizador();
