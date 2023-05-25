// 동적 데이터에 인덱스 시그니처 사용하기

// js장점 중 하나는 객체를 생성하는 문법이 간단하다는 것

// 인덱스 시그니처 [key: type] : type 
//-> 인덱스 시그니처는 유연하게 타입 매핑 표현가능

type TOY = {[property: string]: string }
const toy : TOY = {
  name : '우디',
  color: 'red',
  nick : '나무'
}

// 인덱스 시그니처 전부 string이 온다
// property : string 인덱스 시그니처이며 다음 세 의미를 갖고 있음
// 위치만 표시하는 용도, propery는 키이름, 위치만 표시한다고
// 키 타입은 스트링 사용, 값의 타입은 어떤 것이든 가능

// 타입체크가 수행되면 단점이 나옴.
// 잘못된 키를 포함하여 모든 키 허용됨
// name 대신 NAME를 작성해도 오케, 특정 키 필요치 않음
// 타입스크립트 언어 서비스를 제공 받을 수 없다.

// 인덱스 시그니처는 부정확해서 나은 방법을 찾아야함. 인터페이스로 말야

interface TOY2 {
  name : string,
  color: string,
  number: number
}

const toy2 : TOY2 = {
  name: '우디',
  color:'red',
  number: 1,
}

// 해결
// key와 value가 뭔 type이 될건가 안다면 직접 타입을 적어주자고!
interface test1 { [column: string] : number} //광범
interface test2 {x:number, y?:number; z?:number;} 
type test3 = 
  | {x: number;}
  | {x:number; y:number;}
  | {x:number; y:number; z:number;}
  | {x:number; y:number; z:number;} //번거롭, 하지만 가장 정확하다.
export default {}

// 인덱스 시그니처는 동적 데이터를 표현할 때 사용한다. 

// 1. 런타임까지 객체의 속성을 알 수 없는 경우에만 인덱스 시그니처를 사용하자
// 2. 되도록이면 인덱스 시그니처 보다 인터페이스, 정화한 타입을 입력하도록