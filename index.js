 function Entendiste (entendio) {
     if (entendio === 'si'){
     console.log("Que bueno");
 } else {
     console.log("Que bobo")
 }}

 Entendiste('no')

// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'];
// console.log(nombres);


// - **>**: mayor que
// - <: menor que
// - >=: mayor o igual
// - <=: menor o igual
// - ==: igualdad
// - !=:  diferente
// - =: asignacion

    // &&: and
    // ||: or


var person = {
    nombre: "Lucas",
    edad: 14,
    budget: 1000,
    address: {
        country: "Venezuela",
        state: "Zulia"
    },
    estudios : [
        'programador', 
        'Ingeniero']
    }

    if (person.edad < 18 || person.budget < 1000) {
        console.log("Usted no pasa")
    } else {
        console.log("Pase")
    }

console.log(person);


var mascota = {
    animal: "perro",
    raza: "Pastor aleman",
    amistoso: true,
    dueno: "Maximo Jaramillo",
    info: function () {
      console.log("Mi Perro es un " + this.raza);
    },
  };
  
  mascota.info();


  if (false + false) {
    console.log("Se cumplio la condicion")
  }

  var miFuncion = (num1, num2) => {
        return num1 + num2
  }

  console.log(miFuncion(19, 3))

