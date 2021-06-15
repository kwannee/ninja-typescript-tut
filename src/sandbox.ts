//type을 infer함(추론)
//type을 잘못 하면 컴파일을 안함.

//배열에도 인풋들의 타입들을 정해줘야한다.
//타입이 여러개인 배열도 있을 수 있다.
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }
//이렇게 없는 속성을 부여하는건 안된다.
// ninja.skills = ['fighting','sneaking']

// let character:string;
// let age: number;
// let isLoggedIn: boolean;

// age = 30;

//초기화 할때 빈 배열로 두면 undefined가 된다. 
//var array; 이렇게 됨. 
//let array: string[] =[]; 이런식으로 해놔야한다.
// let ninjas: string[]=[];

//  =가 아니라 : 인걸 명심
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColor:string
// }

//?가 붙으면 optional. 있어도 되고 없어도 됨.
//c:number =10 이라고 하면 디폴트 값이 10이라는 뜻.
//디폴트 값을 명시하면 ?를 쓸 수 없다. 값을 안넣으면 자동으로 10이니까
//optional parameter는 나중에 적어라.
//void와 undefined는 다르다.
// let add = (a: number, b: number, c: number | string = 10):void => {
//     console.log(a*b)
//     console.log(c)
// }
// add(5,10,'20')

//명시적으로 리턴값의 타입을 정해줄 수 있다.
//그러나 타입스크립트가 파라미터들의 타입들을 보고 리턴값을 infer하기 떄문에
//안써도 된다고 한다.
// const minus = (a:number, b:number):number => {
//     return a + b;
// }

// let result = minus(10,7);

//너무 길어질때 사용할 수 있다.
//Type aliases
// type StringorNum = string | number;
// type objWithName = {name:string, uid:StringorNum}
// const logDetails = (uid: StringorNum, item:string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: objWithName) => {
//     console.log(`${user.name} says hello`)
// }
let greet: (a:string,b:string) => void;
greet = (name:string,greeting:string) =>{
    console.log(`${name} ${greeting}`)
}
let calc: (a:number,b:number,c:string) => number;
calc = (numOne:number,numTwo:number,action:string) =>{
    if(action==='add'){
        return numOne + numTwo
    } else{
        return 0
    }
}

let logDetails:(obj: {name:string,age:number}) => void

type person = {name:string,age:number}

logDetails = (ninja:person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`)
}