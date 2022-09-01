import { from, reduce, scan, map } from 'rxjs';
 
 const numeros = [1,2,3,4,5]

 const totalAcumulador = (acc, curr) =>  acc + curr

 // reduce

 from( numeros )
 .pipe(
    reduce( totalAcumulador, 0)
 )
 .subscribe( console.log )


 // scan

 from( numeros )
 .pipe(
    scan( totalAcumulador, 0)
 )
 .subscribe( console.log )

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean,
    token?: string;
    edad?: number
}
const user: Usuario[] = [
    {id: 'fher', autenticado: false, token: null},
    {id: 'fher', autenticado: true, token: 'acb'},
    {id: 'fher', autenticado: true, token: 'ABC123'}
]

const state$ = from( user ).pipe(
    scan<Usuario, Usuario>(
        (acc: Usuario, curr: Usuario) => {
            return { ...acc, ...curr }
        }, { edad: 33 }
    )
)

const id$ = state$.pipe(
    map( state => state.id)
)

id$.subscribe( console.log )