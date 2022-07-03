import { ButtonIcon } from "../atoms/Button"
import Text from "../atoms/Text"
import UserProfile from "../atoms/UserProfile"
import CardImg from "../molecules/CardImg"

const PhotoDetail = ({ src, userName, userPhoto, views, downloads, make, model, download }) => {

    return (
        <div className="detail">
            <div className="detail-header">
                <div className='user'>
                    <UserProfile userPhoto={userPhoto} />
                    <Text text={userName} className="user-text-popup" />
                </div>
                <ButtonIcon download={download} />
            </div>
            <div className="detail-body">
                <CardImg src={src} />
            </div>
            <div className="detail-footer">
                <div className="detail-1">
                    <div className="detail-1__views">
                        <h3>Views</h3>
                        <span>{views}</span>
                    </div>
                    <div className="detail-1__downloads">
                        <h3>Downloads</h3>
                        <span>{downloads}</span>
                    </div>
                </div>
                <div className="detail-2">
                    <h3>Featured in</h3>
                    <span><a href="/">Editorial</a></span>
                </div>
                <div className="detail-3">
                    <div className="detail-3__date">
                        <span><svg width="16" height="16" viewBox="0 0 24 24" version="1.1" aria-hidden="false"><path d="M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z"></path></svg></span>
                        <span>Publicado hace 5 horas</span>
                    </div>
                    <div className="detail-3__camera">
                        <span><svg width="16" height="16" viewBox="0 0 24 24" version="1.1" aria-hidden="false"><path d="M4 5h3l2-2h6l2 2h3c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm8 3c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3Z"></path></svg></span>
                        <span>{make}, {model}</span>
                    </div>
                    <div className="detail-3__license">
                        <span><svg width="16" height="16" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M13.3333 18.9333l8.8-8.8L24 12 13.3333 22.6667 8 17.3333l1.86667-1.8666 3.46663 3.4666zM28 6.66668v8.00002c0 7.3333-5.0667 14.2666-12 16-6.93333-1.7334-12-8.6667-12-16V6.66668l12-5.33334 12 5.33334zm-2.6667 1.73333L16 4.26668 6.66667 8.40001v6.26669c0 6 4.00003 11.6 9.33333 13.2 5.3333-1.6 9.3333-7.2 9.3333-13.2V8.40001z"></path></svg></span>
                        <span>Uso gratuito bajo la Licencia Unsplash</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetail