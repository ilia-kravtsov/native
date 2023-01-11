import {StudType} from "../02/02";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (st: StudType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        tecName: skill
    })
}






















































/*
import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

function sum2(a: number, b: number){
    return a + b;
}


const res = sum(sum(1,2), sum(1,3));
const res2 = sum(2,4);

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;

}
export const repairHouse = (houseType: HouseType ) => {
    houseType.reparied = true;
}

export const toFireStaff = (building: GovernmentBuildingType, StaffCountToFire: number) => {
    building.staffCount -= StaffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export const createMessage = (props: CityType) => {
    // return 'Hello ' + props.title + " cinizens. I want you be happy. All " + props.citizensNumber + " men"
    return `Hello ${props.title} cinizens. I want you be happy. All ${props.citizensNumber} men`
}
*/
