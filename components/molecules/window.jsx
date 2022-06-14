import { ButtonCircle, ButtonIcon } from "../atoms/Button"
import Text from "../atoms/Text"
import UserProfile from "../atoms/UserProfile"
import CardImg from "./CardImg"

const Window = () => {
    return (
        <div className="window">
            <div className="window-header">
                <div className='user'>
                    <UserProfile />
                    <Text text="Eriberto Santos" className="user-text-popup" />
                </div>
                <ButtonIcon />
            </div>
            <div className="window-body">
                <CardImg src="/assets/img/ayo-ogunseinde.jpg" />
            </div>
            <ButtonCircle />
        </div>
    )
}

export default Window