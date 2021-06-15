import {Invoice} from './classes/invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'
import {ListTemplate} from './classes/ListTemplate.js'

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi','web work',250)
docTwo = new Invoice('mario','plumbing work',200)

let docs:HasFormatter[] = [];
docs.push(docOne)
docs.push(docTwo)


interface IsPerson {
    name: string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
}

const me: IsPerson = {
    name:"kwanghee",
    age:27,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount:number):number {
        console.log('I spent ',amount)
        return amount
    }
}

//ts는 개발중에 document에 대해 모른다
// const anchor = document.querySelector('a')!; 

// console.log(anchor.href);
// anchor.

// const form = document.querySelector('form')!;
// !를 붙이면 ts가 element라고 인식한다.
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//as를 붙여도 된다. 그러면 명확하게 어떤 엘레먼트인지 나와서 속성과 함수들을 사용할 수 있다.
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

    let values:[string,string,number] = [tofrom.value,details.value,amount.valueAsNumber]

    let doc:HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }
  list.render(doc,type.value,'end')

});