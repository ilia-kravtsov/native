
export type PropsManType = {
    name: string
    age: number
    lessons: Array<{title: string, name: string}>
    address: {street: {title: string}}
}

let props: PropsManType;
beforeEach(() => {
    props = {
        name: 'killian',
        age: 32,
        lessons: [{title: '1', name: 'css'}, {title: '2', name: 'html'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'liberty street'
            }
        }
    }
})

test('', () => {

  /*  const age = props.age
    const lessons = props.lessons*/

    const {age, lessons} = props

    const {age: a, lessons: l} = props // - найди свойство age в props и создай переменную a

    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)

    expect(a).toBe(32)
    expect(title).toBe('liberty street')
    expect(l.length).toBe(3)
})

test('a', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [, ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls2.title).toBe('2')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('react')
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'})
})

/*
 const age = props.age
 const lessons = props.lessons

 Это можно заменить одной строкой - Деструктурируемое присваивание

 const {age, lessons} = props     {} скобки значат что мы хотим найти значения таких свойств в объекте справа от =
 если такие свойства будут в props то их значения присвоятся age и lessons
*/