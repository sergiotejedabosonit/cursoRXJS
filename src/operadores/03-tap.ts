import { map, range, tap } from "rxjs";

 


 const numeros$ = range(1,5)


 numeros$.pipe(
    tap( val => console.log( 'tap: ', val )
     ),
     map( x => x*10 ),
     tap( 
       { next: val => console.log('despues: ', val),
        complete: () => console.log('complete')}
        )
 ).subscribe( val => console.log('subcribe: ', val))