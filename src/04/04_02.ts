import {GovernmentBuildingsType, LocalCityType} from "../02/02_02";
import {ManType} from "../05/05_01";

export const demolishHousesOnTheStreet = (city: LocalCityType, street: string) => {
    city.houses = city.houses.filter( h => h.address.street.title !== street )
};

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
    return buildings.filter(g => g.staffCount > number)
}

export const greetingsForPeople = (man: ManType) => {
    return `Hello ${man.name.split(' ')[0]}! Welcome to it-incubator`
}

export const greetingMessage = (people: Array<ManType>) => {
    return people.map( man => `Hello ${man.name.split(' ')[0]}! Welcome to it-incubator`)
}