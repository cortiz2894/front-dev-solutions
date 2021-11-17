import { colors, fonts } from "../../styles/theme";

export default function Button({children, handleClick, disabled}) {
    return(
        <>
            <button onClick={handleClick} disabled={disabled}>
                {children}
            </button>
            <style jsx>
                {`
                    button {
                        border-radius: 5px;
                        background: ${colors.primary};
                        color: #ffffff;
                        font-family: ${fonts.base};
                        padding: 15px 20px;
                        display: flex;
                        align-items: center;
                        font-size: 18px;
                        font-weight: 600;
                        border: none;
                        width: 100%;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        margin-top: 20px;
                    }

                `}
            </style>
        </>
    )
}