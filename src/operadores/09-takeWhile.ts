import { fromEvent, map, takeWhile } from 'rxjs';



const click$ = fromEvent<PointerEvent >(document, 'click')
.pipe(
    map(({ x, y }) => ({x, y})),

    // al estar en true, se imprime el ultimo elemento aunque sea mayor que 150, en caso de no tenerlo, simplemente se completaria...

    takeWhile(({x}) => x < 150, true)
)

click$.subscribe({
    next: val => console.log(val),
    complete: () => console.log('complete')       
})