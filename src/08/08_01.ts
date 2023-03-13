export const userObj = {
    '0' : 'Dimych',
    '1' : 'Natasha',
    '2' : 'Valera',
    '3' : 'Katya',
}

let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '23': {id: 23, name: 'Valera'},
    '43': {id: 43, name: 'Katya'},
}
let user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const userArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},
]