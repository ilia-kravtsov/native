import {splitIntoWords, sum} from './01'
import {mult} from './01'

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

test('splitting into words should be correct', () => {

    // data
    const sentence1 = "Hello my friends!"
    const sentence2 = "JS - the best  programming language."

    //action
    const result1 = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})