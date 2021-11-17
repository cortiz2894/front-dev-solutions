import { colors, fonts } from "../../styles/theme"
import Button from "../ButtonForm"
export default function Form({handleSubmit, handleChange, isButtonDisabled, title, message}) {

    return(
        <>
            <main>
                <h2>Share with your mates your best <b>FrontEnds</b> solutions!</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input placeholder='title' type='text' value={title} onChange={handleChange} name='title'/>
                        <textarea placeholder="Add your shit" onChange={handleChange} value={message} name='message'></textarea>
                    </div>
                    <Button disabled={isButtonDisabled}>Create Article</Button>
                </form>
            </main>
            <style jsx>
                {`
                main {
                    box-shadow: 0 0 25px rgb(0 0 0 / 9%);
                    border-radius: 8px;
                    min-width: 90%;
                    max-width: 90%;
                    min-height: calc(100vh - 137px);
                    padding: 20px 25px;
                    background: white;
                    float: left;
                    width: 100%;
                    margin-left: 5%;
                    position: relative;
                    margin-top: 20px;
                }
                h2 {
                    font-size: 30px;
                    color: ${colors.primary};
                    font-family: ${fonts.base};
                    float: left;
                    font-size: 28px;
                    line-height: 40px;
                    font-weight: 600;
                    width: 100%;
                    margin-top: 0px;
                    margin-bottom: 20px;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    float: left;
                }
                input, textarea {
                    font-family: 'Roboto';
                    text-transform: capitalize;
                    font-size: 18px;
                    font-weight: 500;
                    border: none;
                    border-bottom: 1px solid #8f8f8f;
                    resize: none;
                    padding: 10px 15px;
                    margin-bottom: 10px;
                    outline: none;
                    color: black;
                }
                `}
            </style>
        </>
    )
}