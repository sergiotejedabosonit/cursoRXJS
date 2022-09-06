import { distinct, of, from, distinctUntilChanged } from 'rxjs';

 

 const numeros$ = of(1,'1',1,3,3,2,2,4,4,5,3,1).pipe(
   // distinct()
   distinctUntilChanged()
 )

 numeros$.subscribe( console.log )

 interface Personaje {
    nombre: string
 }

 const personajes: Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'x'},
    {nombre: 'Dr. Who'},
    {nombre: 'Zero'},
    {nombre: 'Megaman'},
    {nombre: 'x'},
    {nombre: 'Dr. Who'},
 ]

 from( personajes ).pipe(
    distinct( p => p.nombre )
 ).subscribe( console.log )