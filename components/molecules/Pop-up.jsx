const PopUp = ({ children }) => {
    return (
        <div className="popup-background">
            <div className="popup">
                {children}
            </div>
        </div>
    )
}

export default PopUp