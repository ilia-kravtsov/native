type CityType = {
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
    technologies: Array<TechnologiesType>
}

export const stud: StudType = {
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

console.log(stud.address.city.country)
console.log(stud.technologies[3].tecName)





























































{/*export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

type TechType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}


export const student: StudentType = {
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

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)*/}