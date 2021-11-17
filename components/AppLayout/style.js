import css from 'styled-jsx/css'
import { fonts, colors, backgrounds } from '../../styles/theme'

//Global Styles
export const globalStyles = css.global`
    h1 {
        font-family: ${fonts.base};
        color: ${colors.primary};
        font-size: 26px;
    }
`
//Scope Styles
export default css`
    div {
        position: relative;

    }
    .login-container {
        box-shadow: 0 0 25px rgb(0 0 0 / 9%);
        border-radius: 8px;
        min-width: 90%;
        max-width: 90%;
        min-height: 400px;
        display: flex;
        align-items: center;
        padding: 20px 25px;
    }
    .home-container {
        min-height: 100vh;
        width: 100%;
        padding: 0px;
        display: block;
        float: left;
        background-image: ${backgrounds.black};
    }
    .login-container > main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`
