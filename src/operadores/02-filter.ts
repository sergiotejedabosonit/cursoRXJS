import { filter, range, Observable, from, fromEvent, map } from 'rxjs';


range(1,10).pipe(
  filter(( val, i ) => {
    console.log('index', i);
    return val % 2 === 1
  })
).subscribe( console.log )


interface Personaje {
    tipo: string;
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]

from( personajes ).pipe(
    filter( (resp ) =>{
        return resp.tipo === 'heroe'
    })
).subscribe(
    console.log    
)

const keyUp$ = fromEvent(document, 'keyup').pipe(
     map( event => event?.['code']),
     // este filter, cogera la respuesta del map de arriba, de ahi el encadenamiento de operadores
     filter( key => key === 'Enter')
)


keyUp$.subscribe( console.log )