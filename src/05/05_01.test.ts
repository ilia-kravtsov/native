import {ManType} from "./05_01";
import {greetingMessage} from "../04/04_02";

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        { name: 'Andrew Ivanov', age: 33 },
        { name: 'Alexander Petrov', age: 24 },
        { name: 'Dmitry Sidorov', age: 18 },
    ]
})

test('should get array of greeeting message', () => {
    const messages = greetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew! Welcome to it-incubator')
    expect(messages[1]).toBe('Hello Alexander! Welcome to it-incubator')
    expect(messages[2]).toBe('Hello Dmitry! Welcome to it-incubator')
})