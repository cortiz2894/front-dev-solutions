import { useState } from "react";
import AppLayout from "../../components/AppLayout";
import useUser  from "../../hooks/useUser";
import { addArticle } from "../../firebase/client";
import { useRouter } from "next/router";
import Form from "../../components/Form";

const COMPOSE_STATES = {
    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1
}

export default function AddArticle() {
    const userInfo = useUser()
    const router = useRouter();
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
    const [message, setMessage ] = useState('')
    const [title, setTitle] = useState('')

    console.log(userInfo)

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus(COMPOSE_STATES.LOADING)
        addArticle(
            userInfo.name, 
            userInfo.avatar, 
            userInfo.email, 
            message, 
            userInfo.uid,
            title
        )
        .then(() => {
            router.push('/home')
        })
        .catch((err) => {
            console.log("Create Article Failed", err)
            setStatus(COMPOSE_STATES.ERROR)
        })
    }

    const handleChange = (e) => {
        const { value } = e.target
        if(e.target.name == 'title'){
            setTitle(value)
        }else{
            setMessage(value)
        }
    }

    const isButtonDisabled = status === COMPOSE_STATES.LOADING || !message.length || !title.length

    return(
        <>
            <AppLayout pageClass='home-container'>
                <Form 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange} 
                    isButtonDisabled={isButtonDisabled}
                    title={title}
                    message={message}
                />
            </AppLayout>
        </>
    )
}