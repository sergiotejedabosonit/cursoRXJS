import { interval, Observable, Observer } from "rxjs";

// Observer creado para consumir los valores del observable, este observer es un conjunto de devoluciones de la llamada. Ha de tener tanto next, error y complete (aunque no es obligatorio que esten los 3 metodos.)
const observer: Observer<any> = {

    next: value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.log('complete')

}

// Creamos aqui un observable con type Number, donde vamos a hacer un intervalo, hay una funcion en rxjs para el intervalo, aun asi para hacer pruebas voy a hacerlo con SetInterval... En el intervalo vamos a sumar uno al valor del counter, se haran cada 1 seg.
const intervalos$ = new Observable<number>(subs => {

    let counter = 0;

    const interval = setInterval(() => {
        subs.next(counter++)
        console.log(counter)
    }, 1000)


    // Este setTimeout se crea para que dentro del subcriber podamos indicarle cuando llamar al metodo .complete() donde dejara de emitir valores como respuesta...
    setTimeout(() => {
        // si descomentamos la linea de abajo, cuando el valor llegue a 2 se parará, dado que este setTimeout se para a los 2.5 segundos y para llegar a 3 se necesitan 3 segundos. Con este setTimeout lo que hacemos es poner como completo el observable...
 //  subs.complete()
    }, 2500)

    // cuando acaban todos los setTimeout se ejecuta el return eliminando dichos intervalos
    return () => {
        // aqui es donde cancelamos el intervalo, con el clearInterval

        clearInterval(interval),
        console.log('intervalo destruido')
    }
}
)

// aqui le pasamos a cada observable un suscribe con el observer donde le vienen los 3 metodos: next, error, complete...
const subscription = intervalos$.subscribe(observer)
const subscription2 = intervalos$.subscribe(observer)

// agregamos la sub2 a la sub1 para que realicen el mismo proceso y podemos hacer un solo unsubscribe para ambos...
 subscription.add(subscription2)

setTimeout(() => {
   subscription.unsubscribe()
    // subscription2.unsubscribe() 
    console.log('final')
}, 3000)