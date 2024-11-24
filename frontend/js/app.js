class contacto {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}
class agenda {
    constructor() {
        this.arrayContacts = [];
    }
    agregarContacto(contacto) {
        this.arrayContacts.push(contacto)
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
    console.log("Menu")

    console.log("1 .- Agregar un contacto")
    console.log("2 .- Mostrar contactos")
    console.log("3 .- eliminar contactos")
    console.log("4 .- buscar contactos")
    console.log("5 .- salir")
    
}
//inicializar agenda
const miAgenda = new agenda();
const contacto1 = new contacto("Matias Usuriaga", "Matias@gmail.com", "1165877442")
const contacto2 = new contacto("Martin", "martin@gmail.com", "1545452552")
const contacto3 = new contacto("Juan", "Juan@gmail.com", "1234562222")
const contacto4 = new contacto("Nelson Gonzalez", "Nelson.Gonzalez@gmail.com", "1234562222")
const contacto5 = new contacto("Lorenzo Ortiz", "lorenzo@gmail.com", "124589623584")
miAgenda.agregarContacto(contacto1)
miAgenda.agregarContacto(contacto2)
miAgenda.agregarContacto(contacto3)
miAgenda.agregarContacto(contacto4)
miAgenda.agregarContacto(contacto5)

let opc;

do {
    menu()
    opc = prompt("ingrese la opción-1 Para ingresar contacto nuevo                          ingrese la opción-2 Para mostrar un contacto                               ingrese la opción-3 Para eliminar un contacto                              ingrese la opción-4 Para buscar un contacto                                ingrese la opción-5 Para salir!")
    switch (opc) {
        case "1":
            const nombre = prompt("Ingrese el nombre")
            const email = prompt("Ingrese el em@il")
            const telefono = prompt("Ingrese el telefóno")
            const nuevoContacto = new contacto(nombre, email, telefono)
            miAgenda.agregarContacto(nuevoContacto)
            break;
        case "2":
            miAgenda.mostrarContactos();
            break;
        case "3":
            const nombreAEliminar = prompt("Ingrese el nombre").toLowerCase();
            miAgenda.eliminarContacto(nombreAEliminar)
            break;
        case "4":
            const nombreABuscar = prompt("Ingrese el nombre").toLowerCase();
            miAgenda.buscarContactoPorNombre(nombreABuscar)
            break;
        default:
            break;
    }
} while (opc == "5");