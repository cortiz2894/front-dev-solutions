import { useState, useEffect } from 'react'
import AppLayout from '../components/AppLayout'
import Image from 'next/image'
import logo from '../public/twitter.dev-logo.png'
import Button from '../components/Button'
import { fonts, colors } from '../styles/theme'
import GitHub from '../components/Icons/GitHub'
import { loginWithGithub } from '../firebase/client'
import { useRouter } from 'next/router'
import useUser, { USER_STATES } from '../hooks/useUser'


export default function Home() {
  const userInfo = useUser()
  const router = useRouter()

  useEffect(()=> {
   userInfo && router.replace('/home')
  }, [userInfo])

  const handleClick = () => {
    loginWithGithub()
    .catch( err =>{
      console.log("Fallo al obtener usuario: ", err)
    })
  }

  return (
    <div>
      <AppLayout pageClass='login-container'>
        <Image src={logo} alt="Logo" className='logo-image' width={100} height={95}/>
        <h1>Front Dev Solutions</h1>
        <p>Share your Front-ends solutions with other developers</p>
        { userInfo === USER_STATES.NOT_LOGGED &&
          <Button clickLogIn={handleClick}>
            <GitHub width={20} fill={'#ffffff'} height={20}/><span>Login con GitHub</span>
          </Button>
        }
        {
          userInfo === USER_STATES.NOT_KNOW &&
          <span>
            loading...
          </span>
        }
        
      </AppLayout>
      <style jsx>{`
        div {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p {
          font-family: ${fonts.base};
          color: ${colors.secundary};
          text-align: center;
        }
        span {
            margin-left: 5px;
        }
      `}</style>
    </div>
  )
}
