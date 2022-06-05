/**
 * Crea un nuevo fichero JS que contenga las siguientes líneas

- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos
 */

class Estudiante {
    constructor(nombre, lista) {
        this.nombre = nombre;
        this.lista = ["JavaScript", "HTML", "CSS"];

    }

    obtenDatos() {
        const asignaturas = {
            nombre: this.nombre,
            asignaturas: this.lista
        }

        return asignaturas;
    }
}

const estudiante = new Estudiante("Juan");
console.log(estudiante.obtenDatos());