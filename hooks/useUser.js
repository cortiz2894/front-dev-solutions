import router from 'next/router'
import { useState, useEffect } from 'react'
import { handleOnAuthStateChanged } from '../firebase/client'

export const USER_STATES = {
    NOT_LOGGED : null,
    NOT_KNOW : undefined
}

export default function useUser() {
    const [ userInfo, setUserInfo ] = useState(USER_STATES.NOT_KNOW)

    useEffect(() => {
        handleOnAuthStateChanged(setUserInfo)
    },[])

    useEffect( () => {
        userInfo === USER_STATES.NOT_LOGGED && router.push('/')
    }, [userInfo])

    return userInfo
}
