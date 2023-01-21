import {CourseType} from "./04";

test('should take old men older then 90', () => {

    const ages = [18,20,22,1,100,90,14]

    const oldAges = ages.filter( age => age > 90 )

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses cheaper then 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'HTML', price: 150},
        {title: 'JS', price: 200},
    ]

    const oldAges = courses.filter((course:CourseType) => course.price < 160)

    expect(oldAges.length).toBe(2)
    expect(oldAges[0].title).toBe('CSS')
    expect(oldAges[1].title).toBe('HTML')
})

test('get only completed tasks', () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('Milk')
    expect(completedTasks[1].title).toBe('Sugar')
 })

test('get only uncompleted tasks', () => {

    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => !task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('Bread')
    expect(completedTasks[1].title).toBe('Salt')
})