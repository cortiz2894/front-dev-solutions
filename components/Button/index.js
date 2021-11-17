import { colors, fonts } from "../../styles/theme";

export default function Button({children, clickLogIn}) {
    return(
        <>
            <button onClick={clickLogIn}>
                {children}
            </button>
            <style jsx>
                {`
                    button {
                        border-radius: 30px;
                        background: ${colors.black};
                        color: #ffffff;
                        font-family: ${fonts.base};
                        padding: 8px 20px;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        font-weight: 600;
                        border: none;
                    }

                `}
            </style>
        </>
    )
}