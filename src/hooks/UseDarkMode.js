import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'

export const useDarkMode = (key, initial) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initial)

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

    useEffect(()=>{
        window.document.body.classList.toggle("dark-mode");
    },[darkMode])

    return [darkMode, toggleMode]
}