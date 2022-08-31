import { from, of } from 'rxjs';
 
/**
 * OF: Toma argumentos y genera una secuencia
 * FROM: array, promise, iterale, observable
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('completed')
};

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador()

// for (let id of miIterable ) {
//     console.log(id)
// }

from( miIterable).subscribe(observer)

// const source$ = from([1,2,3,4,5])
// const source$ = of(...[1,2,3,4,5])
// const source$ = from('Fernando')
// const source$ = of('Fernando')

const source$ = from(
    fetch('http://api.github.com/users/klerith')
)

// source$.subscribe(resp=> {
//     console.log(resp);
//     // el ReadableStream tambien es una promesa
//     const dataResp = resp.json()
//     console.log(dataResp);
    
    
// })

// source$.subscribe( observer)
