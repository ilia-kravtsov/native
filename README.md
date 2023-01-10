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