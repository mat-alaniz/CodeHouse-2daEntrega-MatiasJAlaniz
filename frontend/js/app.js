class Contacto {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor() {
        this.arrayContacts = [];
    }

    agregarContacto(contacto) {
        this.arrayContacts.push(contacto)
        console.log("contacto Guardado exitosamente")
    }

    mostrarContactos() {
        console.log("--- Lista De contactos ---")
        this.arrayContacts.map((contacto, index) => {
            console.log("indice : " + index++, " nombre : " + contacto.nombre + " email : " + contacto.email + " telefono : " + contacto.telefono)
        })
    }

    buscarContactoPorNombre(nombre) {
        const resultado = this.arrayContacts.find((contacto) => {
            return contacto.nombre === nombre;
        })
        if (resultado) {
            console.log(resultado);
        } else {
            console.log("no se encontro el contacto")
        }
    }

    eliminarContacto(nombre) {
        const indiceDeContacto = this.arrayContacts.findIndex((contacto) => {
            return contacto.nombre === nombre;
        })
        if (indiceDeContacto != -1) {
            this.arrayContacts.splice(indiceDeContacto, 1)
            console.log("el contacto se elimino correctamente")
        } else {
            console.log("no se encontro el contacto");
        }
    }
}


const menu = () => {
    console.log("\n--- Menú ---");
    console.log("1. Agregar un contacto");
    console.log("2. Mostrar contactos");
    console.log("3. Eliminar un contacto");
    console.log("4. Buscar un contacto");
    console.log("5. Salir");
};


const miAgenda = new Agenda();

let opc;

do {
    menu();
    opc = prompt("ingrese la opción-1 Para ingresar contacto nuevo                          ingrese la opción-2 Para mostrar un contacto                               ingrese la opción-3 Para eliminar un contacto                              ingrese la opción-4 Para buscar un contacto                                ingrese la opción-5 Para salir!")
    switch (opc) {
        case "1":
            const nombre = prompt("Ingrese el nombre:")
            const email = prompt("Ingrese el email:")
            const telefono = prompt("Ingrese el teléfono:")
            if (nombre && email && telefono) {
                const nuevoContacto = new Contacto(nombre, email, telefono);
                miAgenda.agregarContacto(nuevoContacto);
            } else {
                console.log("Todos los campos son obligatorios.");
            }
            break;

        case "2":
            miAgenda.mostrarContactos();
            break;

        case "3":
            const nombreAEliminar = prompt("Ingrese el nombre del contacto a eliminar:").trim();
            if (nombreAEliminar) {
                miAgenda.eliminarContacto(nombreAEliminar);
            } else {
                console.log("El nombre no puede estar vacío.");
            }
            break;

        case "4":
            const nombreABuscar = prompt("Ingrese el nombre del contacto a buscar:").trim();
            if (nombreABuscar) {
                miAgenda.buscarContactoPorNombre(nombreABuscar);
            } else {
                console.log("El nombre no puede estar vacío.");
            }
            break;

        case "5":
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción inválida. Por favor, elige una opción del 1 al 5.");
    }
} while (opc !== "5");