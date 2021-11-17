import AppLayout from "../../components/AppLayout"
import { useState, useEffect } from "react"
import TimelineArticle from "../../components/TimelineArticle"
import { colors, fonts } from "../../styles/theme"
import useUser from "../../hooks/useUser"
import { fetchLatestArticles } from '../../firebase/client'

export default function HomePage () {
    const [ timeline, setTimeline ] = useState([])
    const userInfo = useUser()

    useEffect(() => {
        userInfo && fetchLatestArticles().then( setTimeline )
    }, [userInfo])

    return(
        <>
            <div className="home-container">
                <AppLayout pageClass='home-container'>
                    <h2>Inicio</h2>
                    <section>
                        {timeline.map( (article, index) => {
                            return(
                                <TimelineArticle timelineInfo={article} key={index} />
                            )
                        })}
                    </section>
                </AppLayout>
            </div>
            <style jsx>
                {`
                    .home-container > div {
                        width: 100%;
                        max-width: none;
                        height: 100vh;
                        padding: 0px
                    }
                    h2 { 
                        float: left;
                        width: 100%;
                        color: white;
                        font-family: ${fonts.base};
                        padding: 0px 15px;

                    }
                    section {
                        float: left;
                        width: 100%;
                    }
                `}
            </style>
        </>
    )
}