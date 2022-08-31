import { of } from "rxjs";


// const obs$ = of(1,2,3,4,5,6)
//  const obs$ = of (...[1,2,3,4,5,6],7,8,9)
 const obs$ = of<any>( [ 1, 2 ], { a: 1, b: 2 }, function(){}, true, Promise.resolve(true))

// al ser sincrono, se imprimira por orden de linea: init => subscribe( next => complete) => finish
console.log('Init')
obs$.subscribe( 
    next => console.log('next: ', next),
    null,
    () => console.log('terminamos secuencia')
    
    )
    console.log('finish');
     