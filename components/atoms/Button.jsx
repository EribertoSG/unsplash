const Button = () => {
    return (
        <button className="button">Button</button>
    )
}

const ButtonIcon = () => {
    return (
        <div className="button-icon">
                <a href="#" className="button-dowload" download target="_blank" rel="noopener noreferrer">
                    <span>Dowload</span>
                </a>
            <div className="button-options-container">
                <button className="button-options" title="Options">
                    <svg className="arrow-down-icon" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M9.9 11.5l6.1 6.1 6.1-6.1 1.9 1.9-8 8-8-8 1.9-1.9z"></path></svg>
                </button>
            </div>
        </div>
    )
}
const ButtonCircle = () => {
    return (
        <button className="button-circle"><span>x</span></button>
    )
}

export {
    Button,
    ButtonIcon,
    ButtonCircle
}