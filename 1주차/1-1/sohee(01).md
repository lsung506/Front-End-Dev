## Symbol
-----------------

- Symbol
    - 유일한 키를 생성할 수 있음 🔑

```javascript
const map = new Map();
const key1 = 'key';
const key2 = 'key';

map.set(key1, 'Hello');
console.log(map.get(key2));
```
심볼이 없을때는 원시타입이라서 값이 똑같아서 동일한 키라고 간주한다.

```javascript
const map = new Map();
const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, 'Hello');
console.log(map.get(key2));
```
심볼이 있을때는 서로 다른 값이 생긴다. 유일한 키를 만들때 쓴다.

**즉, key1과 key2가 값과 타입이 똑같다는 것을 알 수 있다.**

## Symbol.for
--------

- Symbol.for
    - 동일한 이름으로 하나의 키를 사용
    - 전역 심벌 레지스트리 (Global Symbol Registry)

```javascript
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

console.log(Symbol.keyFor(k1)); //key
console.log(Symbol.keyFor(key1)); //undefined
```
**전역 심벌 레지스트리로 만들어진 심벌에 한해서만 문자열에 대한 정보를 가져올 수 있다.**