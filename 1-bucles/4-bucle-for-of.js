// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of

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

let grupoNuevoParaNormal = [];
let grupoNuevoForEach = [];
let grupoNuevoForOf = [];

//metodo por el for normal
console.log('Metodo del for tradicional');
for (let i = 0; i < gente.length; i++) {
    if(gente[i].edad>25)
    grupoNuevoParaNormal.push(gente[i])   
}
console.log(grupoNuevoParaNormal);

//por el metodo del for each
console.log('\nMetodo del for each');
gente.forEach(persona => {
    if(persona.edad>25)
    grupoNuevoForEach.push(persona); 
});
console.log(grupoNuevoForEach);

//metodo del for of
console.log('\nMetodo del for of');
for (let persona of gente) {
    if(persona.edad>25)
    grupoNuevoForOf.push(persona); 
}
console.log(grupoNuevoForOf);


