import Image from 'next/image'
import { fonts, colors, backgrounds } from '../../styles/theme'
import ReactSvg from '../Icons/React'
import Avatar from '../Avatar/index'
import useTimeAgo from '../../hooks/useTimeAgo'
import { useEffect } from 'react/cjs/react.development'

export default function TimelineArticle( { timelineInfo } ) {

    const {name, username, avatar, message, title, tags, createdAt} = timelineInfo
    const timeAgo = useTimeAgo(createdAt)    



    
    return(
        <>
            <article >
                <h2>{title}</h2>
                <p className='time-created'>{timeAgo}</p>
                <p>{message}</p>
                <div className='tags-container'>
                    {tags && tags.map( ( tag, i ) => {
                        return <span key={i}>{tag}</span>
                    })}
                </div>
                <div>
                    <Avatar src={avatar} alt={name}/>
                    <h3>{name}</h3>
                </div>
                <b><ReactSvg fill={'#ffffff'} width={200} height={200}/></b>
            </article>
            <style jsx>
                {`
                    b {
                        position: absolute;
                        z-index: 0;
                        opacity: 0.6;
                        right: -53px;
                        top: -60px;
                    }
                    h2 {
                        float:left;
                        width: 100%;
                        font-size: 21px;
                        margin: 10px 0px;
                        font-family: ${fonts.base};
                        color: ${colors.black};
                        z-index: 1;
                        position: relative;
                    }
                    h3 {
                        font-size: 15px;
                        font-family: ${fonts.base};
                        color: ${colors.secundary};
                        position: relative;
                    }
                    .time-created {
                        right: 15px !important;
                        position: absolute !important;
                        left: inherit !important;
                        width: auto;
                        top: 5px !important;
                        font-size: 12px;
                    }
                    p {
                        font-family: ${fonts.base};
                        font-size: 16px;
                        color: ${colors.grey};
                        float: left;
                        width: 100%;
                        margin-bottom: 0px;
                        margin-top: 10px;
                        z-index: 1;
                        position: relative;
                    }
                    .tags-container > p {
                        font-size: 15px;
                        font-weight: 600;
                    }
                    .tags-container span {
                        margin-left: 10px; 
                        font-size: 13px;
                    }
                    
                    article {
                        float: left;
                        width: 100%;
                        margin-bottom: 10px;
                        background-image: ${backgrounds.white};
                        padding: 5px 15px;
                        position: relative;
                        overflow: hidden;
                    }
                    div {
                        display:flex;
                        width: 100%;
                        float: left;
                        align-items: center;
                        padding-top: 10px;
                        border-top: 1px solid #f3f3f3;
                        margin-top: 8px;
                        padding-bottom: 2px;
                    }
                    .tags-container {
                        border: none;
                        padding: 0px;
                        margin-top: 10px;
                        align-items: center;
                        justify-content: flex-end;
                        z-index: 1;
                        position: relative;

                    }
                    span {
                        font-family: ${fonts.base};
                        font-size: 13px;
                        background: #0099ff;
                        border-radius: 3px 0 0 3px;
                        color: #fff !important;
                        display: inline-block !important;
                        height: 26px;
                        float: left;
                        line-height: 26px;
                        padding: 0 30px 0 10px;
                        position: relative;
                        margin: 0 5px 0px 0;
                        opacity: 0.4;
                    }

                    .tags-container span:before {
                        background: #fff;
                        border-radius: 10px;
                        box-shadow: inset 0 1px rgb(0 0 0 / 25%);
                        content: '';
                        height: 6px;
                        right: 13px;
                        position: absolute;
                        width: 6px;
                        top: 10px;
                    }
                    .tags-container span:after {
                        content: '';
                        width: 0px;
                        height: 0px;
                        border-style: solid;
                        border-width: 13px 13px 13px 0;
                        border-color: transparent #0099ff transparent transparent;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 28px;
                        position: absolute;
                        transform: rotate(
                    180deg);
                        right: -40px;
                        top: 0px;
                    }
                `}
            </style>
        </>
    )
}