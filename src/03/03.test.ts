import {StudType} from "../02/02";
import {addSkill} from "./03";

let stu : StudType

beforeEach(() => {
    stu = {
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
})

test('new tecName skill should be added to student', () => {
    expect(stu.technologies.length).toBe(4)

    addSkill(stu, 'JS');

    expect(stu.technologies[4].tecName).toBe('JS')
    expect(stu.technologies.length).toBe(5)
})









































/*
import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn} from "./03";
import {makeStudentActive} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: "ilia",
        age: 29,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})
test("does student live in city?", () => {
    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})*/
