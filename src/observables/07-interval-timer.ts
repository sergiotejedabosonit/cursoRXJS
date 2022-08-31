import { interval, timer } from 'rxjs';

const hoyen5 = new Date()
hoyen5.setSeconds(hoyen5.getSeconds()+5)

const observer = {
    next: value => console.log(value),
    complete: () => console.log('complete')   
}

const interval$ = interval(1000)
// const timer$ = timer(2000)
// const timer$ = timer(2000,1000)
const timer$ = timer(hoyen5)

console.log('init')
interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('finalized')