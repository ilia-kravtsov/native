/*
Ассоциативный массив - объект, объект - это тип данных
любой объект является ассоциативным массивом
но сейчас мы будем относиться к этому типу данных как к организационной структуре
прародитель объекта
он же структура данных
В JS нет такого типа данных массив
массив это уже структура данных некая организация данных
массив в JS является объектом
потому что у массива есть методы map forEach .length и т.д.
*/

let user_1 = {
    name: 'Dimych',
    age: 12,
    address: {
        city: {
            title: 'Minsk'
        }
    }
}

console.log(user_1.address.city.title) // Minsk

// но еще мы можем обратиться к свойствам объекта через []

console.log(user_1["address"]["city"]["title"]) // Minsk

/* console.log(user["address"]["city"]["title"])
address city title - это строки
на самом деле в объекте каждый ключ это строка даже если мы не указываем кавычки */

let user_2 = {
    'name': 'Dimych',
    'age': 12,
    'address': {
        'city': {
            'title': 'Minsk'
        }
    }
}

// user_1 and user_2 are the same

/*
Писать кавычки у ключей объектов это правильно с точки зрения json формата
в json ключи без кавычек это ошибка в js так разрешается

let city = {}
    undefined
city.title
    undefined
 city.title = 'Minsk'
    'Minsk'
city['cityzens'] = 100
    100

- то есть если я присваиваю какому-то свойству какое-то значение через = то это значение добавляется
к свойству в объекте

{title: 'Minsk', cityzens: 100}

Когда мы в объекте создадим массив нам понадобится эта гибкость

users[0]
'ilia'

users['0'] - в typescript не прокатит
'ilia'

console.log(user_1['map'](() => {}))
*/

// ---------------------------------------------------------------------------------------------------------------------

let users = ['ilia', 'killian', 'william', 'ilai']

// мы можем вызывать map через [''] потому что users это объект
console.log(users.map((e) => e)) // (4) ['ilia', 'killian', 'william', 'ilai']
console.log(users['map']((e) => e)) // (4) ['ilia', 'killian', 'william', 'ilai']
console.log(users['map']((e) => e.toUpperCase())) // (4) ['ILIA', 'KILLIAN', 'WILLIAM', 'ILAI']

let usersObj = {
    '0' : 'Dimych',
    '1' : 'ilia',
    '2' : 'killian',
    '3' : 'willaim',
}

console.log(usersObj['0']) // Dimych
console.log(usersObj[0]) // Dimych сработало потому что этот переданный ключ под капотом превращается в строку

usersObj['table'] = 'brown'

console.log(usersObj) // {0: 'Dimych', 1: 'ilia', 2: 'killian', 3: 'willaim', table: 'brown'}

usersObj['привет как дела'] = 'хорошо'

console.log(usersObj) // {0: 'Dimych', 1: 'ilia', 2: 'killian', 3: 'willaim', table: 'brown', привет как дела: 'хорошо'}
console.log(usersObj.table) // brown
console.log(usersObj['привет как дела']) // хорошо

usersObj[null] = 'ок'
console.log(usersObj) // null превратится в строку
// {0: 'Dimych', 1: 'ilia', 2: 'killian', 3: 'willaim', table: 'brown', привет как дела: 'хорошо', null: 'ок'}

usersObj[null] = 'nope'
console.log(usersObj)
// {0: 'Dimych', 1: 'ilia', 2: 'killian', 3: 'willaim', table: 'brown', привет как дела: 'хорошо', null: 'nope'}

usersObj[ {} ] = 'hello'
// как JS превращает объекты в строку, он спрашивает у объекта его метод toString()
// он не явно вызывает метод toString
// usersObj[ {}.toString() ] = 'hello'
// а метод toString() если он не переопределен обычно возвращает у объекта [object Object] : 'hello'
console.log(usersObj)
// {
    // 0: 'Dimych',
    // 1: 'ilia',
    // 2: 'killian',
    // 3: 'willaim',
    // table: 'brown',
    // привет как дела: 'хорошо',
    // null: 'nope',
    // [object Object]: 'hello'
// }

// если усложним
console.log(usersObj[{name: 'ilai'}]) // hello
usersObj[{name: 'ilai'}] = 'some'
console.log(usersObj)
// {0: 'Dimych', 1: 'ilia', 2: 'killian', 3: 'willaim', table: 'brown', привет как дела: 'хорошо',
// null: 'nope', [object Object]: 'some'}

/*
Если я у объекта
usersObj[{name: 'ilai', toString()}] - переопределяю ключ 'ilai' методом toString()
и скажу что
usersObj[{name: 'ilai', toString(){return 'bla bla'}}]
*/
usersObj[{name: 'ilai', toString(){return 'bla bla'}}] = 'value of bla bla'

console.log(usersObj)
/*
{0: 'Dimych', 1: 'ilia', 2: 'killian', 3: 'willaim', table: 'brown', привет как дела: 'хорошо', null: 'nope',
[object Object]: 'some', bla bla: 'value of bla bla'}
*/

// ____________________________________  Итерируемся по объекту если не знаем сколько в нем элементов

let mates = {
    '0' : 'Dimych',
    '1' : 'ilia',
    '2' : 'killian',
    '3' : 'willaim',
}

// Object это класс с помощью которого можно создать любой объект
// keys - статический метод класс Object, в который мы можем передать объект ключи которого мы хотим получить

console.log(Object.keys(mates)) // (4) ['0', '1', '2', '3']
console.log(Object.values(mates)) // (4) ['Dimych', 'ilia', 'killian', 'willaim']

// так как Object.keys(mates) это массив то мы можем применять к нему методы map filter и так далее

console.log(Object.values(mates).map((e) => e.toUpperCase())) // (4) ['DIMYCH', 'ILIA', 'KILLIAN', 'WILLAIM']
console.log(Object.keys(mates).filter((e) => e > 1)) // (2) ['2', '3']

// _____________________________________________________________________________________________________________________
/*
Создадим объект который будет ассоциативным массивом по своему назначению
*/

let dudes = {
    '0' : {id: 101, name: 'Dimych'},
    '1' : {id: 3232312, name: 'Natasha'},
    '2' : {id: 1212, name: 'Valera'},
    '3' : {id: 1, name: 'Katya'},
}

// Сделаем так чтобы id каждого объекта стали ключами к каждому объекту

    dudes = {
    '101' : {id: 101, name: 'Dimych'},
    '3232312' : {id: 3232312, name: 'Natasha'},
    '1212' : {id: 1212, name: 'Valera'},
    '1' : {id: 1, name: 'Katya'},
}

// теперь закидываем наши объекты в массив

let usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
    {id: 100500, name: 'igor'}
]

// Разница между dudes и usersArray в том насколько быстро мы можем получить доступ к конкретному объекту
// зная его id
// то есть если у нас стоит задача из совокупности массива доставать что-то например по id
// то мы этот id делаем ключом и тогда мы можем обращаться к объекту с искомым id моментально быстро
// не перебирая весь массив

// создаем объект с 1000 свойств
let a = {}
for (let i = 0; i < 1001; i++) {
    a[i] = 'hurray'
}
console.log(a)
/*
{0: 'hurray', 1: 'hurray', 2: 'hurray', 3: 'hurray', 4: 'hurray', 5: 'hurray', 6: 'hurray', 7: 'hurray', 8: 'hurray', 9: 'hurray', 10: 'hurray', 11: 'hurray', 12: 'hurray', 13: 'hurray', 14: 'hurray', 15: 'hurray', 16: 'hurray', 17: 'hurray', 18: 'hurray', 19: 'hurray', 20: 'hurray', 21: 'hurray', 22: 'hurray', 23: 'hurray', 24: 'hurray', 25: 'hurray', 26: 'hurray', 27: 'hurray', 28: 'hurray', 29: 'hurray', 30: 'hurray', 31: 'hurray', 32: 'hurray', 33: 'hurray', 34: 'hurray', 35: 'hurray', 36: 'hurray', 37: 'hurray', 38: 'hurray', 39: 'hurray', 40: 'hurray', 41: 'hurray', 42: 'hurray', 43: 'hurray', 44: 'hurray', 45: 'hurray', 46: 'hurray', 47: 'hurray', 48: 'hurray', 49: 'hurray', 50: 'hurray', 51: 'hurray', 52: 'hurray', 53: 'hurray', 54: 'hurray', 55: 'hurray', 56: 'hurray', 57: 'hurray', 58: 'hurray', 59: 'hurray', 60: 'hurray', 61: 'hurray', 62: 'hurray', 63: 'hurray', 64: 'hurray', 65: 'hurray', 66: 'hurray', 67: 'hurray', 68: 'hurray', 69: 'hurray', 70: 'hurray', 71: 'hurray', 72: 'hurray', 73: 'hurray', 74: 'hurray', 75: 'hurray', 76: 'hurray', 77: 'hurray', 78: 'hurray', 79: 'hurray', 80: 'hurray', 81: 'hurray', 82: 'hurray', 83: 'hurray', 84: 'hurray', 85: 'hurray', 86: 'hurray', 87: 'hurray', 88: 'hurray', 89: 'hurray', 90: 'hurray', 91: 'hurray', 92: 'hurray', 93: 'hurray', 94: 'hurray', 95: 'hurray', 96: 'hurray', 97: 'hurray', 98: 'hurray', 99: 'hurray', …}
*/
// console.log(a.999) - не работает
console.log(a[999]) // hurray
/*
console.log(a[999]) // hurray - дает мне результат моментально
извлечение свойства из объекта происходит максимально быстро потому что в памяти это так хранится
хранится объект у него когда мы обращаемся по свойству 999 мы обращаемся к адресной ячейке а потом из этого адреса
в нужную память где находится это значение
происходит это моментально быстро

O(1) - сложность алгоритмов от 1-го
это значит что насколько бы не рос размер этого объекта

let usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

чтобы найти здесь объект с id 1 нужно

console.log(usersArray.find(u => u.id === 1)) // {id: 1, name: 'Katya'}
это требовательный к ресурсу метод потому что перебирает циклом каждый элемент и сравнивает с искомым
сложность этого алгоритма O(n) где n - это количество элементов в массиве
чем больше элементов в массиве тем сложнее его оттуда доставать

быстрее обратиться напрямую к объекту
*/

console.log(usersArray.find(u => u.id === 1)) // {id: 1, name: 'Katya'}
console.log(usersArray.findIndex(u => u.id === 1)) // 3

let newUserObject = usersArray.reduce((acc, user ) => {
    acc[user.id] = {...user}
    delete acc[user.id].id
    return acc
}, {})

console.log(newUserObject)

/*
{1: {…}, 101: {…}, 1212: {…}, 3232312: {…}}
1: {name: 'Katya'}
101: {name: 'Dimych'}
1212: {name: 'Valera'}
3232312: {name: 'Natasha'}
[[Prototype]]: Object
________________________________________________________________________________________________________________Typing
для того чтобы протипизировать такой объект создаем тип

type UsersType = {
    [key: string]: {id: number, name: string}
}

const dudes: UsersType = {
    '101' : {id: 101, name: 'Dimych'},
    '3232312' : {id: 3232312, name: 'Natasha'},
    '1212' : {id: 1212, name: 'Valera'},
    '1' : {id: 1, name: 'Katya'},
}
*/

console.log(newUserObject['1']) // {name: 'Katya'}

// Добавляем новый объект user в usersArray

// с сервера нам пришел user
let user = {
    id: 100500,
    name: 'igor'
}

newUserObject[user.id] = user // не создает дубликат в массиве
console.log(newUserObject)
/*
{1: {…}, 101: {…}, 1212: {…}, 100500: {…}, 3232312: {…}}
1: {name: 'Katya'}
101: {name: 'Dimych'}
1212: {name: 'Valera'}
100500: {id: 100500, name: 'igor'}
3232312: {name: 'Natasha'}
[[Prototype]]: Object
*/

newUserObject = usersArray.reduce((acc, user ) => {
    acc[user.id] = {...user}
    delete acc[user.id].id
    return acc
}, {})

console.log(newUserObject)
/*
{1: {…}, 101: {…}, 1212: {…}, 3232312: {…}}
1: {name: 'Katya'}
101: {name: 'Dimych'}
1212: {name: 'Valera'}
3232312: {name: 'Natasha'}
[[Prototype]]: Object
*/

/*
Если разрешается мутировать объект то
*/
usersArray.push(user) // если там такой user уже был то возможно создание дубликата
console.log(usersArray)
/*
(6) [{…}, {…}, {…}, {…}, {…}]
0: {id: 101, name: 'Dimych'}
1: {id: 3232312, name: 'Natasha'}
2: {id: 1212, name: 'Valera'}
3: {id: 1, name: 'Katya'}
4: {id: 100500, name: 'igor'}
5: {id: 100500, name: 'igor'}
length: 6
[[Prototype]]: Array(0)
*/

// если хотим добавить immutable
let usersArrayCopy = [...usersArray, user]
console.log(usersArrayCopy)
/*
(7) [{…}, {…}, {…}, {…}, {…}]
0: {id: 101, name: 'Dimych'}
1: {id: 3232312, name: 'Natasha'}
2: {id: 1212, name: 'Valera'}
3: {id: 1, name: 'Katya'}
4: {id: 100500, name: 'igor'}
5: {id: 100500, name: 'igor'}
6: {id: 100500, name: 'igor'}
length: 7
[[Prototype]]: Array(0)
*/

let Array = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
    {id: 100500, name: 'igor'},
]

let uncle = {
    id: 239, name: 'asdf'
}

Array[uncle.id] = uncle // не создает дубликат в массиве
console.log(Array)

/*
(240) [{…}, {…}, {…}, {…}, {…}, empty × 234, {…}]
0: {id: 101, name: 'Dimych'}
1: {id: 3232312, name: 'Natasha'}
2: {id: 1212, name: 'Valera'}
3: {id: 1, name: 'Katya'}
4: {id: 100500, name: 'igor'}
239: {id: 239, name: 'asdf'}
length: 240
[[Prototype]]: Array(0)
*/

let objectFromArray = Array.reduce((acc, user ) => {
    acc[user.id] = {...user}
    delete acc[user.id].id
    return acc
}, {})

console.log(objectFromArray)
/*
{1: {…}, 101: {…}, 239: {…}, 1212: {…}, 100500: {…}, 3232312: {…}}
1: {name: 'Katya'}
101: {name: 'Dimych'}
239: {name: 'asdf'}
1212: {name: 'Valera'}
100500: {name: 'igor'}
3232312: {name: 'Natasha'}
[[Prototype]]: Object
*/

// как удалить пользователя
let t = {a: 1, b: 2, c: 3}
delete t.a
console.log(t) // {b: 2, c: 3}

//поэтому
delete objectFromArray['1']
delete objectFromArray['101']
delete objectFromArray['239']
console.log(objectFromArray)
/*
{1212: {…}, 100500: {…}, 3232312: {…}}

1212: {name: 'Valera'}
100500: {name: 'igor'}
3232312: {name: 'Natasha'}
[[Prototype]]: Object
*/
let aunt = {
    id: 1,
    name: 'sveta'
}
console.log(Array)
/*
(240) [{…}, {…}, {…}, {…}, {…}, empty × 234, {…}]
0: {id: 101, name: 'Dimych'}
1: {id: 3232312, name: 'Natasha'}
2: {id: 1212, name: 'Valera'}
3: {id: 1, name: 'Katya'}
4: {id: 100500, name: 'igor'}
239: {id: 239, name: 'asdf'}
length: 240
[[Prototype]]: Array(0)
*/
Array = Array.filter(u => u.id !== aunt.id)
console.log(Array)
/*
(5) [{…}, {…}, {…}, {…}, {…}]
0: {id: 101, name: 'Dimych'}
1: {id: 3232312, name: 'Natasha'}
2: {id: 1212, name: 'Valera'}
3: {id: 100500, name: 'igor'}
4: {id: 239, name: 'asdf'}
length: 5
[[Prototype]]: Array(0)
*/

let Array_1 = [
    {id: 101, name: 'Dimych'},
    {id: 1, name: 'Katya'},
    {id: 100500, name: 'igor'},
]
let item = {
    id: 12301,
    name: 'asdljfabnlch'
}
Array_1[item.id] = item
console.log(Array_1)
/*
(12302) [{…}, {…}, {…}, empty × 12298, {…}]
0: {id: 101, name: 'Dimych'}
1: {id: 1, name: 'Katya'}
2: {id: 100500, name: 'igor'}
12301: {id: 12301, name: 'vitya'}
length: 12302
[[Prototype]]: Array(0)
*/
let item_2 = {
    id: 4567,
    name: 'maksim'
}
Array_1[item_2] = item_2
console.log(Array_1)
/*
(12302) [{…}, {…}, {…}, empty × 12298, {…}, [object Object]: {…}]
0: {id: 101, name: 'Dimych'}
1: {id: 1, name: 'Katya'}
2: {id: 100500, name: 'igor'}
12301: {id: 12301, name: 'vitya'}
[object Object]: {id: 4567, name: 'maksim'}
length: 12302
[[Prototype]]: Array(0)
*/
Array_1[item.id].name = 'vitya'
console.log(Array_1)
/*
(12302) [{…}, {…}, {…}, empty × 12298, {…}]
0: {id: 101, name: 'Dimych'}
1: {id: 1, name: 'Katya'}
2: {id: 100500, name: 'igor'}
12301:
{id: 12301, name: 'vitya'}
length: 12302
[[Prototype]]: Array(0)
*/

let matez = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

let matezAssocial = matez.reduce((acc, user ) => {
    acc[user.id] = {...user}
    delete acc[user.id].id
    return acc
}, {})

console.log(matezAssocial)
/*
{1: {…}, 101: {…}, 1212: {…}, 3232312: {…}}
1: {name: 'Katya'}
101: {name: 'Dimych'}
1212: {name: 'Valera'}
3232312: {name: 'Natasha'}
[[Prototype]]: Object
*/
let mat = {id: 348970, name: 'alex'}
matezAssocial[mat.id] = mat
console.log(matezAssocial)
/*
{1: {…}, 101: {…}, 1212: {…}, 348970: {…}, 3232312: {…}}
1: {name: 'Katya'}
101: {name: 'Dimych'}
1212: {name: 'Valera'}
348970: {id: 348970, name: 'alex'}
3232312: {name: 'Natasha'}
[[Prototype]]: Object
*/

// let matAssocial = matezAssocial.reduce((acc, user ) => { matezAssocial.reduce is not a function
//     acc[user.id] = {...user}
//     delete acc[user.id].id
//     return acc
// }, {})
//
// console.log(matAssocial)
delete matezAssocial[mat.id]
console.log(matezAssocial)
/*
{1: {…}, 101: {…}, 1212: {…}, 348970: {…}, 3232312: {…}}1: {name: 'Katya'}101: {name: 'Dimych'}1212:
{name: 'Valera'}3232312: {name: 'Natasha'}[[Prototype]]: Object
script.js:532 {1: {…}, 101: {…}, 1212: {…}, 3232312: {…}}1: {name: 'Katya'}101: {name: 'Dimych'}1212:
{name: 'Valera'}3232312: {name: 'Natasha'}[[Prototype]]: Object
*/

/*
let people = {
    '0': 'ilia',
    '1': 'ilai',
    '2': 'killian',
    '3': 'william',
}

console.log(people.0) - нельзя
console.log(people['0']) // ilia
console.log(people[0]) // ilia - работает потому что ключ превращается в строку

people['привет как дела'] = 'maksim' - добавил свойство в объект
console.log(Object.values(people).map(e => e+' map')) //(5)['ilia map', 'ilai map', 'killian map', 'william map', 'maksim map']
*/

let people = {
    '0': 'ilia',
    '1': 'ilai',
    '2': 'killian',
    '3': 'william',
}

console.log('-------------------------------------------------------------')
console.log(people['0']) // ilia
console.log(people[0]) // ilia
people['привет как дела'] = 'maksim'
console.log(Object.keys(people)) //(5) ['0', '1', '2', '3', 'привет как дела']
console.log(Object.values(people).map(e => e+' map')) //(5)['ilia map', 'ilai map', 'killian map', 'william map', 'maksim map']

let lyudi = {
    '23' : {id: 23, name: 'Dmiltriy', age: 32},
    '2323' : {id: 2323, name: 'Katya', age: 234},
    '23346' : {id: 23346, name: 'Maksim', age: 34},
    '232346' : {id: 232346, name: 'Artem', age: 3212},
}

let lyud = {id: 324, name: 'semen', age: 54}

lyudi[lyud.id] = lyud

console.log(lyudi)
/*
{23: {…}, 324: {…}, 2323: {…}, 23346: {…}, 232346: {…}}
23: {id: 23, name: 'Dmiltriy'}
324: {id: 324, name: 'semen'}
2323: {id: 2323, name: 'Katya'}
23346: {id: 23346, name: 'Maksim'}
232346: {id: 232346, name: 'Artem'}
[[Prototype]]: Object
*/
delete lyudi[lyud.id]
console.log(lyudi)
/*
{23: {…}, 324: {…}, 2323: {…}, 23346: {…}, 232346: {…}}
23: {id: 23, name: 'Dmiltriy'}
2323: {id: 2323, name: 'Katya'}
23346: {id: 23346, name: 'Maksim'}
232346: {id: 232346, name: 'Artem'}
[[Prototype]]: Object
*/
lyudi[lyud.id] = lyud
lyudi[lyud.id].name = 'danila'

console.log(lyudi)
/*
{23: {…}, 324: {…}, 2323: {…}, 23346: {…}, 232346: {…}}
23: {id: 23, name: 'Dmiltriy'}
324: {id: 324, name: 'danila'}
2323: {id: 2323, name: 'Katya'}
23346: {id: 23346, name: 'Maksim'}
232346: {id: 232346, name: 'Artem'}
[[Prototype]]: Object
*/
delete lyudi[lyud.id]
lyudi[lyud.id] = lyud.name
lyudi[lyud.id] = lyud.age