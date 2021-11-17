export default function Avatar({src, alt}){
    return(
        <>
            <img src={src} alt={alt}/>
            <style jsx>
                {`
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        margin-right: 10px
                    }
                `}
            </style>
        </>
    )
}