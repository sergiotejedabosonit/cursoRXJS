import { interval, Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {

    next: value => console.log('next: ',value),
    error: error => console.warn(error),
    complete: () => console.log('complete')

}


const intervalo$ = new Observable<number>(subs => {

    const intervalId = setInterval(
        () => {
            subs.next(Math.random())
        }, 1000)

    return () => { clearInterval(intervalId),
    console.log('intervalo destruido');
     }
})

/**
 * 1- Casteo Multiple: muchas subscripciones van a estar sujetas a ese mismo Observable, y les daremos el mismo valor para todos los lugares donde se subscriban
 * 2- Tambien es un observer
 * 3- Se puede manejar el next, error y complete
 */

const subject$ = new Subject()

// seguimos emitiendo los numeros, pero estamos enlazado con el subject$
// al subscribirme al subject$ mas abajo, vamos a recibir el mismo numero dado que es la misma subscipcion
const subscription = intervalo$.subscribe( subject$ )

// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd));

// const sub2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) )


const subs1 = subject$.subscribe(observer);

const sub2 = subject$.subscribe( observer)

setTimeout(()=> {
    
     subject$.next(10)
     subject$.complete()
     subscription.unsubscribe()

}, 3500)