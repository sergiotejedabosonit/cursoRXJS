import { first, fromEvent, tap } from 'rxjs';



const click$ = fromEvent<PointerEvent>( document, 'click')

click$
.pipe(
    tap(({clientX, clientY}) => ({ clientX, clientY })
    ),
    first( event => event.clientX > 150 )
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
    })