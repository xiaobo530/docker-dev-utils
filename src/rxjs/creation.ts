
import { EventEmitter } from 'events';
import * as rxjs from 'rxjs'
import { repeat, repeatWhen, take } from 'rxjs/operators';

// Run 
// ts-node .\src\rxjs\creation.ts 

console.log('hello rxjs.');

// of

rxjs.of(1, 2, 3).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('of done!');
    }
});

// range

rxjs.range(1, 10).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('range done!');
    }
});

// generate

rxjs.generate({
    initialState: 0,
    condition: x => x < 3,
    iterate: x => x + 1,
    resultSelector: x => x,
}).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('generate done!');
    }
});

// repeat

rxjs.of(1, 2, 3).pipe(
    repeat(3)
).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('repeat done!');
    }
});

// todo: repeatWhen

// from 

rxjs.from('abc').subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('from string done!');
    }
});

rxjs.from(['x', 'y', 'z']).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('from array done!');
    }
});

rxjs.from(rxjs.of('111')).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('from other observable done!');
    }
});

// fromPromise

rxjs.from(Promise.resolve(124)).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('from promise done!');
    }
});

// interval

rxjs.interval(1000).pipe(
    take(5)
).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('interval done!');
    }
});

// timer

rxjs.timer(1000).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('timer done!');
    }
});

// fromEvent

const emitter = new EventEmitter();
rxjs.fromEvent(emitter, 'bob').subscribe({
    next: (val) => { console.log(val); }    
});

emitter.emit('bob', 123);
emitter.emit('bob', 'abc from emitter');

// defer

rxjs.defer(() => rxjs.of('defer message!')).subscribe({
    next: (val) => { console.log(val); },
    complete: () => {
        console.log('defer done!');
    }
});