import { map, range, fromEvent, mapTo } from 'rxjs';



//  range(1,5).pipe(
//     map<number, number>(x => x*10)
//  ).subscribe( console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
const keyUpCode$ = keyUp$.pipe(
    map(event => event.code)
)


const keyupPluck$ = keyUp$.pipe(
    
    // pluck('target', 'baseURI')
    // al estar depreciado el pluck uso map como pone en la documentación
    map(x => x?.target?.['baseURI'] ) 
    
)

const keyupMapTo$ = keyUp$.pipe(
    mapTo('tecla presionada')
)
 

 


keyUpCode$.subscribe(val => console.log('map: ', val))

keyupPluck$.subscribe(val => console.log('pluck: ',val))

keyupMapTo$.subscribe(val => console.log('mapTo', val))