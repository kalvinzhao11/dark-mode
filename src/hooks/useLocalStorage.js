import {useState} from 'react'

export const useLocalStorage = (key, initalValue) => {
    const [value, setValue] = useState(()=>{
        //if there is an inital local storage value set it to that
        // else set initalvalue to local storage and return inital value
        if (JSON.parse(window.localStorage.getItem(key))){
            return JSON.parse(window.localStorage.getItem(key))
        } else {
            window.localStorage.setItem(JSON.stringify(key, initalValue))
            return initalValue
        }
    })

    // a function to set value and set value to local storage
    const setVal = (val) => {
        setValue(val)
        window.localStorage.setItem(JSON.stringify(key, val))
    }

    return [value, setVal]
}