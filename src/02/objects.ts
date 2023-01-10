
let student = {
    name: 'william',
    age: 32,
    city: {
        cityTitle: 'moscow',
        address: 'lenina 1',
        sights: [
            {
                id: 1,
                sight: 'red square'
            },
            {
                id: 2,
                sight: 'saint basils cathedral'
            },
            {
                id: 3,
                sight: 'lenins mausoleum'
            },
            {
                id: 4,
                sight: 'gum trading house'
            },
        ]
    }
}

console.log(student.city.sights[3].sight)

