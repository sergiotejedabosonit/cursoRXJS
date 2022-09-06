import { interval, fromEvent, takeUntil, skip, tap } from 'rxjs';


const boton = document.createElement('button');
boton.innerHTML = 'Detener TImer'

document.querySelector('body').append( boton)


const counter$ = interval(1000)
const clickbtn$ = fromEvent( boton, 'click').pipe(

    tap( () => console.log('tap antes de skip')),
    // con este skip hasta que no se haga click dos veces, no se parará el contador
    skip(1),
    tap( () => console.log('tap despues de skip'))
)

counter$
.pipe(
    takeUntil( clickbtn$ )
).subscribe({
    next: val => console.log('next: ',val),
    complete: () => console.log('complete')
    
})