import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000)
// setInterval(() => {}, 3000)

const saludar = () => console.log('Hola mundo');
const saludar2 = ({nombre, apellido}) => console.log(`Hola ${nombre} ${apellido}`);

// asyncScheduler.schedule( saludar, 2000)
// asyncScheduler.schedule( saludar2, 3000, {"nombre": 'sergio', "apellido": 'Tejeda'})

// lo metemos dentro de una variable, para posteriormente en lineas mas abajo, poder hacer un unsubscribe y que de alguna merera acabe
const subscription = asyncScheduler.schedule( function(state){
    console.log('state, ', state);

    // con esto creariamos el intervalo, que hasta que no se cancele, va a seguir ejecutandose
    this.schedule( state + 1, 1000)
    
    
}, 2000, 0)

// setTimeout(() => {
//     subscription.unsubscribe()
// }, 6000);

// para que acabe en algun momento la subscription creada arriba, hay que hacer un unsubscribe
asyncScheduler.schedule( () => subscription.unsubscribe(), 6000)