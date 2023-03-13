export type UserType = {
    name : string
    hair: number
    address: {city: string, house?: number}
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}
type CompanyType = {id: number, title: string}
export type CompanyTypes = {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        },
    }
}

export function upgradeUserLaptop(user: UserWithLaptopType, book: 'Macbook') {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: book
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        },
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {

    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {

    return {
        ...u,
        books: u.books.map(book => book === oldBook ? book = newBook : book)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, deleteBook: string) {

    return {
        ...u,
        books: u.books.filter(book => book !== deleteBook)
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, company: string) {

    return {
        ...u,
        companies: [...u.companies, {id: 3, title: company}]
    }
}

export function updateCompany(u: WithCompaniesType, id: number,  comp: string) {

    return {
        ...u,
        companies: u.companies.map(company => company.id === id
            ? {...company, title: comp}
            : company)
    }
}



export function updateCompanyTitle2(companies: {[key:string]: Array<CompanyType>}, userName: string, id: number, newTitle: string) {

    return {
        ...companies,
        'artem' : companies['artem'].map(company => company.id === id ? {...company, title: newTitle} : company)
    }
}