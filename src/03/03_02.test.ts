
import {addMoneyToBudget, createMessage, minusMoneyFromBudget, repairHouse, toFireStaff, toHireStaff} from "./03";
import {LocalCityType} from "../02/02_02";

let city: LocalCityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Gold street"}
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {title: "Central Str"}
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {title: "South Str"}
                }
            }
        ],
        citizensNumber: 1000000
    }
})

// 01 Создайте в отдельном файле функцию чтобы тесты прошли
test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test('Budget should be changed for Fire Station', () => {
    minusMoneyFromBudget(city.governmentBuildings[1], 50000);
    expect(city.governmentBuildings[1].budget).toBe(450000)
})

test('Houses should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be decreased', () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test('Greeting message should be correct for the city', () => {
    const message = createMessage(city)
    expect(message).toBe('Hello New York citizens. i want you be happy. All 1000000 people')
})