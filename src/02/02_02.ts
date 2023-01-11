export type LocalCityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressGoverType
}

export type AddressGoverType = {
    street: streetGoverType
}

export type streetGoverType = {
    title: string
}










































{/*export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    reparied: boolean
    address: AddressType
}

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE STATION"
    budget: number
    staffCount: number
    address: AddressType

}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}*/}