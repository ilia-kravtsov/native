import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'william',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 21
        }
    }

   const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(30)
    expect(awesomeUser.hair).toBe(15)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'william',
        hair: 30,
        laptop: {
            title: 'tecno'
        },
        address: {
            city: 'Minsk',
            house: 12
        }

    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'william',
        hair: 30,
        laptop: {
            title: 'tecno'
        },
        address: {
            city: 'Minsk',
            house: 12
        }

    }

    const upgradedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(upgradedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('tecno')

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'william',
        hair: 30,
        laptop: {
            title: 'tecno'
        },
        address: {
            city: 'Minsk',
            house: 12
        },
        books: ['css', 'html', 'js', 'react']

    }

    const upgradedUser = moveUserToOtherHouse(user, 13)

    expect(user).not.toBe(upgradedUser)
    expect(user.books).toBe(upgradedUser.books)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.address).not.toBe(upgradedUser.address)
    expect(user.address.house).not.toBe(13)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'william',
        hair: 30,
        laptop: {
            title: 'tecno'
        },
        address: {
            city: 'Minsk',
            house: 12
        },
        books: ['css', 'html', 'js', 'react']

    }

    const upgradedUser = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[4]).toBe('ts')
    expect(upgradedUser.books[5]).toBe('rest api')

})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'william',
        hair: 30,
        laptop: {
            title: 'tecno'
        },
        address: {
            city: 'Minsk',
            house: 12
        },
        books: ['css', 'html', 'js', 'react']

    }

    const upgradedUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'william',
        hair: 30,
        laptop: {
            title: 'tecno'
        },
        address: {
            city: 'Minsk',
            house: 12
        },
        books: ['css', 'html', 'js', 'react']

    }

    const upgradedUser = removeBook(user, 'js')

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.books).not.toBe(upgradedUser.books)
    expect(upgradedUser.books[2]).toBe('react')
    expect(user.books[2]).toBe('js')
})

test('add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'william',
        hair: 30,
        laptop: {
            title: 'tecno'
        },
        address: {
            city: 'Minsk',
            house: 12
        },
        companies: [
            {id: 1, title: 'Google'},
            {id: 2, title: 'Yandex'},
        ]

    }

    const upgradedUser = addCompany(user, 'IT-INCUBATOR')

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.companies).not.toBe(upgradedUser.companies)
    expect(upgradedUser.companies[2].title).toBe('IT-INCUBATOR')
    expect(user.companies.length).toBe(2)
    expect(upgradedUser.companies.length).toBe(3)
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'william',
        hair: 30,
        laptop: {
            title: 'tecno'
        },
        address: {
            city: 'Minsk',
            house: 12
        },
        companies: [
            {id: 1, title: 'Google'},
            {id: 2, title: 'Yandex'},
        ]

    }

    const upgradedUser = updateCompany(user, 2, 'IT-INCUBATOR') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(upgradedUser)
    expect(user.laptop).toBe(upgradedUser.laptop)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.companies).not.toBe(upgradedUser.companies)
    expect(upgradedUser.companies[1].title).toBe('IT-INCUBATOR')
    expect(user.companies[1].title).toBe('Yandex')
    expect(user.companies.length).toBe(2)
    expect(upgradedUser.companies.length).toBe(2)
})

test('update company assac array', () => {

    let companies = {
        'william': [
            {id: 1, title: 'Google'},
            {id: 2, title: 'Yandex'},
        ],
        'artem' : [{id: 3, title: 'IT-INCUBATOR'}, {id: 4, title: 'Huygle'}]
    }

    const upgradedCompany = updateCompanyTitle2(companies, 'artem', 3, 'VK')
    expect(upgradedCompany.artem[0].title).toBe('VK')
    expect(companies.artem[0].title).toBe('IT-INCUBATOR')

})