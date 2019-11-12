import { Injectable } from '@angular/core';
import { throws } from 'assert';

@Injectable({
    providedIn:'root'
})
export class ArithmaticService{
    
    constructor(){
    }

    add(a,b) {
        // try{
        //  if( typeof a !== "number" ){
        //      throw new Error('Number format exception')
        //  }

        //  if( typeof b !== "number" ){
        //     throw new Error('Number format exception')
        //  }
            
        // }catch(e){
        //     console.log("printing error log", e );
        // }
        console.log('add()')
        const _a = parseInt(a)
        const _b = parseInt(b)

        return _a + _b;
       
    }
    
    substract(a,b) {
        console.log('substract()')

        const _a = parseInt(a)
        const _b = parseInt(b)
        return _a - _b
    }

    divide(a,b) {
        console.log('divide()')
        const _a = parseInt(a)
        const _b = parseInt(b)
        return _a / _b
    }

    multiply(a,b) {
        console.log('multiply()')
        const _a = parseInt(a)
        const _b = parseInt(b)
        return _a * _b
    }

}