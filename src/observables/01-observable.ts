import { Observable, Observer } from "rxjs";



// Observer creado para consumir los valores del observable, este observer es un conjunto de devoluciones de la llamada. Ha de tener tanto next, error y complete (aunque no es obligatorio que esten los 3 metodos.)
const observer: Observer<any> = {

    next: value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.log('complete')

}


// metodo CREATE => Depreciado
// const obs$ = Observable.create()
 
// Creacion de un observable, podemos darle como argumento un subscribe o bien un subscriber, en este caso estan dandole el argumento subscriber, a este usan el metodo Next para dar nuevos valores, por ultimo completa la subscripcion para que deje de mandar nuevos valores...
const obs$ = new Observable( subs => {
   subs.next('Hola')
   subs.next('Mundo')

   subs.next('Hola')
   subs.next('Mundo')

   // forzamos el error
  // const a = undefined
  // a.nombre = 'fernando'

   subs.complete()
    
   subs.next('Hola 1')
   subs.next('Mundo 1')
})

/** obs$.subscribe( 
valor => console.log(valor),
error => console.warn(error),
() => console.log('complete')
)
 */

obs$.subscribe( observer )

obs$.subscribe()