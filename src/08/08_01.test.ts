type UsersType = {
    [key: string]: {id: number, name: string}
}

let mate: UsersType

beforeEach(() => {
    mate = {
        '101': {id: 101, name: 'Dimych'},
        '3232312': {id: 3232312, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user', () => {
    mate['1'].name = 'Ekaterina'
    expect(mate['1'].name).toBe('Ekaterina')
    expect(mate['1']).toEqual({id: 1, name: 'Ekaterina'})
})

test('should delete corresponding user', () => {
    delete mate['1']
    expect(mate['1']).toBeUndefined()
})