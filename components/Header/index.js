import logo from '../../public/twitter.dev-logo.png'
import Image from 'next/image'
import { backgrounds } from '../../styles/theme'
import useUser from '../../hooks/useUser'
import Avatar from '../Avatar'

export default function Header() {
    const userInfo = useUser()

    return(
        <>
            <header>
                <div className='container-image-header'>
                    <Image src={logo} alt={'loguito'} />
                </div>
                <p>{userInfo && <Avatar src={userInfo.avatar} alt={userInfo.name}/>}</p>
            </header>
            <style jsx>
                {`
                    header {
                        float: left;
                        width: 100%;
                        padding: 15px 20px;
                        border-bottom: 1px solid #ccc;
                        background-image: ${backgrounds.white};
                        box-shadow: 0 0 15px rgb(0 0 0 / 4%);
                        display: flex;
                        justify-content: space-between;
                    }
                    .container-image-header {
                        float: left;
                        width: 50px;
                        margin-right: 10px;
                    }
                `}
            </style>
        </>
    )
}