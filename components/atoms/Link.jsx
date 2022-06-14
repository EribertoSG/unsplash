import Link from 'next/link'

const MainLink = () => {
    return (
        <a href=""></a>
    )
}


const DowloadLink = () => {
    return (
        <a className='dowload-link' href='#' download target="_blank" title='Dowload picture'>
            <svg className='dowload-icon' width="24" height="24" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg>
        </a>
    )
}


export {
    MainLink,
    DowloadLink
}