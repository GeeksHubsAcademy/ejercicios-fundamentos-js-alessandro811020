// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
// y muéstralo por consola.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]

let grupoFiltradoForClasico = [];
let grupoFiltradoForEach = [];
let grupoFiltradoForOf = [];
//se haran los tres for para iterar y practicar de todas las maneras
//for tradicional
for (let i = 0; i < gente.length; i++) {
    if (gente[i].nombre.charAt(0)==='J') {
        grupoFiltradoForClasico.push(gente[i]);
    }
}
console.log(grupoFiltradoForClasico);

//for each
console.log('\nPor el for each');
gente.forEach(persona => {
    if (persona.nombre.charAt(0)==='J') {
        grupoFiltradoForEach.push(persona);
    }
});
console.log(grupoFiltradoForEach);

//for each
console.log('\nPor el for Of');
for (let persona of gente) {
    if (persona.nombre.charAt(0)==='J') {
        grupoFiltradoForOf.push(persona);
    }
}
console.log(grupoFiltradoForOf);

