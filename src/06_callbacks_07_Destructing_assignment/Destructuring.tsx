import React, {useState} from 'react'
import {PropsManType} from "./destrcuting.test";

type PropsType = {
    title: string
    man: PropsManType
    food: Array<string>
    car: {model: string}

}

function useIliaState(m: string) {
    return [m, function(){}]
}
 export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    // const {title,man, ...restProps} = props

     const [message, setMessage] = useIliaState('hello')



    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    )
 }