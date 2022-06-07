// defino mi clase Usuario
class Usuario {
  constructor(nombre, apellido, libros = [], mascostas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascostas = mascostas;
  }
  getFullName() {
    return `${this.apellido}, ${this.nombre}`;
  }
  addMascota(nombre) {
    this.mascostas.push(nombre);
  }
  countMascotas() {
    return this.mascostas.length;
  }
  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }
  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const u1 = new Usuario("Elon", "Musk");
u1.addMascota("Momo");
u1.addMascota("Perlo");
u1.addBook("El Señor de las Moscas", "William Golding");
u1.addBook("Fundación", "Isaac Asimov");
console.log(u1.countMascotas());
console.log(u1.getBookNames());
console.log(u1.getFullName());
