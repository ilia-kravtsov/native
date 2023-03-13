import {CourseType} from "./04";

test('should take old men older then 90', () => {

    const ages = [18,20,22,1,100,90,14]

    const oldAges = ages.filter( age => age > 90 )

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses cheaper then 160', () => {
    const courses = [
        {city: 'CSS', price: 110},
        {city: 'HTML', price: 150},
        {city: 'JS', price: 200},
    ]

    const oldAges = courses.filter((course:CourseType) => course.price < 160)

    expect(oldAges.length).toBe(2)
    expect(oldAges[0].city).toBe('CSS')
    expect(oldAges[1].city).toBe('HTML')
})

test('get only completed tasks', () => {

    const tasks = [
        {id: 1, city: 'Bread', isDone: false},
        {id: 2, city: 'Milk', isDone: true},
        {id: 3, city: 'Salt', isDone: false},
        {id: 4, city: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].city).toBe('Milk')
    expect(completedTasks[1].city).toBe('Sugar')
 })

test('get only uncompleted tasks', () => {

    const tasks = [
        {id: 1, city: 'Bread', isDone: false},
        {id: 2, city: 'Milk', isDone: true},
        {id: 3, city: 'Salt', isDone: false},
        {id: 4, city: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => !task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].city).toBe('Bread')
    expect(completedTasks[1].city).toBe('Salt')
})