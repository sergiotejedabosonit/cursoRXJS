import { fromEvent } from "rxjs";

/*
Eventos del DOM
 */

const obs1$ = fromEvent<PointerEvent>(document, 'click')
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup')

const observer = {
    next: val => console.log('next: ', val)
}


// obs1$.subscribe( ev => {
//     console.log(ev.x);
//     console.log(ev.y);    
// })

obs1$.subscribe( ({x, y}) => {
    console.log(x, y);
    
})


obs2$.subscribe( event => console.log(event.key))