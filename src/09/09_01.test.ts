
function increaseAge(m: ManType) {
    m.age++
}

type ManType = {
    name: string
    age: number
    address: {title: string}
}

test('reference type test', () => {

    let man: ManType = {
        name: 'ilia',
        age: 29,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(man)

    expect(man.age).toBe(30)

    const superman = man

    superman.age = 1000

    expect(man.age).toBe(1000)
})

test('array test', () => {

    let mans: Array<ManType> = [
        {
            name: 'ilia',
            age: 29,
            address: {
                title: 'Minsk'
            }
        },
        {
            name: 'killian',
            age: 30,
            address: {
                title: 'Minsk'
            }
        },
    ]

    const admins = mans

    admins.push({
        name: 'ilai',
        age: 31,
        address: {
            title: 'Minsk'
        }
    })

    expect(mans[2]).toEqual({name: 'ilai', age: 31, address: {title: 'Minsk'}})

})

test('value type test', () => {

    let mansCount = 100;
    let adminsCount = mansCount

    adminsCount++

})

test('reference type test', () => {

    let add = {
        title: 'Minsk'
    }

    let man: ManType = {
        name: 'ilia',
        age: 29,
        address: add
    }

    const addres = man.address

    const man_2: ManType = {
        name: 'killian',
        age: 30,
        address: add
    }

    add.title = 'Minsk city'

    expect(man.address).toBe(man_2.address)
    expect(man_2.address.title).toBe('Minsk city')
})

test('reference type array test', () => {

    let add = {
        title: 'Minsk'
    }

    let man: ManType = {
        name: 'ilia',
        age: 29,
        address: add
    }

    const man_2: ManType = {
        name: 'killian',
        age: 30,
        address: add
    }

    const mans = [man, man_2, {name: 'artem', age: 33, address: add}]

    const adminsPeople = [man, man_2]

    adminsPeople[0].name = 'ilia sergeevich'

    expect(mans[0].name).toBe('ilia sergeevich')
    expect(man.name).toBe('ilia sergeevich')
})

test('sort array test', () => {
    const letters = ['c', 'a', 'b', 'e','d' ]

    passportist(letters)

    expect(letters).toEqual(['c', 'a', 'b', 'e','d' ])
})

function passportist(letters: any) {
    const copy = [...letters].sort()
    // letters.sort() // - sort - changes the current object and works mutable
    console.log(copy)
}