Тесты video 01

Что проверяет Unit тест?

Юнит, или модульные тесты, проверяют отдельные блоки и функции написанного кода. 
Юнит-тесты нужны, чтобы быстро протестировать написанный фрагмент кода и сразу понять, 
где именно кроется ошибка. Юнит-тесты дешевле и быстрее других, их легко автоматизировать

Создаем функцию которую будем тестировать в отдельном файле

01.ts

export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

Чтобы тестировать какой-либо файл, нам нужно создать аналогичный файл рядом
но перед 'название файла'.ts добавить test - 'название файла'.test.ts

Тестовая среда create react app, webpack, смотрит на наличие перед расширением файла 
слова test если такое слово есть то среда воспринимает этот файл как тест 
и запускает его как тест 

01.ts - логика которую мы хотим протестировать с помощью uni теста

в файле 01.text.ts

1 создаем тест

test() - это функция

Дальше пишем что будем тестировать, что должно произойти

test('sum should be correct') - указываем наименование теста, указывается в виде строки

и вторым параметром функцию которая и будет являться тестом () => {}

test('sum should be correct', () => {})

() => {} - логика тестирования


the test consists of three parts

Part 1 - исходные данные data

//data
let a = 1 - в тестах используется let
let b = 2
let c = 3 - мы создали набор данных

Part 2 - действие которое мы выполняем action

//action
let result = sum(a,b)

Part 3 - ожидаемый результат который мы хотим получить от action - expect result

//expect result  expect - функция из среды js
expect() - ожидаем что
и передаем в expect что именно мы ожидаем от result
expect(result)
в данном случае мы ожидаем что он будет равен трём - .toBe(3)
expect(result).toBe(3)

Это есть профессионально написанный тест в тестовой среде jest 

Теперь мы можем запускать и проверять работает ли функция sum

Идём в terminal и запускаем тест - npm test 
Анализируется вся файловая структура, ищутся файлы с наименованием test перед расширением 
файла и такие файлы запускаются все вместе 

Test Suites - тестовый набор 
Test - количество самих тестов 1 total (1 failed or 1 passed)

Чем тест короче - тем лучше 
Лучше много мелких независимых тестов чем 1 тест который тестирует все 

Два expect в рамках одного теста все равно говорит нам о том что test - один

Напишем еще 1 тест на mult function

test('multiply should be correct', () => {

//data
let a = 1 
let b = 2
let c = 3

//action
const result1 = mult(a,b);
const result2 = mult(b,c);

//expect result
expect(result1).toBe(2);
expect(result2).toBe(6);
})

Это называется покрыть код тестами 
Чем больше покрытие кода тестами тем лучше и безопаснее 

Можно запустить тест в режиме debugger 

Видим что //data повторяется в разных тестах а это дублирование кода поэтому 
выносим данные за пределы тестов 
а когда тесту понадобятся переменные из data 
то так как test это функция то test получит значения переменных
через обычное замыкание 

//data
let a: number;
let b: number;
let c: number;

beforeEach(() => {
a = 1;
b = 2;
c = 3;
})

test('sum should be correct', () => {

    //action
    const result1 = sum(a,b);
    const result2 = sum(b,c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('multiply should be correct', () => {

    //action
    const result1 = mult(a,b);
    const result2 = mult(b,c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

За пределами области видимости test 
при добавлении data мы не должны писать жестко заданные значения, 
мы должны указывать типизацию 

//data
let a: number;
let b: number;
let c: number;

а уже перед test добавить фукнцию beforeEach и уже там присвоить значения 
переменным, и таким образом, если внутри одного из test
произойдет переприсвоение значения одной из переменных
то это никак не повлияет на работу другого теста
потому что beforeEach при запуске второго теста переприсвоит обратно 
инициализационные значения

beforeEach(() => { - перед каждым тестом присвой переменным такие значения
    a = 1; - здесь не должно быть let мы не объявляем здесь а именно присваиваем значения
    b = 2;
    c = 3;
})

on my own

//data
let a: number
let b: number
let c: number

beforeEach(() => {
a = 1
b = 2
c = 3
})

test('sum should be correct', () => {
//action
const result = sum(a,b)

    //expect result
    expect(result).toBe(3)
})

test('mult should be correct', () => {
//action
const result = mult(b,c)

    //expect result
    expect(result).toBe(6)
})

it works!

______________________________________________ Objects

в объектах мы обязаны ставить запятые в описании типов - нет

1 способ создания объектов, с помощью синтаксиса литерала объекта {}

{} значат что мы присваиваем переменной student какой-то создаваемый объект

const student = {} 

У любого объекта есть структура данных состоящая из пар ключ: значение

Ключ - это строка, значение может быть любым из типов данных, как примитивом так и сложным типом

ключ может быть написан как в кавычках так и без них, но не может начинаться с цифры
и лучше не ставить в названии ключа пробелы потому что потом при обращении к данному свойству
нужно будет указывать называние ключа в ['название ключа']

Пары ключ значение в объекте разделяются запятой, объекты находящиеся в массиве так же разделяются запятой

В объектах могут находиться другие подобъекты со своими парами ключ: значение 
Когда мы указываем значение типа string мы указываем его в кавычках, но тип number без них

const student = { 
    'name': 'killian',
    age: 29,
    isActive: false,
} -> упаковал данные в объект

console.log(stud.name) - не смотря на то что у нас ключ 'name' указан в кавычках при
вызове (обращеннии к) данному свойству, мы указываем его без кавычек 

Примером объекта является файл package.json в котором все ключи указаны в кавычках

const stud = {
    'name': 'killian',
    age: 29,
    isActive: false,
    'second name': 'william'
} - обращаем внимание как мы обращаемся к свойству которое названо через пробел, после название объекта нет точки

console.log(stud["second name"])

const stud = {
    'name': 'killian',
    age: 29,
    isActive: false,
    address: {
    city: 'moscow',
    } - пример подобъекта, доступ к нему идет через слово address
}

const stud = {
    'name': 'killian',
    age: 29,
    isActive: false,
    address: {
    streetTitle: 'lenina 1',
    city: {
        title: 'minsk',
        country: 'belarus',
        }
    }
}

console.log(stud.address.city.country) - пример обращения к свойству подобъекта 

в качестве значения свойства так же могут быть и массивы с объектами (technologies)

const stud = {
    'name': 'killian',
    age: 29,
    isActive: false,
    address: {
        streetTitle: 'lenina 1',
        city: {
            title: 'minsk',
            country: 'belarus',
        }
},
technologies: [
    {
        id: 1,
        tecName: 'HTML',
    },
    {
        id: 2,
        tecName: 'CSS',
    },
    {
        id: 3,
        tecName: 'JS',
    },
    {
        id: 4,
        tecName: 'React',
    },
]
}

выводим значение 'React' -> console.log(stud.technologies[3].tecName)

при обращению при вызове к подобъекту который находится в массиве мы обращаемся не через точку
а через [] с указанием индекса объекта, название индекса начинается с 0

Пишем типизацию для объекта, описывая все свойства которые есть у объекта

export type CityType = {
    title: string
    country: string
}

export type AddressType = {
    streetTitle: string
    city: CityType
}

export type TechnologiesType = {
    id: number
    tecName: string
}

export type StudType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>  равносильно  technologies: TechnologiesType[]
}

const stud: StudType = {
    'name': 'killian',
    age: 29,
    isActive: false,
    address: {
        streetTitle: 'lenina 1',
    city: {
        title: 'minsk',
        country: 'belarus',
    }
},
technologies: [
    {
        id: 1,
        tecName: 'HTML',
    },
    {
        id: 2,
        tecName: 'CSS',
    },
    {
        id: 3,
        tecName: 'JS',
    },
    {
        id: 4,
        tecName: 'React',
    },
]
}

типизация - из TS

Чаще всего объект аналогичный stud будет создаваться много раз, и наша задача проконтролировать
правильность написания входящих в него свойств и значений для этого и существует типизация 




_______________________________________________________________________Играемся с тестами

let city: LocalCityType; - необходимо определить LocalCityType

beforeEach(() => { - перед каждым тесто мы будем переинициализировать объект к состоянию указанному ниже 
city = {
title: "New York",
houses: [],
governmentBuildings: [],
citizensNumber: 1000000
}
})

// 01. создайте тип LocalCityType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {
expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street");
})

// 01. дополните тип GovernmentBuildingType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains hospital and fire station", () => {
expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe("South Str");
})

тесту можно написать test.skip и тогда этот тест выполняться не будет

Итого

import {LocalCityType} from "./02_02";

let city: LocalCityType;

beforeEach(() => {
city = {
title: "New York",
houses: [
{buildedAt: 2012, repaired: false, address: {number: 100, street: {title: "White street"}}},
{buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
{buildedAt: 2020, repaired: false, address: {number: 101, street: {title: "Gold street"}}},
],
governmentBuildings: [
{type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {street: {title: "Central Str"}}},
{type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {street: {title: "South Str"}}}
],
citizensNumber: 1000000
}
})

// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {
expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street");

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street");

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Gold street");
})

// 01. дополните тип GovernmentBuildingType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains hospital and fire station", () => {
expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200);
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe("South Str");
})

export type LocalCityType = {
title: string
houses: Array<HousesType>
governmentBuildings: Array<GovernmentBuildingsType>
citizensNumber: number
}

export type HousesType = {
buildedAt: number
repaired: boolean
address: AddressType
}

export type AddressType = {
number: number
street: StreetType
}

export type StreetType = {
title: string
}

export type GovernmentBuildingsType = {
type: string
budget: number
staffCount: number
address: AddressGoverType
}

export type AddressGoverType = {
street: streetGoverType
}

export type streetGoverType = {
title: string
}
________________________________________________

к тесту мы можем обратиться как к функции test()
а можем обратиться как к объекту test.skip
это и есть доказательство того что в js функция это объект

Некоторые подтипы типизации можно использовать в разных местах

Когда тест сначала падаем а затем мы его дебажим назвается
test driving development разработка через тестирование 

Сначала тест - потом код
есть еще один подход сначала код потом тест

В типизации один из типов можем сделать необязательным для написания в коде с помощью ?

export type AddressType = {
    number?: number
    street: StreetType
}







____________________________________________ Functions

Функция выполняет действие, поэтому мы упаковываем этот набор действий в функцию 
Чтобы функцию постоянно вызывать и она эти действия постоянно производила 

Функция принимает параметры, чтобы получать разные результаты от одних и тех же действий которые в ней прописаны 

Самый простой вид функции это сумма a и b

export const sum = (a: number, b: number) => {
    return a + b
} 

Если бы сумма суммировала постоянно одни и те же два числа, то это бы не имело смысла
поэтому параметры указываются в написании функции в виде переменных
а уже при вызове функции указываются конкретные значения
таким образом мы можем вызывать одну и ту же функцию с разными параметрами и при этом 
функция будет возвращать разный результат 

Если в функции есть return, это значит что во время вызова функции 
мы воспринимаем вызов функии sum(2,3) что на месте вызова функции появляется то значение которое 
эта функция return

Если мы напишем 

let result = sum(2,3) = 5 - 

это значит что в res запишется то что в функция sum возвращает то есть

result = sum(3,4) = 7

Так же можем в вызов передать вызовы этой же функции в качетсве параметров

result = sum( sum(1,2), sum(2,3)) = 8

Чаще всего функции будут принимать в качестве параметров другие объекты 

_____________ Что Функции умеют делать с объектами 

1 Изменять объекты: 

экспортируем из предыдущего урока объект stud
и добавляем студенту новый скил

export const addSkill = () => {

}

в качестве параметра указываем объект

export const addSkill = (stud: StudType) => { - дайте мне студента который соответствует StudType

}

я ему добавлю скил 

export const addSkill = (stud: StudType, skill: string) => { - дайте мне название скила я его добавлю внутрь stud

}

export const addSkill = (stud: StudType, skill: string) => {
    stud.technologies.push({
        id: new Date().getTime(),    -
        tecName: skill
    }) - 
Метод getTime() возвращает числовое значение, соответствующее указанной дате по всемирному координированному времени. 
Вы можете использовать этот метод для того, чтобы присвоить дату и время другому объекту Date . 
Этот метод функционально эквивалентен методу valueOf()

new Date() Создаёт объект Date с текущей датой и временем: без указания параметров
}

Теперь мы можем вызывать данную функцию  

Протестируем как работает данная функция 

Если функция ничего не возвращает то на месте ее вызова появляется значение undefined

За пределами функции объект называется stud

а внутри функции в качестве параметра мы можем писать s or st

export const addSkill = (st: StudType, skill: string) => {
    st.technologies.push({
    id: new Date().getTime(),
    tecName: skill
    })
}

То есть параметр можем обозвать как угодно

st и stud - это две ссылки на один и тот же объект
Объект один и тот же но может по разному называться 

Чистая функция не имеет право меня объекты, она обязана вернуть значение через return 

Сигнатура функции это ее интерфейс то как мы с функцией взаимодействуем, то что функция 
принимает и что она возвращает 
























03_02_test

import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
let city: CityType;

beforeEach(() => {
city = {
title: "New York",
houses: [
{
buildedAt: 2012, reparied: false,
address: {number: 100, street: {title: "White street"}}
},
{
buildedAt: 2008, reparied: false,
address: {number: 100, street: {title: "Happy street"}}
},
{
buildedAt: 2020, reparied: false,
address: {number: 101, street: {title: "Happy street"}}
}
],
governmentBuildings: [
{
type: "HOSPITAL", budget: 200000, staffCount: 200,
address: {
street: {
title: "Central Str"
}
}
},
{
type: "FIRE STATION", budget: 500000, staffCount: 1000,
address: {
street: {
title: "South Str"
}
}
},
],
citizensNumber: 1000000
}
})

// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be for changed fot HOSPITAL', () => {
addMoneyToBudget(city.governmentBuildings[0], 100000);
expect(city.governmentBuildings[0].budget).toBe(300000);
});
// 02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
addMoneyToBudget(city.governmentBuildings[1], -100000);
expect(city.governmentBuildings[1].budget).toBe(400000);
});


// 03. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be repaired', () => {
repairHouse(city.houses[1]);
expect(city.houses[1].reparied).toBeTruthy();
});


// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});
// 05. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
toHireStaff(city.governmentBuildings[0], 20);
toHireStaff(city.governmentBuildings[1], 100);

    expect(city.governmentBuildings[1].staffCount).toBe(1100);
});

test('Greeting should be correct for city', () => {
expect(createMessage(city)).toBe("Hello New York cinizens. I want you be happy. All 1000000 men");
})